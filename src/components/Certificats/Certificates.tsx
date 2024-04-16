import React, {useState} from 'react';
import "./Certificates.css";
import Modal from "../Modal/Modal";
import certificate1 from "../../images/certificate.jpg"
import certificate2 from "../../images/certificate_ua.jpg"
import {useTranslation} from "react-i18next";
import { motion } from 'framer-motion';
import {useInView} from "react-intersection-observer";
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

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const variants = {
        visible: { opacity: 1, x: 0, y:0, transition: { type: 'spring', duration: 1 } },
        hidden: { opacity: 0, x: 100, y:0 },
    };

    return (
        <section id={id} className="certificates-section section">
            <h2>{t("certificates.title")}</h2>
            <p>{t("certificates.description")}</p>
            <div className="gallery">
                {certificates.map(certificate => (
                    <motion.img
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}
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