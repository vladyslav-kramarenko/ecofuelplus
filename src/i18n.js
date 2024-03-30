import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "Welcome": "Welcome to Our Wood Pellet Production Company",
            // Other keys and translations...
        }
    },
    ua: {
        translation: {
            "Welcome": "Ласкаво просимо до нашої компанії з виробництва деревних гранул",
            // Other keys and translations...
        }
    },
    ru: {
        translation: {
            "Welcome": "Ласкаво просимо до нашої компанії з виробництва деревних гранул",
            // Other keys and translations...
        }
    }
    // Add more languages here...
};

i18n
    .use(initReactI18next) // Passes i18n down to react-i18next
    .use(LanguageDetector) // Detects user language
    .init({
        resources,
        fallbackLng: "ua", // Use English if detected lang is not available
        interpolation: {
            escapeValue: false // React already safes from XSS
        }
    });

export default i18n;