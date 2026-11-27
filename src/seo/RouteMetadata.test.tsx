import { StrictMode } from "react";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import i18n from "../i18n";
import { routes } from "../router";
import { seoPages, SITE_ORIGIN } from "./metadata";

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => cleanup());

const indexablePaths = seoPages.filter((page) => page.indexable)
  .flatMap((page) => ["es", "en"].map((language) => `/${language}${page.path}`));

describe("real application routes", () => {
  it.each(indexablePaths)("sets metadata and one semantic h1 on direct access to %s", async (path) => {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(<StrictMode><RouterProvider router={router} /></StrictMode>);
    await waitFor(() => {
      expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(SITE_ORIGIN + path);
      expect(document.documentElement.lang).toBe(path.split("/")[1]);
      expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    });
    expect(document.head.querySelectorAll("title")).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('link[rel="alternate"]')).toHaveLength(2);
    expect(document.head.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(SITE_ORIGIN + path);
    router.dispose();
  });

  it("updates the head on navigation and language switching without stale tags", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/es/contact/?utm_source=test#form"] });
    render(<StrictMode><RouterProvider router={router} /></StrictMode>);
    await waitFor(() => expect(document.title).toBe("Contacto | Raúl López Penalva"));

    await act(() => router.navigate("/es/blog"));
    await waitFor(() => expect(document.head.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, follow"));
    expect(document.head.querySelector('link[rel="alternate"]')).toBeNull();
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Blog próximamente");

    await act(() => router.navigate("/es/projects/homelab-self-hosted-infrastructure?utm_source=test#tools"));
    await waitFor(() => expect(document.title).toBe("Homelab e infraestructura self-hosted | Raúl López Penalva"));
    await userEvent.click(screen.getByRole("button", { name: "EN", exact: true }));
    await waitFor(() => {
      expect(document.title).toBe("Homelab and Self-hosted Infrastructure | Raúl López Penalva");
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Homelab and Self-hosted Infrastructure");
      expect(document.documentElement.lang).toBe("en");
    });
    expect(document.head.querySelectorAll("title")).toHaveLength(1);
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.head.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("index, follow");
    expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute("href"))
      .toBe(SITE_ORIGIN + "/en/projects/homelab-self-hosted-infrastructure");
    expect(document.head.querySelectorAll('link[rel="alternate"]')).toHaveLength(2);
    router.dispose();
    await act(async () => { await i18n.changeLanguage("en"); });
  });
});
