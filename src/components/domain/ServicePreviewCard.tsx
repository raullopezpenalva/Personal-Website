import { useTranslation } from "react-i18next";

type ServicePreviewCardProps = {
  image: string;
  translationKey: string;
};

const ServicePreviewCard: React.FC<ServicePreviewCardProps> = ({
  image,
  translationKey,
}) => {
  const { t } = useTranslation("home");

  const points = t(`${translationKey}.points`, {
    returnObjects: true,
  }) as string[];

  return (
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
  );
};

export default ServicePreviewCard;