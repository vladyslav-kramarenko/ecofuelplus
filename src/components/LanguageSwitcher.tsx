import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <select onChange={changeLanguage} defaultValue={i18n.language}>
            <option value="en">EN</option>
            <option value="ua">UA</option>
            <option value="ru">RU</option>
        </select>
    );
};

export default LanguageSwitcher;
