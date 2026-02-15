import Section from "../components/ui-patterns/Section";
import Text from "../components/ui-primitives/Text";

const BlogPage: React.FC = () => {
    return (
        <Section
            id="blog-coming-soon"
        >
            <Text variant="title" align="center">
                Blog coming soon!
            </Text>
        </Section>
    );
};

export default BlogPage;