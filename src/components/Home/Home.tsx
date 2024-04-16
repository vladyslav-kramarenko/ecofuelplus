import React from 'react';
import {useTranslation} from "react-i18next";
import "./Home.css";
import logo from '../../images/icon_big-min.png'

interface HomeSectionProps {
    id: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({id}) => {
    const {t} = useTranslation();
    return (
        <div id={id} className="home-section">
            {/*<h1>{t('Welcome')}</h1>*/}
            <img src={logo} className={"home-logo"} alt={"Ecofuel Logo"}/>
        </div>
    );
};


export default HomeSection;
