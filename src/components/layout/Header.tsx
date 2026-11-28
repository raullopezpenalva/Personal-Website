import { useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button } from "../ui-primitives/Button";
import BrandIcon from "../ui-primitives/icons/BrandIcon";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../ui-primitives/LanguageSwitcher";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="Header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="Header-inner">
        <div className="Header-left">
          <NavLink
            to={`/${lang}`}
            className="Header-logo"
            aria-label={t("main.name")}
          >
            <BrandIcon />
          </NavLink>
        </div>
        <div className="Header-center">
          {/* Desktop nav */}
          <nav className="Header-navDesktop" aria-label={t("nav.title")}>
            <NavLink to={`/${lang}`} end className="btn btn-muted">
              {t("nav.home")}
            </NavLink>
            <NavLink to={`/${lang}/about`} className="btn btn-muted">
              {t("nav.about")}
            </NavLink>
            <NavLink to={`/${lang}/services`} className="btn btn-muted">
              {t("nav.services")}
            </NavLink>
            <NavLink to={`/${lang}/projects`} className="btn btn-muted">
              {t("nav.projects")}
            </NavLink>
            <NavLink to={`/${lang}/blog`} className="btn btn-muted">
              {t("nav.blog")}
            </NavLink>
          </nav>
          {/* Mobile nav button */}
          <button
            ref={menuButton}
            className="Header-navMobile Header-menu-toggle"
            aria-label={t("btn.openMenu")}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobilePanel"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {/* Simple hamburger icon */}
            <span
              aria-hidden="true"
              style={{ fontSize: "24px", lineHeight: 1 }}
            >
              &#9776;
            </span>
          </button>
        </div>
        <div className="Header-right">
          <LanguageSwitcher />
          <Button
            to={`/${lang}/contact`}
            variant="secondary"
            className="Header-contact-btn"
          >
            {t("btn.contact")}
          </Button>
        </div>
      </div>
      {/* Mobile nav panel */}
      {mobileMenuOpen && (
        <nav
          className="Header-navMobile mobilePanel"
          id="mobilePanel"
          aria-label={t("nav.title")}
        >
          <NavLink
            to={`/${lang}`}
            end
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            to={`/${lang}/about`}
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to={`/${lang}/services`}
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.services")}
          </NavLink>
          <NavLink
            to={`/${lang}/projects`}
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.projects")}
          </NavLink>
          <NavLink
            to={`/${lang}/blog`}
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("nav.blog")}
          </NavLink>
          <NavLink
            to={`/${lang}/contact`}
            className="btn btn-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            {t("btn.contact")}
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
