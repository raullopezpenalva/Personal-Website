import { useTranslation } from "react-i18next";
// import { Button } from "../ui-primitives/Button";

type FeaturedCaseStudyCardProps = {
  translationKey: string;
  to: string;
};

const FeaturedCaseStudyCard: React.FC<FeaturedCaseStudyCardProps> = ({
  translationKey,
//   to,
}) => {
  const { t } = useTranslation("home");

  return (
    <article className="featured-case-study-card">
      <p className="featured-case-study-card__category">
        {t(`${translationKey}.category`)}
      </p>

      <h3>{t(`${translationKey}.title`)}</h3>

      <p className="featured-case-study-card__description">
        {t(`${translationKey}.description`)}
      </p>

      <p className="featured-case-study-card__value">
        {t(`${translationKey}.value`)}
      </p>

      {/* <Button to={to} variant="secondary">
        {t("featuredCaseStudies.cardButton")}
      </Button> */}
    </article>
  );
};

export default FeaturedCaseStudyCard;