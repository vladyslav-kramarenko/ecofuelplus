import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "Welcome": "Welcome to Our Wood Pellet Production Company",
            // Other keys and translations...

            //     contacts
            "CompanyFullName": "LIMITED LIABILITY COMPANY ECOFUEL PLUS",
            "CompanyName": "LLC ECOFUEL PLUS",
            "CompanyCode": "EDRPOU code",
            "Location": "Volyn region, Lutsk district, village Shepel",
            "Phone": "Phone",
            "QualityCertificate": "Pellets Certificate of Quality",
        }
    },
    ua: {
        translation: {
            "Welcome": "Ласкаво просимо до нашої компанії з виробництва деревних гранул",
            // Other keys and translations...
            //     contacts
            "CompanyFullName": "ТОВАРИСТВО З ОБМЕЖЕНОЮ ВЫДПОВІДАЛЬНІСТЮ ЕКОФЬЮЕЛ ПЛЮС",
            "CompanyName": "ТОВ ЕКОФЬЮЕЛ ПЛЮС",
            "CompanyCode": "Код ЄДРПОУ",
            "Location": "Волинська область, Луцький район, с.Шепель",
            "Phone": "Телефон",
            "QualityCertificate": "Сертифікат якості пелет",
        }
    },
    ru: {
        translation: {
            "Welcome": "Ласкаво просимо до нашої компанії з виробництва деревних гранул",
            // Other keys and translations...
            //     contacts
            "CompanyFullName": "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ ЕКОФЬЮЕЛ ПЛЮС",
            "CompanyName": "ООО ЕКОФЬЮЭЛ ПЛЮС",
            "CompanyCode": "Код ЕГРПОУ",
            "Location": "Волынская область, Луцкий район, с.Шепель",
            "Phone": "Телефон",
            "QualityCertificate": "Сертификат качества пеллет",
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