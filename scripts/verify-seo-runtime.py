#!/usr/bin/env python3
"""Verify an explicitly chosen disposable container over its own loopback network."""
import json
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from html.parser import HTMLParser


class Document(HTMLParser):
    def __init__(self, body):
        super().__init__(convert_charrefs=True)
        self.language = None
        self.in_head = False
        self.in_title = False
        self.titles = []
        self.meta = {}
        self.links = {}
        self.feed(body.decode("utf-8"))

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "html":
            self.language = attrs.get("lang")
        if tag == "head":
            self.in_head = True
        if not self.in_head:
            return
        if tag == "title":
            self.in_title = True
            self.titles.append("")
        elif tag == "meta":
            key = attrs.get("name") or attrs.get("property")
            if key:
                self.meta.setdefault(key, []).append(attrs.get("content"))
        elif tag == "link":
            key = (attrs.get("rel"), attrs.get("hreflang"))
            self.links.setdefault(key, []).append(attrs.get("href"))

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False
        if tag == "head":
            self.in_head = False

    def handle_data(self, data):
        if self.in_title:
            self.titles[-1] += data


def run(container):
    # No published port or host network is needed. nc is supplied by Alpine's BusyBox.
    def request(path):
        assert path.startswith("/") and not re.search(r"[\r\n ]", path), path
        wire = ("GET " + path + " HTTP/1.0\r\nHost: localhost\r\nConnection: close\r\n\r\n").encode()
        result = subprocess.run(
            ["docker", "exec", "-i", container, "nc", "127.0.0.1", "80"],
            input=wire, capture_output=True, check=True, timeout=15,
        )
        header, separator, body = result.stdout.partition(b"\r\n\r\n")
        assert separator, ("Missing HTTP response", path, result.stdout[:300])
        lines = header.decode("iso-8859-1").split("\r\n")
        status = int(lines[0].split()[1])
        headers = dict(line.split(": ", 1) for line in lines[1:] if ": " in line)
        return status, {key.lower(): value for key, value in headers.items()}, body

    manifest = subprocess.run(
        ["docker", "exec", container, "cat", "/usr/share/nginx/html/_seo/routes.json"],
        capture_output=True, check=True, timeout=15,
    )
    routes = json.loads(manifest.stdout)
    assert routes and any(route["metadata"]["indexable"] for route in routes)

    def verify_page(path, expected):
        status, headers, body = request(path)
        assert status == 200, (path, status)
        assert headers["content-type"].startswith("text/html"), (path, headers)
        document = Document(body)
        assert document.language == expected["language"], path
        assert document.titles == [expected["title"]], (path, document.titles)
        assert document.meta["description"] == [expected["description"]], path
        assert document.meta["robots"] == ["index, follow" if expected["indexable"] else "noindex, follow"], path
        assert document.links[("canonical", None)] == [expected["canonical"]], path
        expected_alternates = {
            ("alternate", alternate["language"]): [alternate["href"]]
            for alternate in expected["alternates"]
        }
        actual_alternates = {key: value for key, value in document.links.items() if key[0] == "alternate"}
        assert actual_alternates == expected_alternates, path
        og = {
            "og:title": expected["title"], "og:description": expected["description"],
            "og:type": "website", "og:url": expected["canonical"],
            "og:image": expected["image"], "og:image:alt": expected["imageAlt"],
        }
        assert {key: value for key, value in document.meta.items() if key.startswith("og:")} == {
            key: [value] for key, value in og.items()
        }, path
        return body

    for route in routes:
        verify_page(route["pathname"], route["metadata"])

    # Exercise representative normalization variants independently of the manifest.
    for path in ["/es", "/en/contact", "/es/projects/homelab-self-hosted-infrastructure"]:
        expected = next(route["metadata"] for route in routes if route["pathname"] == path)
        verify_page(path + "?utm_source=test", expected)
        status, headers, _ = request(path + "/?utm_source=test")
        assert status == 308, (path, status)
        assert headers.get("location") == path + "?utm_source=test", (path, headers)

    status, headers, body = request("/sitemap.xml")
    assert status == 200 and headers["content-type"].startswith("application/xml")
    root = ET.fromstring(body)
    assert root.tag == "{http://www.sitemaps.org/schemas/sitemap/0.9}urlset"
    locations = [element.text for element in root.findall("{*}url/{*}loc")]
    expected_locations = [route["metadata"]["canonical"] for route in routes if route["metadata"]["indexable"]]
    assert len(locations) == len(set(locations)) and set(locations) == set(expected_locations)

    status, headers, body = request("/robots.txt")
    assert status == 200 and headers["content-type"].startswith("text/plain")
    assert body.decode() == "User-agent: *\nAllow: /\nSitemap: https://raullopezpenalva.com/sitemap.xml\n"

    status, headers, body = request("/images/og/profile.webp")
    assert status == 200 and headers["content-type"].startswith("image/webp")
    assert body[:4] == b"RIFF" and body[8:12] == b"WEBP"

    status, _, body = request("/")
    assert status == 200 and b'<div id="root"></div>' in body
    status, headers, _ = request("/index.html?ref=test")
    assert status == 308 and headers.get("location") == "/?ref=test"

    for path in [
        "/es/seo-missing", "/en/projects/seo-missing", "/fr/about", "/es/projects/seo-missing",
        "/es/seo-missing/", "/es/projects/seo-missing/", "/fr/about/",
        "/assets/seo-missing.js", "/images/seo-missing.webp",
        "/_pages/es.html", "/_errors/es.html", "/_seo/routes.json",
        "/es.html", "/es/about.html",
    ]:
        status, _, body = request(path)
        assert status == 404, (path, status)
        document = Document(body)
        assert document.meta.get("robots") == ["noindex, follow"], path
        assert ("canonical", None) not in document.links, path
        assert document.language == ("es" if path.startswith("/es/") else "en"), path
        assert b'href="/' in body, path

    # Fault injection only in the disposable container, never in the image or a mounted path.
    subprocess.run(
        ["docker", "exec", container, "rm",
         "/usr/share/nginx/html/robots.txt", "/usr/share/nginx/html/sitemap.xml"],
        check=True, timeout=15,
    )
    for path in ["/robots.txt", "/sitemap.xml"]:
        status, _, body = request(path)
        assert status == 404 and b'<meta data-site-seo name="robots" content="noindex, follow">' in body, path

    print(f"SEO runtime passed: {len(routes)} initial HTML routes, {len(locations)} sitemap entries, MIME, redirects, assets and real 404 responses.")


if __name__ == "__main__":
    run(sys.argv[1])
