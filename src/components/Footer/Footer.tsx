import React from 'react';
import './Footer.css';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../ThemeContext';
import {FaFacebook, FaLinkedin, FaTelegram, FaViber} from 'react-icons/fa';
import {FaLocationDot} from "react-icons/fa6";
import logo from '../../images/ecofuel+_logo_small.jpg';

const Footer: React.FC = () => {
    const {t} = useTranslation();
    const {theme} = useTheme();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <footer className={`footer ${theme}`}>
            <div className="footer-content">
                <img src={logo} alt="EcoFuel Plus" className="footer-logo"/>

                <nav className="footer-nav">
                    <button onClick={() => scrollToSection('home')}>{t('menu.home')}</button>
                    {/*<button onClick={() => scrollToSection('advantages')}>{t('Pellet Advantages')}</button>*/}
                    <button onClick={() => scrollToSection('about-us')}>{t('menu.about')}</button>
                    <button onClick={() => scrollToSection('comparison')}>{t('menu.pellets')}</button>
                    <button onClick={() => scrollToSection('certificates')}>{t('menu.certificates')}</button>
                    <button onClick={() => scrollToSection('services')}>{t('menu.services')}</button>
                    <button onClick={() => scrollToSection('contacts')}>{t('menu.contacts')}</button>
                </nav>

                <div className="footer-contacts">
                    <a href={"mailto:info@ecofuel.plus"} target={"_blank"} rel="noreferrer">info@ecofuel.plus</a>
                    <a href={"tel:+380683688623"} target={"_blank"} rel="noreferrer">+38 068 368 8623</a>
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/company/ecofuelplus" target="_blank"
                           rel="noopener noreferrer"><FaLinkedin/></a>
                        <a href="https://www.facebook.com/people/Ecofuel-Plus/61558222918532/" target="_blank"
                           rel="noopener noreferrer"><FaFacebook/></a>
                        <a href="https://t.me/EcoFuelplus" target="_blank"
                           rel="noopener noreferrer"><FaTelegram/></a>
                        <a href="viber://chat/?number=%2B380683688623" target="_blank"
                           rel="noopener noreferrer"><FaViber/></a>
                        <a href="https://maps.app.goo.gl/PFVW53j1uWbrrLGC6" target="_blank"
                           rel="noopener noreferrer"><FaLocationDot/></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 {t('copyright')}</p>
                <p>{'Made by'} <a href={"https://kramarenko.info/"}>{"Vladyslav Kramarenko"}</a></p>
            </div>
        </footer>
    );
};

export default Footer;
