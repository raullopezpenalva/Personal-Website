import Section from "../components/ui-patterns/Section";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import CaseStudyCard from "../components/domain/CaseStudyCard";
import { caseStudies } from "../data/case-studies";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation("projects");
  const { lang } = useParams<{ lang: string }>();

  return (
    <>
      <Section id="projects-hero" justifyContent="center">
        <Stack direction="column" gap="sm" align="center" margin="lg">
          <Text variant="title" align="center">
            {t("hero.title")}
          </Text>
          <Text variant="subtitle" align="center">
            {t("hero.subtitle")}
          </Text>
          <Text variant="body" align="center">
            {t("hero.body")}
          </Text>
        </Stack>
      </Section>

      <Section
        id="projects-grid"
        justifyContent="space-between"
      >
        <div className="case-studies-grid">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              id={caseStudy.id}
              image={caseStudy.coverImage}
              translationKey={caseStudy.translationKey}
              tags={caseStudy.tags}
              to={`/${lang}/projects/${caseStudy.slug}`}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default ProjectsPage;