import React from "react";
import type { Service } from "../../data/services";

interface ServiceCardProps {
    service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
    return (
        <article className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
        </article>
    );
};

export default ServiceCard;