import React from "react";
import Section from "../components/ui-patterns/Section";
import Stack from "../components/ui-primitives/Stack";
import Text from "../components/ui-primitives/Text";
import BulletList from "../components/ui-patterns/BulletList";
import Bullet from "../components/ui-patterns/Bullet";
import { ProyectsHomelabCompactMD } from "../components/domain/ProyectsHomlabCompactMD";
import { Button } from "../components/ui-primitives/Button";
import GitHubIconLetter from "../components/ui-primitives/icons/GitHubIconLetter";
import { ProyectsPersonalwebsiteCompactMD } from "../components/domain/ProyectsPersonalwebsiteCompactMD";
import { ProyectsWeaverCompactMD } from "../components/domain/ProyectsWeaverCompactMD";



const PortfolioPage: React.FC = () => {
  return (
    <>
      <Section
        id="projects-title"
      >
        <Stack direction="column" gap="none" justifyContent="center" align="stretch" margin="sm">
          <Text variant="title" align="center">Arquitectura aplicada</Text>
          <Text variant="subtitle" align="center">Sistemas diseñados, automatizados y operados en entornos reales</Text>
          <Text variant="body" align="center">En esta sección presento proyectos donde aplico pensamiento sistémico en entornos reales: diseño de infraestructura, automatización y servicios en evolución. Cada proyecto está planteado como un sistema completo, no como una prueba aislada.</Text>
        </Stack>
      </Section>


      <Section
        id="Homelab"
        title="Infraestructura Autónoma On-Premise"
        subtitles="Plataforma diseñada para operar servicios digitales con control total sobre red, energía y despliegue"
      >
        <Stack direction="column" gap="md" justifyContent="center" align="center" >
          <Stack className="stack-60-40" direction="row" gap="none" margin="xs" justifyContent="space-between" align="stretch">
            <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-evenly" align="stretch" margin="sm">
              <Text variant="body">Diseño y mantengo una infraestructura propia donde experimento con redes, contenedores, reverse proxy, segmentación VLAN y automatización progresiva. No es solo un laboratorio: es un entorno real que aloja servicios productivos y me permite practicar arquitectura, despliegue y observabilidad de extremo a extremo.</Text>
              <BulletList>
                <Bullet>Segmentación de red con VLAN (LAN, DMX, IoT, Energy, Guest)</Bullet>
                <Bullet>Reverse proxy Nginx y servicios Docker en red interna</Bullet>
                <Bullet>Monitorización y análisis de tráfico y rendimiento</Bullet>
                <Bullet>Diseño preparado para evolución a IaC (Terraform + Ansible)</Bullet>
              </BulletList>
            </Stack>
            <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
              <ProyectsHomelabCompactMD />
            </Stack>
          </Stack>
        </Stack>
      </Section>


      <Section
        id="personal-website"
        title="Personal Website - Arquitectura como producto"
        subtitles="Web pública diseñada como sistema evolutivo, no como plantilla estática"
      >
        <Stack direction="column" gap="md" justifyContent="center" align="center" >
          <Stack className="stack-60-40" direction="row" gap="none" margin="xs" justifyContent="space-between" align="stretch">
            <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-evenly" align="stretch" margin="sm">
              <Text variant="body">Esta web no es solo una presentación profesional. Es un entorno donde aplico arquitectura por componentes, control de versiones y despliegue continuo. Está diseñada para evolucionar hacia backend propio, microservicios y automatización.</Text>
              <BulletList>
                <Bullet>React + Vite con arquitectura modular</Bullet>
                <Bullet>CI/CD con GitHub Actions</Bullet>
                <Bullet>Contenerización Docker y despliegue automático</Bullet>
                <Bullet>Preparándose para backend Spring Boot y servicios desacoplados</Bullet>
              </BulletList>
              <Button to="https://github.com/raullopezpenalva/Personal-Website" variant="secondary">
                <GitHubIconLetter className="personalweb-github-icon" />
              </Button>
            </Stack>
            <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
              <ProyectsPersonalwebsiteCompactMD />
            </Stack>
          </Stack>
        </Stack>
      </Section>
      

      <Section
        id="weaver"
        title="Weaver - Plataforma comunitaria descentralizada"
        subtitles="Arquitectura para comunidades físicas con identidad certificada y estructura cooperativa"
      >
        <Stack direction="column" gap="md" justifyContent="center" align="center" >
          <Stack className="stack-60-40" direction="row" gap="none" margin="xs" justifyContent="space-between" align="stretch">
            <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-evenly" align="stretch" margin="sm">
              <Text variant="body">Weaver es un proyecto en desarrollo que explora cómo diseñar una red social basada en comunidades físicas reales. El reto no es solo funcional, sino arquitectónico: identidad, permisos, escalabilidad, backend y despliegue controlado.</Text>
              <BulletList>
                <Bullet>Arquitectura modular con separación de servicios</Bullet>
                <Bullet>Backend en desarrollo (Spring Boot)</Bullet>
                <Bullet>Contenedorización y despliegue con Docker (futuro K8s)</Bullet>
                <Bullet>Diseño orientado a permisos y comunidades segmentadas</Bullet>
                <Bullet>Preparado para crecimiento horizontal</Bullet>
              </BulletList>
              <Button to="https://weaver.cat" variant="secondary">
                <p>Visitar Weaver</p>
              </Button>
            </Stack>
            <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
              <ProyectsWeaverCompactMD />
            </Stack>
          </Stack>
        </Stack>
      </Section>
    </>
    
  );
};

export default PortfolioPage;
