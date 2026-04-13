import React from 'react';
import Text from '../components/ui-primitives/Text';
import Section from '../components/ui-patterns/Section';
import Stack from '../components/ui-primitives/Stack';
import Bullet from '../components/ui-patterns/Bullet';
import BulletList from '../components/ui-patterns/BulletList';
import { VisionBlock3MD } from '../components/domain/VisionBlock3MD';
import { useTranslation } from 'react-i18next';

const ServicesPage: React.FC = () => {
    const { t } = useTranslation('vision');

    return (
        <>
            <Section
                id="block1"
            >
                <Stack direction="column" gap="none" justifyContent="center" align="stretch" margin="sm">
                    <Text variant="title" align="center">{t('vision.block1.title')}</Text>
                    <Text variant="subtitle" align="center">{t('vision.block1.subtitle')}</Text>
                </Stack>
            </Section>
            <Section
                id="block2"
                title={t('vision.block2.title')}
            >
                <Stack direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                    <Text variant="body">{t('vision.block2.toptext1')}</Text>
                    <Text variant="body">{t('vision.block2.toptext2')}</Text>
                    <BulletList>
                        <Bullet>{t('vision.block2.bullet1')}</Bullet>
                        <Bullet>{t('vision.block2.bullet2')}</Bullet>
                        <Bullet>{t('vision.block2.bullet3')}</Bullet>
                        <Bullet>{t('vision.block2.bullet4')}</Bullet>
                        <Bullet>{t('vision.block2.bullet5')}</Bullet>
                    </BulletList>
                    <Text variant="body">{t('vision.block2.bottomtext')}</Text>
                </Stack>
            </Section>
            <Section
                id="block3"
                title={t('vision.block3.title')}
            >
                <Stack className="stack-60-40" direction="row" gap="none" margin="lg">
                    <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                        <Text variant="body">{t('vision.block3.toptext1')}</Text>
                        <Text variant="body">{t('vision.block3.toptext2')}</Text>
                        <BulletList>
                            <Bullet>{t('vision.block3.bullet1')}</Bullet>
                            <Bullet>{t('vision.block3.bullet2')}</Bullet>
                            <Bullet>{t('vision.block3.bullet3')}</Bullet>
                            <Bullet>{t('vision.block3.bullet4')}</Bullet>
                            <Bullet>{t('vision.block3.bullet5')}</Bullet>
                        </BulletList>
                        <Text variant="body">{t('vision.block3.bottomtext')}</Text>
                    </Stack>
                    <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                        <VisionBlock3MD />
                    </Stack>
                </Stack> 
            </Section>
            <Section
                id="block4"
                title={t('vision.block4.title')}
            >
                <Stack direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                    <Text variant="body">{t('vision.block4.toptext1')}</Text>
                    <Text variant="body">{t('vision.block4.toptext2')}</Text>
                    <BulletList>
                        <Bullet>{t('vision.block4.bullet1')}</Bullet>
                        <Bullet>{t('vision.block4.bullet2')}</Bullet>
                        <Bullet>{t('vision.block4.bullet3')}</Bullet>
                        <Bullet>{t('vision.block4.bullet4')}</Bullet>
                        <Bullet>{t('vision.block4.bullet5')}</Bullet>
                    </BulletList>
                    <Text variant="body">{t('vision.block4.bottomtext')}</Text>
                </Stack>
            </Section>
            <Section
                id="block5"
                title={t('vision.block5.title')}
            >
                <Stack direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                    <Text variant="body">{t('vision.block5.text1')}</Text>
                    <Text variant="body">{t('vision.block5.text2')}</Text>
                    <Text variant="body">{t('vision.block5.text3')}</Text>
                    <Text variant="body">{t('vision.block5.text4')}</Text>
                </Stack>
            </Section>
                
             

        
        </>
    );
};

export default ServicesPage;