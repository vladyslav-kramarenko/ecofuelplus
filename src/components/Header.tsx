import React from 'react';
import {useTheme} from "./ThemeContext";

import LanguageSwitcher from "./LanguageSwitcher";

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
                <LanguageSwitcher />
            </nav>
        </header>
    );
};

export default Header;