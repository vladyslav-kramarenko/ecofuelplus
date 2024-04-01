import React from 'react';
import {useTheme} from "../ThemeContext";
import logo from "../../images/ecofuelplus.png";
// import logoDark from "../images/ecofuelplus-dark.png";
// import logoLight from "../images/ecofuelplus-light.png";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import "./Header.css";

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({activeSection}) => {
    const {theme, toggleTheme} = useTheme();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    // const logo = theme === 'light' ? logoLight : logoDark;

    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="EcoFuel+ Logo" className="header-logo"/>
            </div>
            <nav>
                <button onClick={() => scrollToSection('home')}>Home</button>
                <button onClick={() => scrollToSection('about-us')}>About Us</button>
                <button onClick={() => scrollToSection('advantages')}>Pellet Advantages</button>
                <button onClick={() => scrollToSection('contacts')}>Contacts</button>
            </nav>
            <div className="theme-switcher">
                <input
                    id="theme-toggle"
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <label htmlFor="theme-toggle"></label>
            </div>
            <LanguageSwitcher/>
        </header>
    );
};

export default Header;