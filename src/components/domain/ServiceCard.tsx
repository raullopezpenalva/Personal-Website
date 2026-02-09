import React from "react";
import type { Service } from "../../data/services";

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    const Icon = service.icon;
    return (
        <article className="service-card">
            <h3>{service.title}</h3>
            <Icon className="service-icon" />
            <p>{service.description}</p>
        </article>
    );
};

export default ServiceCard;