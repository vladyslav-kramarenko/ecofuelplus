import React, {useState} from 'react';
import "./Certificates.css";
import Modal from "./Modal/Modal";
import certificate1 from "../../images/certificate.jpg"
import certificate2 from "../../images/certificate_ua.jpg"
import {useTranslation} from "react-i18next";

interface CertificatsSectionProps {
    id: string;
}

const CertificatesSection: React.FC<CertificatsSectionProps> = ({id}) => {

    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');

    const certificates = [
        { id: 1, src: certificate1, alt: 'Eurocert Certificate EN' },
        { id: 2, src: certificate2, alt: 'Eurocert Certificate UA' },
    ];

    const openModal = (imgSrc: string) => {
        setSelectedImg(imgSrc);
        setModalOpen(true);
    };

    return (
        <section id={id} className="certificates-section section">
            <h2>{t("certificates.title")}</h2>
            <p>{t("certificates.description")}</p>
            <div className="gallery">
                {certificates.map(certificate => (
                    <img
                        key={certificate.id}
                        src={certificate.src}
                        alt={certificate.alt}
                        onClick={() => openModal(certificate.src)}
                        className="gallery-image"
                    />
                ))}
            </div>
            {modalOpen && <Modal src={selectedImg} onClose={() => setModalOpen(false)} />}

        </section>
    );
};

export default CertificatesSection;