import React from 'react';
import {useTheme} from "./ThemeContext";
// import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
    activeSection: string;
}

const Header: React.FC<HeaderProps> = ({activeSection}) => {
    // const { i18n } = useTranslation();
    const {theme, toggleTheme} = useTheme();

    // const changeLanguage = (language: string) => {
    //     i18n.changeLanguage(language);
    // };

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <header>
            <nav>
                <button onClick={() => scrollToSection('home')}>Home</button>
                <button onClick={() => scrollToSection('about-us')}>About Us</button>
                <button onClick={() => scrollToSection('contacts')}>Contacts</button>
                <button onClick={() => scrollToSection('advantages')}>Pellet Advantages</button>
                <button onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
                </button>
                <LanguageSwitcher /> {/* Include LanguageSwitcher as a dropdown */}

                {/*<button onClick={() => changeLanguage('en')}>EN</button>*/}
                {/*<button onClick={() => changeLanguage('ua')}>UA</button>*/}
            </nav>
        </header>
    );
};

export default Header;