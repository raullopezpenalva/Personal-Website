import type React from "react";
import Section from "../components/ui-patterns/Section";
import SubSection from "../components/ui-patterns/SubSection";
import Text from "../components/ui-primitives/Text";
import BulletList from "../components/ui-patterns/BulletList";
import Bullet from "../components/ui-patterns/Bullet";
import Stack from "../components/ui-primitives/Stack";
import headshot from "../assets/images/about/HeadShot-HQ.webp";
import { useTranslation } from "react-i18next";

const AboutPage: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <>
      {/* WHO I AM */}
      <Section id="about-who-am-i">
        <Stack className="stack-60-40" direction="row" gap="none" margin="lg">
          <Stack
            align="center"
            gap="md"
            justifyContent="center"
            className="stack-60-40-left"
          >
            <img
              src={headshot}
              alt="Raúl López Penalva"
              className="whoami-headshot"
            />
          </Stack>

          <Stack
            align="center"
            gap="none"
            direction="column"
            justifyContent="center"
            className="stack-60-40-right"
          >
            <Text variant="title" className="whoami-title">
              {t("whoAmI.title")}
            </Text>

            <Text variant="subtitle" className="whoami-subtitle">
              {t("whoAmI.subtitle")}
            </Text>

            <Text variant="parragraph" className="whoami-text">
              {t("whoAmI.text1")}
            </Text>

            <Text variant="parragraph" className="whoami-text">
              {t("whoAmI.text2")}
            </Text>
          </Stack>
        </Stack>
      </Section>

      {/* WHERE I COME FROM */}
      <Section id="about-origin" title={t("origin.title")}>
        <Stack gap="md">
          <Text variant="parragraph">{t("origin.text1")}</Text>
          <Text variant="parragraph">{t("origin.text2")}</Text>
          <Text variant="parragraph">{t("origin.text3")}</Text>
        </Stack>
      </Section>

      {/* TECHNICAL BACKGROUND */}
      <Section id="about-technical-background" title={t("technicalBackground.title")}>
        <Stack gap="md">
          <Text variant="parragraph">{t("technicalBackground.intro")}</Text>

          <Stack
            direction="row"
            justifyContent="space-between"
            gap="md"
            className="about-my-journey-grid"
          >
            <SubSection
              id="about-technical-background-training"
              title={t("technicalBackground.trainingTitle")}
            >
              <BulletList className="about-my-journey-studies-content">
                <Bullet>{t("technicalBackground.trainingBullet1")}</Bullet>
                <Bullet>{t("technicalBackground.trainingBullet2")}</Bullet>
                <Bullet>{t("technicalBackground.trainingBullet3")}</Bullet>
                <Bullet>{t("technicalBackground.trainingBullet4")}</Bullet>
              </BulletList>
            </SubSection>

            <SubSection
              id="about-technical-background-experience"
              title={t("technicalBackground.experienceTitle")}
            >
              <BulletList className="about-my-journey-experience-content">
                <Bullet>{t("technicalBackground.experienceBullet1")}</Bullet>
                <Bullet>{t("technicalBackground.experienceBullet2")}</Bullet>
                <Bullet>{t("technicalBackground.experienceBullet3")}</Bullet>
                <Bullet>{t("technicalBackground.experienceBullet4")}</Bullet>
              </BulletList>
            </SubSection>
          </Stack>
        </Stack>
      </Section>

      {/* BIG PICTURE */}
      <Section id="about-big-picture" title={t("bigPicture.title")}>
        <Stack gap="md">
          <Text variant="parragraph">{t("bigPicture.text1")}</Text>
          <Text variant="parragraph">{t("bigPicture.text2")}</Text>
          <Text variant="parragraph">{t("bigPicture.text3")}</Text>

          <BulletList className="about-big-picture-bullet-list">
            <Bullet>{t("bigPicture.bullet1")}</Bullet>
            <Bullet>{t("bigPicture.bullet2")}</Bullet>
            <Bullet>{t("bigPicture.bullet3")}</Bullet>
            <Bullet>{t("bigPicture.bullet4")}</Bullet>
          </BulletList>

          <Text variant="parragraph">{t("bigPicture.bottomText")}</Text>
        </Stack>
      </Section>

      {/* FROM AV FIELD WORK TO SYSTEMS */}
      <Section id="about-av-to-systems" title={t("avToSystems.title")}>
        <Stack gap="md">
          <Text variant="parragraph">{t("avToSystems.text1")}</Text>
          <Text variant="parragraph">{t("avToSystems.text2")}</Text>
          <Text variant="parragraph">{t("avToSystems.text3")}</Text>
          <Text variant="parragraph">{t("avToSystems.text4")}</Text>
        </Stack>
      </Section>

      {/* LEARNED IN REAL SYSTEMS */}
      <Section
        id="about-learned-in-real-systems"
        title={t("learnedInRealSystems.title")}
      >
        <Stack gap="md">
          <Text variant="parragraph">{t("learnedInRealSystems.intro")}</Text>

          <BulletList className="about-learned-in-my-career-content">
            <Bullet>{t("learnedInRealSystems.bullet1")}</Bullet>
            <Bullet>{t("learnedInRealSystems.bullet2")}</Bullet>
            <Bullet>{t("learnedInRealSystems.bullet3")}</Bullet>
            <Bullet>{t("learnedInRealSystems.bullet4")}</Bullet>
            <Bullet>{t("learnedInRealSystems.bullet5")}</Bullet>
            <Bullet>{t("learnedInRealSystems.bullet6")}</Bullet>
            <Bullet>{t("learnedInRealSystems.bullet7")}</Bullet>
            <Bullet>{t("learnedInRealSystems.bullet8")}</Bullet>
          </BulletList>
        </Stack>
      </Section>

      {/* CURRENT FOCUS */}
      <Section id="about-current-focus" title={t("currentFocus.title")}>
        <Stack gap="md">
          <Text variant="parragraph">{t("currentFocus.text1")}</Text>

          <BulletList className="about-current-focus-bullet-list">
            <Bullet>{t("currentFocus.bullet1")}</Bullet>
            <Bullet>{t("currentFocus.bullet2")}</Bullet>
            <Bullet>{t("currentFocus.bullet3")}</Bullet>
            <Bullet>{t("currentFocus.bullet4")}</Bullet>
          </BulletList>

          <Text variant="parragraph">{t("currentFocus.bottomText")}</Text>
        </Stack>
      </Section>

      {/* HOW I WORK */}
      <Section id="about-how-i-work" title={t("howIWork.title")}>
        <Stack gap="md">
          <Text variant="parragraph">{t("howIWork.text1")}</Text>
          <Text variant="parragraph">{t("howIWork.text2")}</Text>
          <Text variant="parragraph">{t("howIWork.text3")}</Text>
        </Stack>
      </Section>
    </>
  );
};

export default AboutPage;