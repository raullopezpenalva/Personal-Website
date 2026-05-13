import type React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../components/ui-patterns/Section";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import { caseStudies } from "../data/case-studies";
import BulletList from "../components/ui-patterns/BulletList";
import Bullet from "../components/ui-patterns/Bullet";
import CaseStudyGallery from "../components/domain/CaseStudyGallery";
import { Button } from "../components/ui-primitives/Button";

const CaseStudyPage: React.FC = () => {
  const { slug, lang } = useParams<{ slug: string; lang: string }>();
  const { t } = useTranslation("projects");
  const { t: tCommon } = useTranslation('common');

  const caseStudy = caseStudies.find((item) => item.slug === slug);

  if (!caseStudy) {
    return <Navigate to={`/${lang}/projects`} replace />;
  }

  const key = caseStudy.translationKey;

  const detailSections = [
    {
      id: "context",
      title: t("detail.context"),
      text: t(`${key}.detail.context`),
    },
    {
      id: "challenge",
      title: t("detail.challenge"),
      text: t(`${key}.detail.challenge`),
    },
    {
      id: "role",
      title: t("detail.role"),
      text: t(`${key}.detail.role`),
    },
    {
      id: "approach",
      title: t("detail.approach"),
      text: t(`${key}.detail.approach`),
    },
    {
      id: "result",
      title: t("detail.result"),
      text: t(`${key}.detail.result`),
    },
    {
      id: "demonstrates",
      title: t("detail.demonstrates"),
      text: t(`${key}.detail.demonstrates`),
    },
  ];

  const rawTools = t(`${key}.detail.tools`, { returnObjects: true });
    const tools = Array.isArray(rawTools) ? rawTools : [];

    const galleryImages = caseStudy.galleryImages ?? [];

  return (
    <>
      <Section id="case-study-hero" justifyContent="center">
        <Stack gap="md" margin="lg">
          <Link to={`/${lang}/projects`} className="case-study-back-link">
            ← {t("detail.backToProjects")}
          </Link>

          <div className="case-study-hero">
            <div className="case-study-hero__content">
              <p className="case-study-hero__category">
                {t(`${key}.category`)}
              </p>

              <Text variant="title" className="case-study-hero__title">
                {t(`${key}.title`)}
              </Text>

              <Text variant="body" className="case-study-hero__summary">
                {t(`${key}.summary`)}
              </Text>

              <ul className="case-study-hero__tags">
                {caseStudy.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>

            <div className="case-study-hero__image-wrapper">
              <img
                src={caseStudy.coverImage}
                alt={t(`${key}.title`)}
                className={`case-study-hero__image case-study-hero__image--${caseStudy.id}`}
              />
            </div>
          </div>
        </Stack>
      </Section>

      <Section
        id="case-study-detail"
        title={t("detail.caseStudy")}
        justifyContent="center"
        flexDirection="column"
      >
        <div className="case-study-detail-grid">
          {detailSections.map((section) => (
            <article key={section.id} className="case-study-detail-card">
              <h2>{section.title}</h2>
              <Text variant="body">{section.text}</Text>
            </article>
          ))}
        </div>
      </Section>

      {tools.length > 0 && (
        <Section
            id="case-study-tools"
            title={t("detail.tools")}
            justifyContent="center"
            flexDirection="column"
        >
            <BulletList className="case-study-tools-list">
            {tools.map((tool) => (
                <Bullet key={tool}>{tool}</Bullet>
            ))}
            </BulletList>
        </Section>
        )}

        {galleryImages.length > 0 && (
        <Section
            id="case-study-gallery"
            title={t("detail.gallery")}
            justifyContent="center"
            flexDirection="column"
        >
            <CaseStudyGallery
            images={galleryImages}
            title={t(`${key}.title`)}
            />
        </Section>
        )}
        <Section
        id="case-study-cta"
        className="case-study-cta-section"
        justifyContent="center"
        >
        <div className="case-study-cta">
            <h2>{t("detail.ctaTitle")}</h2>

            <Text variant="body">
            {t("detail.ctaText")}
            </Text>

            <div className="case-study-cta__actions">
            <Button to={`/${lang}/projects`} variant="secondary">
                {t("detail.backToProjects")}
            </Button>

            <Button to={`/${lang}/contact`} variant="primary">
                {tCommon("btn.contact")}
            </Button>
            </div>
        </div>
        </Section>
    </>
  );
};

export default CaseStudyPage;