import React, {useState, useEffect} from 'react';
import HomeSection from './components/Home';
import AboutSection from './components/About';
import ContactsSection from './components/Contacts/Contacts';
import AdvantagesSection from './components/PelletAdvantages';
import {useTheme} from "./components/ThemeContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import CallbackButton from "./components/CallbackButton/CallbackButton";
import './App.css';

function App() {
    const [activeSection, setActiveSection] = useState('');

    const {theme} = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about-us', 'contacts', 'advantages'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= 0 && rect.top <= window.innerHeight / 2;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`App ${theme}`}>
            <Header activeSection={activeSection}/>
            <main>
                <HomeSection id="home"/>
                <AboutSection id="about-us"/>
                <AdvantagesSection id="advantages"/>
                <ContactsSection id="contacts"/>
                <CallbackButton/>
            </main>

            <Footer/>
        </div>
    );
}
export default App;
