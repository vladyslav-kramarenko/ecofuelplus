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
        <section id={id} className="contacts-section section">
            <h1>{t('menu.contacts')}</h1>
            <div className="contacts-container">
                <div className="contact-card">
                    <div className={"contact-text"}>
                        <p>{t('contacts.CompanyFullName')}</p>
                        {/*<p>{t('contacts.CompanyName')}</p>*/}
                        <p>{t('contacts.Location')}</p>
                        <p>{t('contacts.CompanyCode')}: 45093069</p>
                        <p>{t('contacts.Phone')}: <a href={"tel:+380683688623"}>(068) 368-86-23</a></p>
                    </div>
                    <div className={"contact-icon"}>
                        <img src={img} alt={"ecofuelplus logo"}/>
                    </div>
                </div>
                <div className="map-container contact-card ">
                    <iframe
                        title="location"
                        // src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5347.511876521549!2d25.141368402991134!3d50.762789293808886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDQ1JzQ5LjkiTiAyNcKwMDgnNTcuNiJF!5e0!3m2!1sen!2sca!4v1712360549709!5m2!1sen!2sca"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28545.94485978734!2d25.111469732822012!3d50.77318408832637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4725a36936b16ca3%3A0xfbe50dc941b095e9!2z0JXQmtCe0KTQrNCu0JXQmyDQn9Cb0K7QoQ!5e0!3m2!1sen!2sca!4v1712900768615!5m2!1sen!2sca"
                        width="600"
                        height="450"
                        style={{border: 0}}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactsSection;
