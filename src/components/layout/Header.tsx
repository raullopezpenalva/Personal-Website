import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui-primitives/Button';
import BrandIcon from '../ui-primitives/icons/BrandIcon';
import { useTranslation } from 'react-i18next';


export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="Header">
      <div className="Header-inner">
        <div className="Header-left">
          <NavLink to="/" className="Header-logo">
            <BrandIcon />
          </NavLink>
        </div>
        <div className="Header-center">
          {/* Desktop nav */}
          <nav className="Header-navDesktop">
            <NavLink to="/" className="btn btn-muted">{t('nav.home')}</NavLink>
            <NavLink to="/about" className="btn btn-muted">{t('nav.about')}</NavLink>
            <NavLink to="/vision" className="btn btn-muted">{t('nav.vision')}</NavLink>
            <NavLink to="/projects" className="btn btn-muted">{t('nav.projects')}</NavLink>
            <NavLink to="/blog" className="btn btn-muted">{t('nav.blog')}</NavLink>
          </nav>
          {/* Mobile nav button */}
          <button
            className="Header-navMobile"
            aria-label={t('nav.openMenu')}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobilePanel"
            onClick={() => setMobileMenuOpen((open) => !open)}
            /* style={{ display: 'none' }} */
          >
            {/* Simple hamburger icon */}
            <span style={{ fontSize: "32px", lineHeight: 1 }}>&#9776;</span>
          </button>
        </div>
        <div className="Header-right">
          <Button to="/contact" variant="secondary" className="Header-contact-btn">
            {t('nav.contact')}
          </Button>
        </div>
      </div>
      {/* Mobile nav panel */}
      {mobileMenuOpen && (
        <nav className="Header-navMobile mobilePanel" id="mobilePanel">
          <NavLink to="/" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</NavLink>
          <NavLink to="/about" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</NavLink>
          <NavLink to="/vision" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>{t('nav.vision')}</NavLink>
          <NavLink to="/projects" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>{t('nav.projects')}</NavLink>
          <NavLink to="/blog" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>{t('nav.blog')}</NavLink>
        </nav>
      )}
    </header>
  );
};
