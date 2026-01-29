import Section from "../components/ui-patterns/Section";
import { Button } from "../components/ui-primitives/Button";
import ServiceCard from "../components/domain/ServiceCard";
import { services } from "../data/services";


const HomePage: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <Section id="hero">
        <div className="hero-inner">
          <p className="hero-kicker">Escalablidad · DevOps · Infraestructura</p>
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
      
      {/* SERVICES */}
      <Section
        id="services"
        title="Servicios"
        subtitles="Descubre cómo puedo ayudarte a llevar tu proyecto al siguiente nivel."
      >
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
      
      {/* This web is developed by me */}
      <Section
        id="about-this-web"
        title="Sobre esta web"
        subtitles="Desarrollada por mí mismo utilizando React y Vite."
      >
        <p>
          Esta página web ha sido creada por mí, Raúl López Penalva, utilizando las tecnologías React y Vite para asegurar un rendimiento óptimo y una experiencia de usuario fluida.
        </p>
        <Button to="/projects" variant="primary">
          Ver mis proyectos
        </Button>
      </Section>

      {/* CALL TO ACTION */}
      <Section>
        <div className="call-to-action">
          <h2>¿Listo para llevar tu proyecto al siguiente nivel?</h2>
          <p>Contáctame hoy mismo y hablemos sobre cómo puedo ayudarte.</p>
          <Button to="/contact" variant="primary">
            Contáctame
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;