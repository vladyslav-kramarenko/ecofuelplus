import React from 'react';
import {useTranslation} from "react-i18next";
import "./About.css";

interface AboutSectionProps {
    id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({id}) => {

    const {t} = useTranslation();
    return (
        <section id={id} className="about-section section">
            <h1>{t('about.Title')}</h1>
            <p>{t('about.Paragraph1')}</p>
            <p>{t('about.Paragraph2')}</p>
            <p>{t('about.Paragraph3')}</p>
            <p>{t('about.Paragraph4')}</p>
            <p>{t('about.Paragraph5')}</p>
        </section>
    );
};

export default AboutSection;