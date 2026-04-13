import Section from "../components/ui-patterns/Section";
import { Button } from "../components/ui-primitives/Button";
import Card from "../components/ui-patterns/Card";
import { cards } from "../data/home-how-i-think-cards";
import Stack from "../components/ui-primitives/Stack";
import GitHubIconLetter from "../components/ui-primitives/icons/GitHubIconLetter";
import Bullet from "../components/ui-patterns/Bullet";
import Text from "../components/ui-primitives/Text";
import { PipelineYaml } from "../components/domain/PipelineYaml";
import BulletList from "../components/ui-patterns/BulletList";
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation('home');
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
            <Button to="/vision" variant="primary">
              {tCommon('btn.vision')}
            </Button>
            <Button to="/contact" variant="secondary">
              {tCommon('btn.contact')}
            </Button>
          </div>
        </div>
      </Section>
      
      {/* HOW I THINK */}
      <Section
        id="how-i-think"
        title={t('how-i-think.title')}
        subtitles={t('how-i-think.subtitle')}
        justifyContent="space-between"
      >
        <div className="card-grid">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </Section>
      
      {/* This web is developed by me */}
      <Section
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
              <Button to="/projects" variant="primary">
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
      </Section>

      {/* CALL TO ACTION */}
      <Section id="contact" className="call-to-action-section" justifyContent="center">
        <div className="call-to-action">
          <h2>{t('CTA.h2')}</h2>
          <p>{t('CTA.p')}</p>
          <Button to="/contact" variant="primary">
            {tCommon('btn.contact')}
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;