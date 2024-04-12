import React from "react";
import {useTranslation} from "react-i18next";
import storageImage from '../../images/storage.jpeg';
import deliveryImage from '../../images/delivery1.jpeg';
import packagingImage from '../../images/packing.jpg';
import reusePackageImage from '../../images/reusePackage.jpeg';
import "./Services.css";

interface ServicesSectionProps {
    id: string;
}

interface ServiceCardProps {
    title: string;
    description: string[];
    image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, image }) => {
    return (
        <div className="service-card">
            <img src={image} alt={title} className="service-image" />
            <div className={"service-text"}>
                <h2 className="service-title">{title}</h2>
                {description.map((paragraph, idx) => (
                    <p key={idx} className="service-description">{paragraph}</p>
                ))}
            </div>
            {/* Optional CTA Button */}
            {/*<button className="service-cta">Learn More</button>*/}
        </div>
    );
};

const ServicesSection: React.FC<ServicesSectionProps> = ({id}) => {
    const {t} = useTranslation();
    const services = [
        {
            title: t('services.storage'),
            description: [
                t('services.storageDescription1'),
                t('services.storageDescription2'),
                t('services.storageDescription3'),
            ],
            image: storageImage,
        },
        {
            title: t('services.delivery'),
            description: [
                t('services.deliveryDescription1'),
                t('services.deliveryDescription2'),
                t('services.deliveryDescription3'),
                t('services.deliveryDescription4'),
            ],
            image: deliveryImage,
        },
        {
            title: t('services.customPacking'),
            description: [
                t('services.customPackagingDescription1'),
                t('services.customPackagingDescription2'),
                t('services.customPackagingDescription3'),
                t('services.customPackagingDescription4'),
                t('services.customPackagingDescription5'),
            ],
            image: packagingImage,
        },
        {
            title: t('services.reusePacking'),
            description: [
                t('services.reusePackingDescription1'),
                t('services.reusePackingDescription2'),
                t('services.reusePackingDescription3'),
                t('services.reusePackingDescription4'),
                t('services.reusePackingDescription5'),
            ],
            image: reusePackageImage,
        },
    ];

    return (
        <section id={id} className="services-section section">
            <h1>{t('menu.services')}</h1>
            <div className="services-container">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;