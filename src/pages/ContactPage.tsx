import ContactForm from "../components/domain/ContactForm";
import Button from "../components/ui-primitives/Button";
import GitHubIconLetter from "../components/ui-primitives/icons/GitHubIconLetter";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import { useTranslation } from 'react-i18next';

const ContactPage: React.FC = () => {
    const { t } = useTranslation('contact');
    return (
        <>
            <div className="contact-layout">
                <div className="contact-inner">

                    <div className="contact-inner-left">

                        <Text variant="title">{t('contact.title')}</Text>

                        <Text variant="body">{t('contact.description')}</Text>

                        <Stack direction="column" gap="md" justifyContent="flex-start" align="start" margin="lg">
                            <Button variant="alternative" to="https://www.linkedin.com/in/raullopezpenalva/">LinkedIn</Button>
                            <Button variant="secondary" to="https://github.com/raullopezpenalva">
                                <GitHubIconLetter />
                            </Button>
                        </Stack>

                    </div>
                    <div className="contact-inner-right">
                        <div className="contact-form-header">
                            <Text variant="caption">{t('contact.formHeader')}</Text>
                        </div>
                        <div className="contact-form-container">
                            {<ContactForm />}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ContactPage;