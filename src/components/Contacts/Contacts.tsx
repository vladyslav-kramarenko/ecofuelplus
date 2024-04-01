import React from 'react';
import certificate from "../../images/certificate.jpg";
import "./Contacts.css";
import img from "../../images/ecofuel+_logo_small.jpg";
import {useTranslation} from "react-i18next";

interface ContactsSectionProps {
    id: string;
}

const ContactsSection: React.FC<ContactsSectionProps> = ({id}) => {
    const {t} = useTranslation();
    return (
        <div id={id} className="contacts-section section">
            <h1>Contacts</h1>
            <div className="contacts-container">
                <div className="contact-card">
                    <div className={"contact-text"}>
                        <p>{t('CompanyFullName')}</p>
                        <p>{t('CompanyName')}</p>
                        <p>{t('Location')}</p>
                        <p>{t('CompanyCode')}: 45093069</p>
                        <p>{t('Phone')}: <a href={"tel:+380683688623"}>0683688623</a></p>
                        <a href={certificate} target="_blank" rel="noopener noreferrer">{t('QualityCertificate')}</a>
                    </div>
                    <div className={"contact-icon"}>
                        <img src={img} alt={"ecofuelplus logo"}/>
                    </div>
                </div>
                <div className="contact-card map-container">
                    <iframe
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20179.71393935068!2d25.1234504!3d50.78550445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4725a365bd4d593d%3A0xfce34940def75dca!2sShepel&#39;%2C%20Volyn%20Oblast%2C%20Ukraine%2C%2045620!5e0!3m2!1sen!2sca!4v1711952372563!5m2!1sen!2sca"
                        width="600"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>

                </div>
            </div>
        </div>
    );
};

export default ContactsSection;
