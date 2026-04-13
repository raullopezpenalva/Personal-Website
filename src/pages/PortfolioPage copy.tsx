import React from "react";
import Section from "../components/ui-patterns/Section";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import BulletList from "../components/ui-patterns/BulletList";
import Bullet from "../components/ui-patterns/Bullet";
import SubSection from "../components/ui-patterns/SubSection";



const PortfolioPage: React.FC = () => {
  return (
    <>
      <Section
        id="projects-title"
      >
        <Stack direction="column" gap="none" justifyContent="center" align="stretch" margin="sm">
          <Text variant="title" align="center">Arquitectura aplicada</Text>
          <Text variant="subtitle" align="center">Sistemas diseñados, automatizados y operados en entornos reales</Text>
          <Text variant="body" align="center">En esta sección presento proyectos donde aplico pensaiento sistémico en entornos reales: diseño de infraestructura, automatización y servicios en evolución. Cada proyeto está planteado como un sistema completo, no como una prieba aislada.</Text>
        </Stack>
      </Section>
      <Section
        id="Homelab"
        title="Infraestructura Autónoma On-Premise"
        subtitles="Plataforma provada diseñada para operar servicios digitales con control total sobre red, energía y despliegue"
      >
        <Stack direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
          <Text variant="subtitle">Propósito y visión del sistema</Text>
          <Text variant="body">Esta infraestructura nace como una plataforma provada diseñada para operar servicios digitales con autonomía y control total sobre red, cómputo y energía.</Text>
          <Text variant="body">Más que un laboratorio técnico, es un entorno arquitectónico donde diseño, despliego y opero sistemas bajo condiciones reales: segmentación de red, automatización, moniorización y exposición controlada.</Text>
          <Text variant="body">El objetivo no es replicar en un entorno cloud, sino comprender y construir la arquitectura completa desde sus capas físicas hasta sus servicios digitales.</Text>
          <Text variant="body">La autonomía tecnológica, en este contexto, significa reducir dependencias innecesarias, entender cada capa del sistema y prepararlo para evolucionar de forma estructurada.</Text>
          <Text variant="body">Es un sistema en evolución, pensado para crecer hacia una infraestructura completamente declarativa y reproducible.</Text>

          <Text variant="subtitle">Arquitectura física</Text>
          <Text variant="body">La base de esta infraestructura es una arquitectura física diseñada con los mismos principios que aplicaría a un entorno productivo: segmentación, redundancia lógica y control centralizado.</Text>
          <Text variant="body">El núcleo de la red está gestionado por un gateway empresarial (UDM SE) que actúa como punto de entrada, firewall y router principal. Desde ahí, la distribución se organiza mediante switches gestionables y puntos de acceso que permiten segmentar el tráfico en múltiples VLAN con aislamiento definido por propósito.</Text>
          <Text variant="body">El entorno se aloja en un rack dedicado donde se integra el servidor principal, el backbone de red y los dispositivos críticos. Esta disposición no responde únicamente a orden físico, sino a claridad operativa y mantenimiento estructurado.</Text>
          <Stack direction="row" gap="xs" justifyContent="space-between" align="stretch">
            <SubSection 
              id="Capa-de-red"
              title="Capa de red"
            >
              <BulletList>
                <Bullet>Gateway empresarial (routing, firewall, VLAN)</Bullet>
                <Bullet>Switches gestionables</Bullet>
                <Bullet>Backbone 10Gb</Bullet>
                <Bullet>Puntos de acceso WiFi segmentados</Bullet>
              </BulletList>
            </SubSection>
            <SubSection 
              id="Capa-de-cómputo"
              title="Capa de cómputo"
            >
              <BulletList>
                <Bullet>Servidor principal de servicios</Bullet>
                <Bullet>Virtualización ligera basada en contenedores</Bullet>
                <Bullet>Almacenado local estructurado</Bullet>
              </BulletList>
            </SubSection>
            <SubSection 
              id="Infra-extendida"
              title="Infraestructura extendida"
            >
              <BulletList>
                <Bullet>VLAN específica para IoT</Bullet>
                <Bullet>VLAN aislada para sistemas energéticos (Powerwall y Solax)</Bullet>
                <Bullet>Separación estricta entre servicios críticos y dispositivos auxiliares</Bullet>
              </BulletList>
            </SubSection>
          </Stack>
          <Text variant="body">Esta separación física y lógica permite que cada capa del sistema tenga un propósito claro y límites definidos, reduciendo complejidad y facilitando la evolución futura hacia modelos declarativos de infraestructura.</Text>
        </Stack>
      </Section>
      
    </>
    
  );
};

export default PortfolioPage;
