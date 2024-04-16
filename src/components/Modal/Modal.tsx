import React from 'react';
import './Modal.css';

interface ModalProps {
    src: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({src, onClose}) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <img className={"certificate-image"} onClick={onClose} src={src} alt="Certificate"/>
                <button className="modal-close-btn" onClick={onClose}>&#10005;</button>
            </div>
        </div>
    );
};

export default Modal;
