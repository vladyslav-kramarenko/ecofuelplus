import React from 'react';
import "./Dropdown.css";

const Dropdown: React.FC = () => {
    return (
        <div className="cb-dropdown">
            <a className="select-item" target="_blank" rel="nofollow noreferrer"
               href="https://t.me/EcoFuelplus">
                <i className="telegram-icon"><span> </span></i>
                Telegram
            </a>
            <a className="select-item" target="_blank"
               rel="nofollow noreferrer"
               href="viber://chat/?number=%2B380683688623">
                <i className="viber-icon"><span></span></i>
                Viber
            </a>
            {/*<a className="select-item" target="_blank" rel="nofollow noreferrer"*/}
            {/*   href="https://api.whatsapp.com/send/?phone=%2B905373110846&amp;text&amp;type=phone_number&amp;app_absent=0">*/}
            {/*    <i className="whatsapp-icon"><span></span></i>*/}
            {/*    WhatsApp*/}
            {/*</a>*/}
            <a className="select-item" href="tel:+1234567890">
                <i className="phone-icon-black"><span></span></i>
                +38 068 368 8623
                {/*Call Us*/}
            </a>
        </div>
    );
};

export default Dropdown;
