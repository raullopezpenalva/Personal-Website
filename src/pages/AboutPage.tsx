import type React from "react";
import Section from "../components/ui-patterns/Section";
import Grid from "../components/ui-primitives/Grid";
import SubSection from "../components/ui-patterns/SubSection";
import Text from "../components/ui-primitives/Text";
import BulletList from "../components/ui-patterns/BulletList";
import Bullet from "../components/ui-patterns/Bullet";

const AboutPage: React.FC = () => {
    return (
        <>
            <Section 
                id="about-who-am-i"
                title="Quién soy"
                subtitles="Un perfil técnico con visión de conjunto"
            >
                <Text className="about-who-am-i-content">
                    Soy un perfil técnico con una fuerte base en ingeniería electrónica e informática, impulsado desde joven por la música, cine y la curiosidad por cómo funcionan los sistemas complejos.
                </Text>
            </Section>
        
            <Section 
                id="about-my-journey"
                title="De donde vengo"
                >
                <Text className="about-my-journey-content">
                    <Text>Desde la adolescencia he estado rodeado de ordenadores y tecnología.</Text>
                    <Text>La música fue el primer catalizador: giradiscos, mesas de mezclas y equipos eletrónicos despertaron en mí el interés por entender cómo funcionan los dispositivos y los sistemas que hay detrás.</Text>
                    <Text>Ese impulso técnico me llevó a interesarme por los sistemas de sonido profesionales y los grandes eventos, especialmente por como estructuras complejas como los line arrays y las cadenas de audio a gran escala.</Text>
                    <Text>Mi formación pasó por electricidad, telecomunicaciones e informática, lo que me dio una base sólida para más adelante especializarme como técnico de sonido para audiovisuales y espectáculos en IRTVE (Madrid).</Text>
                    <Text>Con el tiempo, esa curiosidad inicial se convirtió en formación técnica y experiencia profesional.</Text>
                    <Text>No como una acumulación de títulos o trabajos aislados, sino como una forma de entender cómo se construyen, operan ysostienen sistemas reales exigentes.</Text>
                </Text>

                <Grid columns={3} className="about-my-journey-grid">
                    <SubSection
                        id="about-my-journey-studies"
                        title="Formación técnica y académica"
                    >
                        <BulletList className="about-my-journey-studies-content">
                            <Bullet>Ciclo Formativo de Grado Medio en Instalaciones Eléctricas y Automáticas</Bullet>
                            <Bullet>Ciclo Formativo de Grado Superior en Sistemas de Telecomunicaciones e Informáticos</Bullet>
                            <Bullet>Ciclo Formativo de Grado Superior en Sonido para Audiovisuales y Espectáculos (IRTVE)</Bullet>
                            <Bullet>DevOps BootCamp by Lemoncode (actualmente cursando)</Bullet>
                        </BulletList>
                    </SubSection>
                    <SubSection
                        id="about-my-journey-experience"
                        title="Experiencia profesional"
                    >
                            <BulletList className="about-my-journey-experience-content">
                                <Bullet>Trabajo en entornos técnicos complejs: eventos, rodajes audiovisuales, instalaciones</Bullet>
                                <Bullet>Experiencia con sistemas de sonido, iluminación y vídeo a gran escala</Bullet>
                                <Bullet>Colaboración con equipos multidisciplinares en entornos de alta presión</Bullet>
                                <Bullet>Gestión y mantenimiento de infraestructuras técnicas</Bullet>
                            </BulletList>
                    </SubSection>
                </Grid>
                <Text className="about-my-journey-conclusion">
                    A medida que avanzaba profesionalmente, entendí que lo que más me interesaba no era ejecutar una parte concreta del sistema, sino comprenderlo en su totalidad. Ver cómo cada decision técnica, humana u organizativa impacta en el resultado final fue lo que empezó a definir mi forma de pensar.
                </Text>
            </Section>

            <Section 
                id="about-big-picture"
                title="El big picture como hilo conductor"
            >
                <Text className="about-big-picture-inner">
                    <Text>Desde el inicio, y especialmente durante mi experiencia profesional, siempre he tenido una obsesión clara: entender el sistema completo.</Text>
                    <Text>Desde el micrófono del cantante hasta el oído del espectador.</Text>
                    <Text>Desde la captura de una señal hasta su entrega final.</Text>
                    <Text>No solo elementos técnicos, sino también:</Text>
                    <BulletList className="about-big-picture-bullet-list">
                        <Bullet>las personas implicadas</Bullet>
                        <Bullet>los flujos de trabajo</Bullet>
                        <Bullet>la infraestructura </Bullet>
                        <Bullet>los puntos críticos del sistema</Bullet>
                    </BulletList>

                    <Text>Comprender esa cadena completa me permitía diseñar, anticipar problemas y optimizar procesos, no solo ejecutar una tarea aislada.</Text>
                </Text>
            </Section>

            <Section
                id="about-professional-growth"
                title="La experiencia profesional"
            >
                <Text align="left" className="about-professional-growth-content">
                    <Text>He trabajado en eventos, rodajes audiovisuales e instalaciones técnicas, muchas veces ocupando una parte del workflow total.</Text>
                    <Text>Pero incluso en esos contextos, siempre he necesitado entender todo el flujo.</Text>
                    <Text>Por ejemplo, en entornos como un informativo televisivo:</Text>
                    <BulletList className="about-professional-growth-bullet-list">
                        <Bullet>desde el redactor y el cámara que generan el contenido</Bullet>
                        <Bullet>pasando por los sistemas técnicos y humanos</Bullet>
                        <Bullet>hasta la emisión en directo al aire</Bullet>
                    </BulletList>
                    <Text>Ese enfoque sistémico he guiado siempre mi forma de trabajar.</Text>
                </Text>
            </Section>

            <Section
                id="about-learned-in-my-career"
                title="Lo que aprendí trabajando en sistemas reales"
            >
                <BulletList align="left" className="about-learned-in-my-career-content">
                    <Bullet>Los problemas casi nunca está donde fallan</Bullet>
                    <Bullet>Optimizar una parte suele empeorar otra</Bullet>
                    <Bullet>Los sistemas son dinámicos y cambian con el tiempo</Bullet>
                    <Bullet>La comunicación entre personas es clave</Bullet>
                    <Bullet>La documentación y estandarización evitan errores</Bullet>
                    <Bullet>La mayoría de errores son de diseño, no de ejecución</Bullet>
                    <Bullet>La presión revela si un sistema está bien pensado</Bullet>
                    <Bullet>Entender el flujo completo ahorra más tiempo que correr</Bullet>
                </BulletList>
            </Section>

            <Section
                id="about-indentity-loosing-role"
                title="El punto en el que algo dejó de encajar"
            >
                <Text className="about-indentity-loosing-role-content">
                    <Text>Durante años trabajé ejecutando partes concretas de sistemas complejos.</Text>
                    <Text>Aunque aprendí mucho, con el tiempo entendí que no quería seguir ocupando solo un rol operativo dentro de un sistema diseñado previamente.</Text>
                    <Text>Mi motivación siempre estuvo en comprender, estructurar y mejorar el conjunto, no en apagar fuegos ni improvisar soluciones parciales.</Text>
                    <Text>Ese fue el momento en el ue decidí reorientar mi camino hacia el diseño de sistemas, el código y la infraestructura.</Text>
                </Text>
            </Section>

            <Section
                id="about-transition-to-software"
                title="Hacia dónde voy"
            >
                <Text align="left">
                    <Text>Hoy enfoco mi desarrollo profesional en:</Text>
                    <BulletList
                        items={[
                            "sistemas e infraestructura",
                            "automatización",
                            "DevOps",
                            "escalabilidad",
                            "diseño de flujos end-to-end",
                            "operación y fiabilidad",
                        ]}
                    />
                    <Text>Sigo construyendo mi camino desde esa misma lógica: entender antes de ejecutar, diseñar antes de escalar y pensar los sistemas como un todo coherente.Ese enfoque es el que guía tanto mi aprendizaje como mi evolucion profesional.</Text>
                </Text>
            </Section>
        </>
    );
};

export default AboutPage;