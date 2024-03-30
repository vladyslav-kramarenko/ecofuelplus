import React from 'react';
import {useTranslation} from "react-i18next";

interface HomeSectionProps {
    id: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({id}) => {
    const {t} = useTranslation();
    // Your component implementation, using the 'id' prop as needed
    return (
        <div id={id} className="section">
            <h1>{t('Welcome')}</h1>
        </div>
    );
};


export default HomeSection;
