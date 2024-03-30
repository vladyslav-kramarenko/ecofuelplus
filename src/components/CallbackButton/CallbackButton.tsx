import React, {useState} from 'react';
import "./CallbackButton.css";
import "./Tooltip.css"
import Dropdown from "./Dropdown/DropDown";

const CallbackButton: React.FC = () => {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <div
            className="callback-button callback-button-embed"
            data-balloon-pos="left"
            data-balloon="Contact us"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
        >
            {!isDropdownVisible && (
                <>
                    <i className="phone-icon"><span></span></i>
                    <i className="comment-icon">
                        <span className={"no-animation"}></span>
                    </i>
                </>
            )}
            {isDropdownVisible && (
                <i className={`times-icon ${isDropdownVisible ? 'open' : ''}`}>
                    <span className="no-animation"></span>
                </i>
            )}
            {isDropdownVisible && <Dropdown/>}
        </div>
    );

};

export default CallbackButton;