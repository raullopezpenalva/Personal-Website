import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Section from "../ui-patterns/Section";
import Stack from "../ui-primitives/Stack";
import Text from "../ui-primitives/Text";
import BulletList from "../ui-patterns/BulletList";
import { Button } from "../ui-primitives/Button";
import GitHubIconLetter from "../ui-primitives/icons/GitHubIconLetter";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { lang } = useParams<{ lang: string }>();
  const { t } = useTranslation("projects");
  const { id, compactMD, externalLink, githubLink } = project;

  const bulletsRaw = t(`projects.${id}.bullets`, { returnObjects: true });
  const bullets = Array.isArray(bulletsRaw) ? (bulletsRaw as string[]) : [];

  return (
    <Section
      id={id}
      title={t(`projects.${id}.title`)}
      subtitles={t(`projects.${id}.subtitle`)}
    >
      <Stack direction="column" gap="md" justifyContent="center" align="center">
        <Stack className="stack-60-40" direction="row" gap="none" margin="xs" justifyContent="space-between" align="stretch">
          <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-evenly" align="stretch" margin="sm">
            <Text variant="body">{t(`projects.${id}.toptext`)}</Text>
            <BulletList items={Array.isArray(bullets) ? bullets : []} />
            <Stack direction="row" gap="sm" justifyContent="flex-start" align="center">
              <Button to={`/${lang}/projects/${id}`} variant="primary">
                {t("projects.btn.learnMore")}
              </Button>
              {githubLink && (
                <Button to={githubLink} variant="secondary">
                  <GitHubIconLetter className="personalweb-github-icon" />
                </Button>
              )}
              {externalLink && (
                <Button to={externalLink} variant="secondary">
                  {t(`projects.${id}.btn`)}
                </Button>
              )}
            </Stack>
          </Stack>
          <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
            <SyntaxHighlighter
              language="markdown"
              style={vscDarkPlus}
              customStyle={{ borderRadius: 16, fontSize: "var(--font-size-xxs)", margin: 0 }}
              className="codeBlock"
            >
              {compactMD}
            </SyntaxHighlighter>
          </Stack>
        </Stack>
      </Stack>
    </Section>
  );
};

export default ProjectCard;
