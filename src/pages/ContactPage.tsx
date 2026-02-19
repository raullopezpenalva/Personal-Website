import Section from "../components/ui-patterns/Section";
import Button from "../components/ui-primitives/Button";
import GitHubIconLetter from "../components/ui-primitives/icons/GitHubIconLetter";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";

const ContactPage: React.FC = () => {
    return (
        <Section
            id="contact"
            title="Contacto"
            subtitles="Construyamos algo sólido"
        >
            <Stack direction="column" gap="lg" justifyContent="flex-start" align="stretch" margin="lg">
                <Text variant="body">Estoy construyendo mi transición hacia DevOps y arquitectura de sistemas. Si crees que puedo aportar en tu equipo o proyecto, estaré encantado de hablar.</Text>
                <Stack direction="row" gap="md" justifyContent="center" align="center" margin="lg">
                    <Button variant="primary" to="mailto:raullopezpenalva@icloud.com">Enviar correo</Button>
                    <Button variant="alternative" to="https://www.linkedin.com/in/raullopezpenalva/">LinkedIn</Button>
                    <Button variant="secondary" to="https://github.com/raullopezpenalva">
                        <GitHubIconLetter />
                    </Button>
                </Stack>
            </Stack>
        </Section>
    );
};

export default ContactPage;