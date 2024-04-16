import React from 'react';
import {useTranslation} from 'react-i18next';
import './Pellets.css';
import FuelComparisonSection from "../FuelComparison/FuelComparison";
import ProductPhotosSection from "../ProductPhotos/ProductPhotos";

interface PelletsSectionProps {
    id: string;
}

const PelletsSection: React.FC<PelletsSectionProps> = ({id}) => {
    const {t} = useTranslation();

    return (
        <section id={id} className={"pellets-section section ${theme}"}>
            <h1>{t("pellets.title")}</h1>
            <p>{t("pellets.about")}</p>

            <ProductPhotosSection id="products"/>
            <FuelComparisonSection id="comparison"/>

        </section>
    )
}

export default PelletsSection;