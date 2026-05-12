import Section from "../components/ui-patterns/Section";
import { Button } from "../components/ui-primitives/Button";
import { homeServicesPreview } from "../data/home-services-preview";
import ServicePreviewCard from "../components/domain/ServicePreviewCard";
import Stack from "../components/ui-primitives/Stack";
// import GitHubIconLetter from "../components/ui-primitives/icons/GitHubIconLetter";
import Bullet from "../components/ui-patterns/Bullet";
import Text from "../components/ui-primitives/Text";
import BulletList from "../components/ui-patterns/BulletList";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import FeaturedCaseStudyCard from "../components/domain/FeaturedCaseStudyCard";
import { homeFeaturedCaseStudies } from "../data/home-featured-case-studies";

const HomePage: React.FC = () => {
  const { t } = useTranslation('home');
  const { lang } = useParams<{ lang: string }>();
  const { t: tCommon } = useTranslation('common');
  return (
    <>
      {/* HERO */}
      <Section id="hero" className="hero-section" justifyContent="center">
        <div className="hero-inner">
          <p className="hero-kicker">{tCommon('main.tagline')}</p>
          <h1 className="hero-title">
            {tCommon('main.name')}
          </h1>
          <p className="hero-text">
            {tCommon('main.description')}
          </p>
          <div className="hero-actions">
            <Button to={`/${lang}/services`} variant="primary">
              {tCommon('btn.services')}
            </Button>
            <Button to={`/${lang}/contact`} variant="secondary">
              {tCommon('btn.contact')}
            </Button>
          </div>
        </div>
      </Section>
      
      {/* SERVICE PREVIEW */}
      <Section
        id="service-preview"
        title={t('services.title')}
        subtitles={t('services.subtitle')}
        justifyContent="space-between"
      >
        <div className="services-preview-grid">
          {homeServicesPreview.map((service) => (
            <ServicePreviewCard
              key={service.id}
              image={service.image}
              translationKey={service.translationKey}
            />
          ))}
        </div>
      </Section>
      
      {/* HYBRID PROFILE */}
      <Section
        id="hybrid-profile"
        title={t("hybrid-profile.title")}
        subtitles={t("hybrid-profile.subtitle")}
        justifyContent="center"
        flexDirection="column"
      >
        <Stack className="stack-60-40" direction="row" gap="none" margin="lg">
          <Stack align="center" justifyContent="space-between" gap="md" className="stack-60-40-left">
            <Text>{t("hybrid-profile.text1")}</Text>
            <Text>{t("hybrid-profile.text2")}</Text>
            <Text>{t("hybrid-profile.text3")}</Text>

            <BulletList className="personalweb-bullet-list">
              <Bullet>{t("hybrid-profile.bullet1")}</Bullet>
              <Bullet>{t("hybrid-profile.bullet2")}</Bullet>
              <Bullet>{t("hybrid-profile.bullet3")}</Bullet>
            </BulletList>

            <div className="personalweb-buttons">
              <Button to={`/${lang}/about`} variant="primary">
                {tCommon("btn.about")}
              </Button>
              <Button to={`/${lang}/projects`} variant="secondary">
                {tCommon("btn.projects")}
              </Button>
            </div>
          </Stack>

          <Stack
            align="stretch"
            gap="md"
            direction="row"
            justifyContent="center"
            className="stack-60-40-right"
          >
            <div className="hybrid-profile-image-placeholder">
              <img className="hybrid-profile-image" src="src/assets/images/hybrid-profile/back-d-b.webp" alt="Hybrid profile illustration" />
          
          </div>
          </Stack>
        </Stack>
      </Section>

      {/* FEATURES CASE STUDIES */}
      <Section
        id="featured-case-studies"
        title={t("featuredCaseStudies.title")}
        subtitles={t("featuredCaseStudies.subtitle")}
        justifyContent="space-between"
      >
        <div className="featured-case-studies-grid">
          {homeFeaturedCaseStudies.map((caseStudy) => (
            <FeaturedCaseStudyCard
              key={caseStudy.id}
              translationKey={caseStudy.translationKey}
              to={`/${lang}${caseStudy.href}`}
            />
          ))}
        </div>
      </Section>



      {/* This web is developed by me */}
      {/* <Section
        id="about-this-web"
        title={t('about-this-web.title')}
        subtitles={t('about-this-web.subtitle')}
        justifyContent="center"
        flexDirection="column"
      >
        <Stack className="stack-60-40" direction="row" gap="none" margin="lg">
          <Stack align="center" gap="md" className="stack-60-40-left">
            <Text>{t('about-this-web.description')}</Text>
            <BulletList className="personalweb-bullet-list">
              <Bullet>{t('about-this-web.bullet1')}</Bullet>
              <Bullet>{t('about-this-web.bullet2')}</Bullet>
              <Bullet>{t('about-this-web.bullet3')}</Bullet>
            </BulletList>
            <div className="personalweb-buttons">
              <Button to={`/${lang}/projects`} variant="primary">
                {tCommon('btn.projects')}
              </Button>
              <Button to="https://github.com/raullopezpenalva/Personal-Website" variant="secondary">
                <GitHubIconLetter className="personalweb-github-icon" />
              </Button>
            </div>
          </Stack>
          <Stack align="stretch" gap="md" direction="row" justifyContent="center" className="stack-60-40-right">
            <PipelineYaml />
          </Stack>
        </Stack>
      </Section> */}

      {/* CALL TO ACTION */}
      <Section id="contact" className="call-to-action-section" justifyContent="center">
        <div className="call-to-action">
          <p className="call-to-action__kicker">{t("CTA.kicker")}</p>
          <h2>{t('CTA.h2')}</h2>
          <p>{t('CTA.p')}</p>
          <Button to={`/${lang}/contact`} variant="primary">
            {tCommon('btn.contact')}
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;