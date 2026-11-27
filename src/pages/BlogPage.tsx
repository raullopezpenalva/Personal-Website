import { useTranslation } from "react-i18next";
import Section from "../components/ui-patterns/Section";
import Text from "../components/ui-primitives/Text";

const BlogPage: React.FC = () => {
    const { t } = useTranslation("blog");
    return (
        <Section
            id="blog-coming-soon"
        >
            <Text as="h1" variant="title" align="center">
                {t("title")}
            </Text>
        </Section>
    );
};

export default BlogPage;