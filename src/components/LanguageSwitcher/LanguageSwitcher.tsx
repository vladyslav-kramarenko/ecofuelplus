import React from 'react';
import {useTranslation} from 'react-i18next';
import "./LanguageSwitcher.css";
import {useTheme} from "../ThemeContext";

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const { theme } = useTheme();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className={"language-switcher "+theme}>
            <select onChange={changeLanguage} defaultValue={i18n.language}>
                <option value="ua">UA</option>
                <option value="en">EN</option>
                <option value="pl">PL</option>
                <option value="ru">RU</option>
            </select>
        </div>
    );
};

export default LanguageSwitcher;
