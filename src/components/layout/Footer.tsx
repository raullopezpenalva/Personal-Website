import EmailIcon from "../ui-primitives/icons/EmailIcon.tsx";
import GitHubIcon from "../ui-primitives/icons/GitHubIcon.tsx";
import LinkedInIcon from "../ui-primitives/icons/LinkedInIcon.tsx";
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const githubUrl = "https://github.com/raullopezpenalva";
    const linkedinUrl = "https://www.linkedin.com/in/raúl-lópez-penalva/";
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-top">
                    {/* Navegación vertical */}    
                    <nav className="footer-nav">
                        <p className="footer-nav-title">{t('nav.title')}</p>
                        <a href="/">{t('nav.home')}</a>
                        <a href="/about">{t('nav.about')}</a>
                        <a href="/services">{t('nav.services')}</a>
                        <a href="/projects">{t('nav.projects')}</a>
                        <a href="/blog">{t('nav.blog')}</a>
                        <a href="/contact">{t('btn.contact')}</a>
                    </nav>
                    
                    {/* Bloque marca + tagline */}
                    <div className="footer-brand">
                        <p className="footer-name">{t('main.name')}</p>
                        <p className="footer-tagline">{t('main.tagline')}</p>
                    </div>

                    {/* Iconos sociales */}
                    <div className="footer-social">
                        <p className="footer-social-title">{t('footer.follow')}</p>
                        <div className="footer-social-icons">
                            <a
                                href="/contact"
                                arial-label={t('btn.contact')}
                                className="footer-icon-link"
                            >
                                <EmailIcon />
                            </a>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                arial-label="GitHub"
                                className="footer-icon-link"
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href={linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                arial-label="LinkedIn"
                                className="footer-icon-link"
                            >
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Derechos de autor */}
                <div className="footer-bottom-copy">
                    <p>© {currentYear} {t('main.name')}. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;