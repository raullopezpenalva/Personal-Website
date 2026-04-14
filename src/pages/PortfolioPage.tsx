import React from "react";
import Section from "../components/ui-patterns/Section";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import { useTranslation } from 'react-i18next';
import ProjectCard from "../components/domain/ProjectCard";
import { projects } from "../data/projects";

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

      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
};

export default PortfolioPage;
