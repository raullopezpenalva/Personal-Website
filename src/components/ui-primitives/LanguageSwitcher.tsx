import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { type SupportedLanguage } from '../../i18n';
import Button from './Button';

export function LanguageSwitcher() {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  const currentLang = lang as SupportedLanguage;

  const handleChangeLanguage = (newLang: SupportedLanguage) => {
    if (newLang === currentLang) return;

    const newPath = location.pathname.replace(
        `/${currentLang}`,
        `/${newLang}`
    );

    navigate(newPath);
  };

  return (
    <>
        <div className="language-switcher">
            <Button variant='muted' onClick={() => handleChangeLanguage("es")} disabled={currentLang === "es"} className={currentLang === "es" ? "active-language" : ""}>ES</Button>
            {/* <h1>|</h1> */}
            <Button variant='muted' onClick={() => handleChangeLanguage("en")} disabled={currentLang === "en"} className={currentLang === "en" ? "active-language" : ""}>EN</Button>
        </div>
    
    </>
  );
}