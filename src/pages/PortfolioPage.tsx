import React from "react";
import Section from "../components/ui-patterns/Section";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import BulletList from "../components/ui-patterns/BulletList";
import Bullet from "../components/ui-patterns/Bullet";
import { ProyectsHomelabCompactMD } from "../components/domain/ProyectsHomlabCompactMD";
import { Button } from "../components/ui-primitives/Button";
import GitHubIconLetter from "../components/ui-primitives/icons/GitHubIconLetter";
import { ProyectsPersonalwebsiteCompactMD } from "../components/domain/ProyectsPersonalwebsiteCompactMD";
import { ProyectsWeaverCompactMD } from "../components/domain/ProyectsWeaverCompactMD";
import { useTranslation } from 'react-i18next';



const PortfolioPage: React.FC = () => {
  const { t } = useTranslation('projects');
  return (
    <>
      <Section
        id="projects-title"
      >
        <Stack direction="column" gap="none" justifyContent="center" align="stretch" margin="sm">
          <Text variant="title" align="center">{t('projects.projects-title.title')}</Text>
          <Text variant="subtitle" align="center">{t('projects.projects-title.subtitle')}</Text>
          <Text variant="body" align="center">{t('projects.projects-title.body')}</Text>
        </Stack>
      </Section>


      <Section
        id="Homelab"
        title={t('projects.homelab.title')}
        subtitles={t('projects.homelab.subtitle')}
      >
        <Stack direction="column" gap="md" justifyContent="center" align="center" >
          <Stack className="stack-60-40" direction="row" gap="none" margin="xs" justifyContent="space-between" align="stretch">
            <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-evenly" align="stretch" margin="sm">
              <Text variant="body">{t('projects.homelab.toptext')}</Text>
              <BulletList>
                <Bullet>{t('projects.homelab.bullet1')}</Bullet>
                <Bullet>{t('projects.homelab.bullet2')}</Bullet>
                <Bullet>{t('projects.homelab.bullet3')}</Bullet>
                <Bullet>{t('projects.homelab.bullet4')}</Bullet>
              </BulletList>
            </Stack>
            <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
              <ProyectsHomelabCompactMD />
            </Stack>
          </Stack>
        </Stack>
      </Section>


      <Section
        id="personal-website"
        title={t('projects.personalwebsite.title')}
        subtitles={t('projects.personalwebsite.subtitle')}
      >
        <Stack direction="column" gap="md" justifyContent="center" align="center" >
          <Stack className="stack-60-40" direction="row" gap="none" margin="xs" justifyContent="space-between" align="stretch">
            <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-evenly" align="stretch" margin="sm">
              <Text variant="body">{t('projects.personalwebsite.toptext')}</Text>
              <BulletList>
                <Bullet>{t('projects.personalwebsite.bullet1')}</Bullet>
                <Bullet>{t('projects.personalwebsite.bullet2')}</Bullet>
                <Bullet>{t('projects.personalwebsite.bullet3')}</Bullet>
                <Bullet>{t('projects.personalwebsite.bullet4')}</Bullet>
              </BulletList>
              <Button to="https://github.com/raullopezpenalva/Personal-Website" variant="secondary">
                <GitHubIconLetter className="personalweb-github-icon" />
              </Button>
            </Stack>
            <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
              <ProyectsPersonalwebsiteCompactMD />
            </Stack>
          </Stack>
        </Stack>
      </Section>
      

      <Section
        id="weaver"
        title={t('projects.weaver.title')}
        subtitles={t('projects.weaver.subtitle')}
      >
        <Stack direction="column" gap="md" justifyContent="center" align="center" >
          <Stack className="stack-60-40" direction="row" gap="none" margin="xs" justifyContent="space-between" align="stretch">
            <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-evenly" align="stretch" margin="sm">
              <Text variant="body">{t('projects.weaver.toptext')}</Text>
              <BulletList>
                <Bullet>{t('projects.weaver.bullet1')}</Bullet>
                <Bullet>{t('projects.weaver.bullet2')}</Bullet>
                <Bullet>{t('projects.weaver.bullet3')}</Bullet>
                <Bullet>{t('projects.weaver.bullet4')}</Bullet>
                <Bullet>{t('projects.weaver.bullet5')}</Bullet>
              </BulletList>
              <Button to="https://weaver.cat" variant="secondary">
                <p>{t('projects.weaver.btn')}</p>
              </Button>
            </Stack>
            <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
              <ProyectsWeaverCompactMD />
            </Stack>
          </Stack>
        </Stack>
      </Section>
    </>
    
  );
};

export default PortfolioPage;
