import type React from "react";
import Section from "../components/ui-patterns/Section";
import SubSection from "../components/ui-patterns/SubSection";
import Text from "../components/ui-primitives/Text";
import BulletList from "../components/ui-patterns/BulletList";
import Bullet from "../components/ui-patterns/Bullet";
import Stack from "../components/ui-primitives/Stack";
import headshot from "../assets/HeadShot-HQ.jpeg";
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
    const { t } = useTranslation('about');
    return (
        <>
            <Section 
                id="about-who-am-i"
            >
                <Stack className="stack-60-40" direction="row" gap="none" margin="lg">
                    <Stack align="center" gap="md" justifyContent="center" className="stack-60-40-left">
                        <img src={headshot} alt="Raúl López Penalva" className="whoami-headshot" />
                    </Stack>
                    <Stack align="center" gap="none" direction="column" justifyContent="center" className="stack-60-40-right">
                        <Text variant="title" className="whoami-title">{t('who-am-I.title')}</Text>
                        <Text variant="subtitle" className="whoami-subtitle">{t('who-am-I.subtitle')}</Text>
                        <Text variant= "parragraph" className="whoami-text">{t('who-am-I.text')}</Text>
                    </Stack>
                </Stack>
            </Section>
        
            <Section 
                id="about-my-journey"
                title={t('about.myJourney.title')}
                >
                <Stack gap="md">
                    <Text variant= "parragraph">
                        <Text>{t('about.myJourney.toptext1')}</Text>
                        <Text>{t('about.myJourney.toptext2')}</Text>
                        <Text>{t('about.myJourney.toptext3')}</Text>
                        <Text>{t('about.myJourney.toptext4')}</Text>
                    </Text>

                    <Stack direction="row" justifyContent="space-between" gap="md" className="about-my-journey-grid">
                        <SubSection
                            id="about-my-journey-studies"
                            title={t('about.myJourney.studiesTitle')}
                        >
                            <BulletList className="about-my-journey-studies-content">
                                <Bullet>{t('about.myJourney.studiesBullet1')}</Bullet>
                                <Bullet>{t('about.myJourney.studiesBullet2')}</Bullet>
                                <Bullet>{t('about.myJourney.studiesBullet3')}</Bullet>
                                <Bullet>{t('about.myJourney.studiesBullet4')}</Bullet>
                            </BulletList>
                        </SubSection>
                        <SubSection
                            id="about-my-journey-experience"
                            title={t('about.myJourney.experienceTitle')}
                        >
                            <BulletList className="about-my-journey-experience-content">
                                <Bullet>{t('about.myJourney.experienceBullet1')}</Bullet>
                                <Bullet>{t('about.myJourney.experienceBullet2')}</Bullet>
                                <Bullet>{t('about.myJourney.experienceBullet3')}</Bullet>
                                <Bullet>{t('about.myJourney.experienceBullet4')}</Bullet>
                            </BulletList>
                        </SubSection>
                    </Stack>
                    <Text variant= "parragraph">{t('about.myJourney.bottomtext')}</Text>
                </Stack>
            </Section>

            <Section 
                id="about-big-picture"
                title={t('about.bigPicture.title')}
            >
                <Text variant= "parragraph">
                    <Text>{t('about.bigPicture.toptext1')}</Text>
                    <Text>{t('about.bigPicture.toptext2')}</Text>
                    <Text>{t('about.bigPicture.toptext3')}</Text>
                    <Text>{t('about.bigPicture.toptext4')}</Text>
                    <BulletList className="about-big-picture-bullet-list">
                        <Bullet>{t('about.bigPicture.bullet1')}</Bullet>
                        <Bullet>{t('about.bigPicture.bullet2')}</Bullet>
                        <Bullet>{t('about.bigPicture.bullet3')}</Bullet>
                        <Bullet>{t('about.bigPicture.bullet4')}</Bullet>
                    </BulletList>

                    <Text>{t('about.bigPicture.bottomtext')}</Text>
                </Text>
            </Section>

            <Section
                id="about-professional-growth"
                title={t('about.professionalGrowth.title')}
            >
                <Text variant= "parragraph">
                    <Text>{t('about.professionalGrowth.toptext1')}</Text>
                    <Text>{t('about.professionalGrowth.toptext2')}</Text>
                    <Text>{t('about.professionalGrowth.toptext3')}</Text>
                    <BulletList className="about-professional-growth-bullet-list">
                        <Bullet>{t('about.professionalGrowth.bullet1')}</Bullet>
                        <Bullet>{t('about.professionalGrowth.bullet2')}</Bullet>
                        <Bullet>{t('about.professionalGrowth.bullet3')}</Bullet>
                    </BulletList>
                    <Text>{t('about.professionalGrowth.bottomtext')}</Text>
                </Text>
            </Section>

            <Section
                id="about-learned-in-my-career"
                title={t('about.learnedInMyCareer.title')}
            >
                <BulletList
                    className="about-learned-in-my-career-content"
                >
                    <Bullet>{t('about.learnedInMyCareer.bullet1')}</Bullet>
                    <Bullet>{t('about.learnedInMyCareer.bullet2')}</Bullet>
                    <Bullet>{t('about.learnedInMyCareer.bullet3')}</Bullet>
                    <Bullet>{t('about.learnedInMyCareer.bullet4')}</Bullet>
                    <Bullet>{t('about.learnedInMyCareer.bullet5')}</Bullet>
                    <Bullet>{t('about.learnedInMyCareer.bullet6')}</Bullet>
                    <Bullet>{t('about.learnedInMyCareer.bullet7')}</Bullet>
                    <Bullet>{t('about.learnedInMyCareer.bullet8')}</Bullet>
                </BulletList>
            </Section>

            <Section
                id="about-identity-loosing-role"
                title={t('about.identityLoosingRole.title')}
            >
                <Text variant= "parragraph">
                    <Text>{t('about.identityLoosingRole.toptext1')}</Text>
                    <Text>{t('about.identityLoosingRole.toptext2')}</Text>
                    <Text>{t('about.identityLoosingRole.toptext3')}</Text>
                    <Text>{t('about.identityLoosingRole.toptext4')}</Text>
                </Text>
            </Section>

            <Section
                id="about-transition-to-software"
                title={t('about.transitionToSoftware.title')}
            >
                <Text variant= "parragraph">
                    <Text>{t('about.transitionToSoftware.toptext1')}</Text>
                    <BulletList className="about-transition-to-software-bullet-list">
                        <Bullet>{t('about.transitionToSoftware.bullet1')}</Bullet>
                        <Bullet>{t('about.transitionToSoftware.bullet2')}</Bullet>
                        <Bullet>{t('about.transitionToSoftware.bullet3')}</Bullet>
                        <Bullet>{t('about.transitionToSoftware.bullet4')}</Bullet>
                        <Bullet>{t('about.transitionToSoftware.bullet5')}</Bullet>
                        <Bullet>{t('about.transitionToSoftware.bullet6')}</Bullet>
                    </BulletList>
                    <Text>{t('about.transitionToSoftware.bottomtext')}</Text>
                </Text>
            </Section>
        </>
    );
};

export default AboutPage;