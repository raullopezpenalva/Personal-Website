import Section from "../components/ui-patterns/Section";
import { Button } from "../components/ui-primitives/Button";
import ServiceCard from "../components/domain/ServiceCard";
import { services } from "../data/services";
import Stack from "../components/ui-primitives/Stack";
import GitHubIconLetter from "../components/ui-primitives/icons/GitHubIconLetter";
import Bullet from "../components/ui-patterns/Bullet";
import Text from "../components/ui-primitives/Text";
import { PipelineYaml } from "../components/domain/PipelineYaml";
import BulletList from "../components/ui-patterns/BulletList";

const HomePage: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <Section id="hero" className="hero-section" justifyContent="center">
        <div className="hero-inner">
          <p className="hero-kicker">Escalabilidad · DevOps · Infraestructura</p>
          <h1 className="hero-title">
            Raúl López Penalva
          </h1>
          <p className="hero-text">
            Ingeniería técnica desde el big picture
          </p>
          <div className="hero-actions">
            <Button to="/about" variant="primary">
              Visión técnica
            </Button>
            <Button to="/contact" variant="secondary">
              Contacto
            </Button>
          </div>
        </div>
      </Section>
      
      {/* HOW I THINK */}
      <Section
        id="how-i-think"
        title="Cómo pienso la ingeniería de sistemas"
        subtitles="Mi enfoque no empieza por herramientas, sino por entender el conjunto."
        justifyContent="space-between"
      >
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
      
      {/* This web is developed by me */}
      <Section
        id="about-this-web"
        title="Esta web también es un proyecto"
        subtitles="Diseñada, desarrollada y mantenida como un proyecto de ingeniería: estructura clara, control de versiones y despliegue continuo."
        justifyContent="center"
        flexDirection="column"
      >
        <Stack className="personalweb-60-40" direction="row" gap="none" margin="lg">
          <Stack align="center" gap="md" className="personalweb-left">
            <Text>
              Esta web está construida desde cero como un proyecto de ingeniería, no como una plantilla. Me sirve para practicar diseño de sistemas a pequeña escala: arquitectura de componentes, control de cambios, automatización y despliegue real.
            </Text>
            <BulletList className="personalweb-bullet-list">
              <Bullet> Arquitectura por componentes y design system coherente (tipografía, spacing, color tokens)</Bullet>
              <Bullet> Control de versiones y flujo de trabajo profesional (Git, ramas, cambios trazables)</Bullet>
              <Bullet> Build y despliegue automatizados como parte del ciclo de vida del proyecto</Bullet>
            </BulletList>
            <div className="personalweb-buttons">
              <Button to="/projects" variant="primary">
                Ver mis proyectos
              </Button>
              <Button to="https://github.com/raullopezpenalva/Personal-Website" variant="secondary">
                <GitHubIconLetter className="personalweb-github-icon" />
              </Button>
            </div>
          </Stack>
          <Stack align="stretch" gap="md" direction="row" justifyContent="center" className="personalweb-right">
            <PipelineYaml />
          </Stack>
        </Stack>
      </Section>

      {/* CALL TO ACTION */}
      <Section id="contact" className="call-to-action-section" justifyContent="center">
        <div className="call-to-action">
          <h2>¿Hablamos de sistemas, no solo de código?</h2>
          <p>Si tu proyecto necesita estructura, estabilidad y una visión end-to-end, podemos analizarlo juntos</p>
          <Button to="/contact" variant="primary">
            Hablemos
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;