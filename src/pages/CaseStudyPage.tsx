import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Section from "../components/ui-patterns/Section";
import SubSection from "../components/ui-patterns/SubSection";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import BulletList from "../components/ui-patterns/BulletList";
import { Button } from "../components/ui-primitives/Button";
import { projects } from "../data/projects";

const CaseStudyPage: React.FC = () => {
  const { lang, projectId } = useParams<{ lang: string; projectId: string }>();
  const { t } = useTranslation("projects");

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to={`/${lang}/projects`} replace />;
  }

  const techListRaw = t(`projects.${project.id}.casestudy.tech_list`, { returnObjects: true });
  const techList = Array.isArray(techListRaw) ? (techListRaw as string[]) : [];

  return (
    <>
      <Section id="casestudy-header">
        <Stack direction="column" gap="sm" justifyContent="center" align="stretch" margin="sm">
          <Text variant="title" align="center">{t(`projects.${project.id}.title`)}</Text>
          <Text variant="subtitle" align="center">{t(`projects.${project.id}.subtitle`)}</Text>
          <Stack direction="row" gap="sm" justifyContent="center" align="center">
            <Button to={`/${lang}/projects`} variant="muted">
              ← {t("projects.btn.backToProjects")}
            </Button>
          </Stack>
        </Stack>
      </Section>

      <Section
        id="casestudy-overview"
        title={t("projects.casestudy.label.overview")}
      >
        <Text variant="body">{t(`projects.${project.id}.casestudy.overview`)}</Text>
      </Section>

      <Section
        id="casestudy-challenge"
        title={t("projects.casestudy.label.challenge")}
      >
        <Text variant="body">{t(`projects.${project.id}.casestudy.challenge`)}</Text>
      </Section>

      <Section
        id="casestudy-solution"
        title={t("projects.casestudy.label.solution")}
      >
        <Stack direction="column" gap="md" justifyContent="center" align="stretch">
          <Text variant="body">{t(`projects.${project.id}.casestudy.solution`)}</Text>
          <SubSection>
            <SyntaxHighlighter
              language="markdown"
              style={vscDarkPlus}
              customStyle={{ borderRadius: 12, fontSize: "var(--font-size-xxs)", margin: 0 }}
              className="codeBlock"
            >
              {project.compactMD}
            </SyntaxHighlighter>
          </SubSection>
        </Stack>
      </Section>

      <Section
        id="casestudy-tech"
        title={t("projects.casestudy.label.tech")}
      >
        <BulletList items={Array.isArray(techList) ? techList : []} />
      </Section>

      <Section
        id="casestudy-outcome"
        title={t("projects.casestudy.label.outcome")}
      >
        <Stack direction="column" gap="md" justifyContent="center" align="stretch">
          <Text variant="body">{t(`projects.${project.id}.casestudy.outcome`)}</Text>
          <Stack direction="row" gap="sm" justifyContent="flex-start" align="center">
            {project.githubLink && (
              <Button to={project.githubLink} variant="secondary">
                GitHub
              </Button>
            )}
            {project.externalLink && (
              <Button to={project.externalLink} variant="secondary">
                {t(`projects.${project.id}.btn`)}
              </Button>
            )}
            <Button to={`/${lang}/projects`} variant="muted">
              ← {t("projects.btn.backToProjects")}
            </Button>
          </Stack>
        </Stack>
      </Section>
    </>
  );
};

export default CaseStudyPage;
