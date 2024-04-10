import React from 'react';
import {useTranslation} from "react-i18next";
import "./Home.css";

interface HomeSectionProps {
    id: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({id}) => {
    const {t} = useTranslation();
    return (
        <div id={id} className="home-section">
            <h1>{t('Welcome')}</h1>
        </div>
    );
};


export default HomeSection;
