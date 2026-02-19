import React from 'react';
import Text from '../components/ui-primitives/Text';
import Section from '../components/ui-patterns/Section';
import Stack from '../components/ui-primitives/Stack';
import Bullet from '../components/ui-patterns/Bullet';
import BulletList from '../components/ui-patterns/BulletList';
import { VisionBlock3MD } from '../components/domain/VisionBlock3MD';

const ServicesPage: React.FC = () => {
    return (
        <>
            <Section
                id="block1"
            >
                <Stack direction="column" gap="none" justifyContent="center" align="stretch" margin="sm">
                    <Text variant="title" align="center">Pensar antes de construir</Text>
                    <Text variant="subtitle" align="center">Todo sistema responde a una necesidad. Entender esa transformación es el primer paso antes de automatizar, escalar o desplegar.</Text>
                </Stack>
            </Section>
            <Section
                id="block2"
                title="Comprender antes de intervenir"
            >
                <Stack direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                    <Text variant="body">Cuando me enfrento a un sistema complejo, lo primero que intento entender no es la herramienta ni la tecnología, sino la razón de existir. Todo sistema responde a una necesidad y transformación de energía (recursos, información o decisiones) hasta producir un resultado.</Text>
                    <Text variant="body">Intento observarlo desde una visión cenital: comprender cómo fluye esa transformación, cómo interactúan sus partes y en qué punto puede romperse el equilibrio. Sin esa perspectiva, cualquier intervención es parcial.</Text>
                    <BulletList>
                        <Bullet>Propósito del sistema</Bullet>
                        <Bullet>Flujo completo end-to-end</Bullet>
                        <Bullet>Capas históricas y decisiones previas</Bullet>
                        <Bullet>Puntos críticos y dependencias</Bullet>
                        <Bullet>Posibles estados futuros</Bullet>
                    </BulletList>
                    <Text variant="body">Solo después de entender el conjunto tiene sentido optimizar una pieza.</Text>
                </Stack>
            </Section>
            <Section
                id="block3"
                title="Diseñar para el estado futuro"
            >
                <Stack className="stack-60-40" direction="row" gap="none" margin="lg">
                    <Stack className="stack-60-40-left" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                        <Text variant="body">No diseño sistemas solo para resolver el presente. Pienso en cómo podrían evolucionar: qué ocurrirá cuando crezcan, cuando cambien las condiciones o cuando aumente la complejidad.</Text>
                        <Text variant="body">Siempre me ha resultado natural imaginar el estado final de un sistema antes de construirlo. Visualizar su arquitectura completa, sus compatibilidades, sus límites y su posible expansión.</Text>
                        <BulletList>
                            <Bullet>Modularidad y separación de responsabilidades</Bullet>
                            <Bullet>Automatización desde el diseño</Bullet>
                            <Bullet>Escalabilidad horizontal y vertical</Bullet>
                            <Bullet>Observabilidad integrada</Bullet>
                            <Bullet>Capacidad de adaptación a nuevos requisitos</Bullet>
                        </BulletList>
                        <Text variant="body">Escalar no es añadir más recursos. Es haber diseñado desde el principio para poder crecer sin romper el equilibrio.</Text>
                    </Stack>
                    <Stack className="stack-60-40-right" direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                        <VisionBlock3MD />
                    </Stack>
                </Stack> 
            </Section>
            <Section
                id="block4"
                title="DevOps como arquitectura, no como herramienta"
            >
                <Stack direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                    <Text variant="body">Para mí, DevOps no es una colección de herramientas, sino una forma de diseñar arquitectura de sistemas pensada para ser operable, automatizable y escalable desde el primer momento.</Text>
                    <Text variant="body">No separo desarrollo, infraestructura y operación. Los veo como capas de una misma arquitectura que deben funcionar como un todo coherente.</Text>
                    <BulletList>
                        <Bullet>Arquitectura modular con responsabilidades claras</Bullet>
                        <Bullet>Infraestructura tratada como parte del diseño, no como un añadido posterior</Bullet>
                        <Bullet>Automatización integrada en el ciclo de vida del sistema</Bullet>
                        <Bullet>Observabilidad como propiedad arquitectónica, no como parche</Bullet>
                        <Bullet>Escalabilidad pensada desde el diseño inicial</Bullet>
                    </BulletList>
                    <Text variant="body">No me interesa solo que un sistema funcione. Me interesa que su arquitectura permita evolucionar sin fricción, crecer sin improvisación y mantenerse estable bajo presión.</Text>
                </Stack>
            </Section>
            <Section
                id="block5"
                title="Hacia dónde quiero evolucionar"
            >
                <Stack direction="column" gap="md" justifyContent="space-around" align="stretch" margin="sm">
                    <Text variant="body">Mi objetivo es crecer hacia el diseño de arquitectura de sistemas, donde la planificación técnica y la visión global formen parte del proceso desde el inicio.</Text>
                    <Text variant="body">Soy consciente de que esa evolución requiere experiencia, profundidad técnica y exposición a sistemas reales. Por eso estoy construyendo esa base de forma intencionada: entendiendo infraestructura, automatización y operación desde dentro.</Text>
                    <Text variant="body">Busco entornos donde pueda aportar pensamiento sistémico mientras sigo desarrollando mi capacidad técnica. Equipos donde diseñar, ejecutar y aprender formen parte del mismo ciclo.</Text>
                    <Text variant="body">No quiero solo mantener sistemas. Quiero entenderlos, mejorarlos y aprender a diseñarlos mejor cada vez.</Text>
                </Stack>
            </Section>
                
             

        
        </>
    );
};

export default ServicesPage;