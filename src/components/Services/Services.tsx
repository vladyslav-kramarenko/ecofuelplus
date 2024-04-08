import React from "react";
import {useTranslation} from "react-i18next";

interface ServicesSectionProps {
    id: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({id}) => {
    const {t} = useTranslation();
    return (
        <section id={id} className="services-section section">
            <h1>{t("menu.services")}</h1>
        </section>
    );
};

export default ServicesSection;