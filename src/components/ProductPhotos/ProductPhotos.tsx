import React, {useState} from 'react';
import "./ProductPhotos.css";
import Modal from "../Modal/Modal";
import {useTranslation} from "react-i18next";
import { motion } from 'framer-motion';
import {useInView} from "react-intersection-observer";
import photo2 from "../../images/pellets-15kg.png";
import photo3 from "../../images/big-bag1-min.png";
interface ProductPhotosSectionProps {
    id: string;
}

const ProductPhotosSection: React.FC<ProductPhotosSectionProps> = ({id}) => {

    const {t} = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');

    const products = [
        // { id: 1, src: photo1, alt: 'pellets photo' },
        { id: 2, src: photo2, alt: 'package 15kg' },
        { id: 3, src: photo3, alt: 'package big-bag' },
    ];
    const openModal = (imgSrc: string) => {
        setSelectedImg(imgSrc);
        setModalOpen(true);
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,   // Trigger when 50% of the item is visible
    });

    const variants = {
        visible: { opacity: 1, x: 0, y:0, transition: { type: 'spring', duration: 1 } },
        hidden: { opacity: 0, x: 0, y:40 }, // Starts from the right
    };

    return (
        <div id={id} className="productPhotos-section section">
            {/*<h2>{t("products.title")}</h2>*/}
            <p>{t("pellets.photosDescription")}</p>

            <div className="gallery">
                {products.map(product => (

                    <motion.img
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={variants}

                        key={product.id}
                        src={product.src}
                        alt={product.alt}
                        onClick={() => openModal(product.src)}
                        className="gallery-image"
                    />
                ))}
            </div>
            {modalOpen && <Modal src={selectedImg} onClose={() => setModalOpen(false)}/>}

        </div>
    );
};

export default ProductPhotosSection;