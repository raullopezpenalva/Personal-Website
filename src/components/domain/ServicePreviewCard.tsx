import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

type ServicePreviewCardProps = {
  image: string;
  translationKey: string;
  to: string;
};

const ServicePreviewCard: React.FC<ServicePreviewCardProps> = ({
  image,
  translationKey,
  to,
}) => {
  const { t } = useTranslation("home");

  const points = t(`${translationKey}.points`, {
    returnObjects: true,
  }) as string[];

  return (
    <Link to={to} className="service-preview-card-link">
      <article className="service-preview-card">
        <div className="service-preview-card__image-wrapper">
          <img
            src={image}
            alt={t(`${translationKey}.title`)}
            className="service-preview-card__image"
            loading="lazy"
          />
        </div>

        <div className="service-preview-card__content">
          <h3>{t(`${translationKey}.title`)}</h3>
          <p>{t(`${translationKey}.description`)}</p>

          <ul className="service-preview-card__points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </Link>
  );
};

export default ServicePreviewCard;