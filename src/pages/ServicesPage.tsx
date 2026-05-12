import type React from "react";
import Section from "../components/ui-patterns/Section";
import Text from "../components/ui-primitives/Text";
import Stack from "../components/ui-primitives/Stack";
import { useTranslation } from "react-i18next";
import ServicePreviewCard from "../components/domain/ServicePreviewCard";
import { homeServicesPreview } from "../data/home-services-preview";
import BulletList from "../components/ui-patterns/BulletList";
import Bullet from "../components/ui-patterns/Bullet";
import { Button } from "../components/ui-primitives/Button";
import { useParams } from "react-router-dom";
import soundEngineeringImage from "../assets/images/services/sound-engineer.webp";
import soundSystemEngineeringImage from "../assets/images/services/sound-system-engineering.webp";
import avNetworkingImage from "../assets/images/services/av-networking.webp";
import technicalPlanningImage from "../assets/images/services/technical-planning.webp";

const ServicesPage: React.FC = () => {
  const { t } = useTranslation("services");
  const { lang } = useParams<{ lang: string }>();
  const { t: tCommon } = useTranslation('common');

  return (
    <>
        {/* Services Hero */}
        <Section
            id="services-hero"
        >
            <Stack direction="column" gap="none" justifyContent="center" align="stretch" margin="sm">
            <Text variant="title" align="center">{t('services-title.title')}</Text>
            <Text variant="subtitle" align="center">{t('services-title.subtitle')}</Text>
            <Text variant="body" align="center">{t('services-title.body')}</Text>
            </Stack>
        </Section>

        {/* SERVICE PREVIEW */}
        <Section
            // id="service-preview"
            // title={t('services.title')}
            // subtitles={t('services.subtitle')}
            justifyContent="space-between"
        >
            <div className="services-preview-grid">
            {homeServicesPreview.map((service) => (
                <ServicePreviewCard
                key={service.id}
                image={service.image}
                translationKey={service.translationKey}
                to={`/${lang}${service.href}`}
                />
            ))}
            </div>
        </Section>

        {/* Sound Engineer Service */}
        <Section
            id="service-sound-engineering"
            title={t('soundEngineering.title')}
            subtitles={t('soundEngineering.subtitle')}
            justifyContent="center"
            flexDirection="column"
        >
            <Stack className="stack-60-40" direction="row" gap="md" margin="lg">
                <Stack align="center" justifyContent="space-around" gap="md" className="stack-60-40-left">
                    <Text variant="body">{t('soundEngineering.body1')}</Text>
                    <Text variant="body">{t('soundEngineering.body2')}</Text>
                    <Text variant="body">{t('soundEngineering.body3')}</Text>
                    <BulletList className="services-sound-engineer-bulletList">
                        <Bullet>{t('soundEngineering.bullet1')}</Bullet>
                        <Bullet>{t('soundEngineering.bullet2')}</Bullet>
                        <Bullet>{t('soundEngineering.bullet3')}</Bullet>
                    </BulletList>
                    <Text variant="body">{t('soundEngineering.value')}</Text>
                </Stack>
                <Stack align="center" justifyContent="center" gap="md" className="stack-60-40-right">
                    <div className="image-placeholder-40-60">
                      <img src={soundEngineeringImage} alt={t('soundEngineering.title')} className="image-40-60" />
                    </div>
                </Stack>
            </Stack>
        </Section>

        {/* Sound System Engineer Service */}
        <Section
            id="service-sound-system-engineering"
            title={t('soundSystemEngineering.title')}
            subtitles={t('soundSystemEngineering.subtitle')}
            justifyContent="center"
            flexDirection="column"
        >
            <Stack className="stack-40-60" direction="row" gap="md" margin="lg">
                <Stack align="center" justifyContent="center" gap="md" className="stack-40-60-left">
                    <div className="image-placeholder-40-60">
                      <img src={soundSystemEngineeringImage} alt={t('soundSystemEngineering.title')} className="image-40-60" />
                    </div>
                </Stack>
                <Stack align="center" justifyContent="space-between" gap="md" className="stack-40-60-right">
                    <Text variant="body">{t('soundSystemEngineering.body1')}</Text>
                    <Text variant="body">{t('soundSystemEngineering.body2')}</Text>
                    <Text variant="body">{t('soundSystemEngineering.body3')}</Text>
                    <BulletList className="services-sound-system-engineer-bulletList">
                        <Bullet>{t('soundSystemEngineering.bullet1')}</Bullet>
                        <Bullet>{t('soundSystemEngineering.bullet2')}</Bullet>
                        <Bullet>{t('soundSystemEngineering.bullet3')}</Bullet>
                    </BulletList>
                    <Text variant="body">{t('soundSystemEngineering.value')}</Text>
                </Stack>
            </Stack>
        </Section>

        {/* AV Networking Service */}
        <Section
            id="service-av-networking"
            title={t('avNetworking.title')}
            subtitles={t('avNetworking.subtitle')}
            justifyContent="center"
            flexDirection="column"
        >
            <Stack className="stack-60-40" direction="row" gap="md" margin="lg">
                <Stack align="center" justifyContent="space-between" gap="md" className="stack-60-40-left">
                    <Text variant="body">{t('avNetworking.body1')}</Text>
                    <Text variant="body">{t('avNetworking.body2')}</Text>
                    <Text variant="body">{t('avNetworking.body3')}</Text>
                    <BulletList className="services-av-networking-bulletList">
                        <Bullet>{t('avNetworking.bullet1')}</Bullet>
                        <Bullet>{t('avNetworking.bullet2')}</Bullet>
                        <Bullet>{t('avNetworking.bullet3')}</Bullet>
                    </BulletList>
                    <Text variant="body">{t('avNetworking.value')}</Text>
                </Stack>
                <Stack align="center" justifyContent="center" gap="md" className="stack-60-40-right">
                    <div className="image-placeholder-40-60">
                      <img src={avNetworkingImage} alt={t('avNetworking.title')} className="image-40-60" />
                    </div>
                </Stack>
            </Stack>
        </Section>

        {/* Technical Production Service */}
        <Section
            id="service-technical-production"
            title={t('technicalProduction.title')}
            subtitles={t('technicalProduction.subtitle')}
            justifyContent="center"
            flexDirection="column"
        >
            <Stack className="stack-40-60" direction="row" gap="md" margin="lg">
                <Stack align="center" justifyContent="center" gap="md" className="stack-40-60-left">
                    <div className="image-placeholder-40-60">
                      <img src={technicalPlanningImage} alt={t('technicalPlanning.title')} className="image-40-60" />
                    </div>
                </Stack>
                <Stack align="center" justifyContent="space-between" gap="md" className="stack-40-60-right">
                    <Text variant="body">{t('technicalProduction.body1')}</Text>
                    <Text variant="body">{t('technicalProduction.body2')}</Text>
                    <Text variant="body">{t('technicalProduction.body3')}</Text>
                    <BulletList className="services-technical-production-bulletList">
                        <Bullet>{t('technicalProduction.bullet1')}</Bullet>
                        <Bullet>{t('technicalProduction.bullet2')}</Bullet>
                        <Bullet>{t('technicalProduction.bullet3')}</Bullet>
                    </BulletList>
                    <Text variant="body">{t('technicalProduction.value')}</Text>
                </Stack>
            </Stack>
        </Section>

        {/* CALL TO ACTION */}
      <Section id="contact" className="call-to-action-section" justifyContent="center">
        <div className="call-to-action">
          <p className="call-to-action__kicker">{t("CTA.kicker")}</p>
          <h2>{t('CTA.h2')}</h2>
          <p>{t('CTA.p')}</p>
          <Button to={`/${lang}/contact`} variant="primary">
            {tCommon('btn.contact')}
          </Button>
        </div>
      </Section>


    </>
  );
};

export default ServicesPage;