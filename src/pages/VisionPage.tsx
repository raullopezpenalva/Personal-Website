import React from 'react';
import SubSection from '../components/ui-patterns/SubSection';
import Grid from '../components/ui-primitives/Grid';
import Text from '../components/ui-primitives/Text';

const ServicesPage: React.FC = () => {
    return (
        <>
            <SubSection
                id="test"
                title="TESTS"
                subtitles="This is a test subsection"
            >
                <Grid cols={2} gap="lg">
                    <p>
                        This is a test subsection content.
                    </p>
                    <Text>
                        It uses the Grid component to layout its children.
                    </Text>
                </Grid>
            </SubSection>
        
        </>
    );
};

export default ServicesPage;