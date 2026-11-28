import { useLocation } from "react-router-dom";
import Section from "../components/ui-patterns/Section";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import { Button } from "../components/ui-primitives/Button";
import { getNotFoundContent } from "../seo/metadata";

export default function NotFoundPage() {
  const { pathname } = useLocation();
  const content = getNotFoundContent(pathname);
  return (
    <Section id="not-found" justifyContent="center">
      <Stack direction="column" gap="md" margin="lg" align="center">
        <Text as="h1" variant="title" align="center">{content.title}</Text>
        <Text align="center">{content.description}</Text>
        <Button to={`/${content.language}`} variant="primary">{content.home}</Button>
        <Button to={`/${content.language}/projects`} variant="secondary">{content.projects}</Button>
      </Stack>
    </Section>
  );
}
