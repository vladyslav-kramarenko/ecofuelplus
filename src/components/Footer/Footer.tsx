import React from 'react';
import './Footer.css';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../ThemeContext';
import {FaLinkedin, FaTelegram} from 'react-icons/fa';
import logo from '../../images/ecofuel+_logo_small.jpg';
import {FaLocationDot} from "react-icons/fa6"; // Update the path to your logo

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
                    <button onClick={() => scrollToSection('comparison')}>{t('menu.fuelcomparison')}</button>
                    <button onClick={() => scrollToSection('contacts')}>{t('menu.contacts')}</button>
                </nav>

                <div className="footer-contacts">
                    <a href={"mailto:info@ecofuel.plus"} target={"_blank"} rel="noreferrer">info@ecofuel.plus</a>
                    <a href={"tel:+380683688623"} target={"_blank"} rel="noreferrer">+38 068 368 8623</a>
                    <div className="footer-social">
                        <a href="https://www.linkedin.com/company/ecofuelplus" target="_blank"
                           rel="noopener noreferrer"><FaLinkedin/></a>
                        <a href="https://t.me/EcoFuelplus" target="_blank"
                           rel="noopener noreferrer"><FaTelegram/></a>
                        <a href="https://maps.app.goo.gl/PFVW53j1uWbrrLGC6" target="_blank"
                           rel="noopener noreferrer"><FaLocationDot/></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 {t('copyright')}</p>
                <p>{t('Made by Vladyslav Kramarenko')}</p>
            </div>
        </footer>
    );
};

export default Footer;
