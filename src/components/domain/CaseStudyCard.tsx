import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type CaseStudyCardProps = {
    id: string;
    image: string;
    translationKey: string;
    tags: string[];
    to: string;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  image,
  translationKey,
  tags,
  to,
}) => {
  const { t } = useTranslation("projects");

  return (
    <Link to={to} className="case-study-card-link">
      <article className="case-study-card">
        <div className="case-study-card__image-wrapper">
          <img
            src={image}
            alt={t(`${translationKey}.title`)}
            className={`case-study-card__image case-study-card__image--${id}`}
            loading="lazy"
          />
        </div>

        <div className="case-study-card__content">
          <p className="case-study-card__category">
            {t(`${translationKey}.category`)}
          </p>

          <h3>{t(`${translationKey}.title`)}</h3>

          <p className="case-study-card__summary">
            {t(`${translationKey}.summary`)}
          </p>

          <ul className="case-study-card__tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <span className="case-study-card__cta">
            {t("card.cta")} →
          </span>
        </div>
      </article>
    </Link>
  );
};

export default CaseStudyCard;