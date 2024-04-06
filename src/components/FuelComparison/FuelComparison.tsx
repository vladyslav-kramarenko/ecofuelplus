import React from 'react';
import {useTranslation} from 'react-i18next';
import './FuelComparison.css';

interface FuelComparisonSectionProps {
    id: string;
}

const FuelComparisonSection: React.FC<FuelComparisonSectionProps> = ({id}) => {
    const {t} = useTranslation();

    return (
        <div id={id} className={"fuel-comparison-section section ${theme}"}>
            <h1>{t("Features of wood pellets and their comparison with other types of fuel")}</h1>
            <p>{t("You can buy pellets in Kyiv and other cities of Ukraine, which are produced in the form of granules, made from different types of wood. Biofuel is produced from the waste of woodworking production, so the price per ton of pellets is quite low.")}</p>

            {/* Table for comparison */}
            <table>
                <thead>
                <tr>
                    <th>{t("Fuel Type")}</th>
                    <th>{t("Ash Content")}</th>
                    <th>{t("Calorific Value")}</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{t("Coal")}</td>
                    <td>{t("on average 15%")}</td>
                    <td>{t("6.4-7.5 kW*h (6800-8350 kcal/kg)")}</td>
                </tr>
                <tr>
                    <td>{t("Wood")}</td>
                    <td>{t("8%")}</td>
                    <td>{t("Leafy wood – 4.2-4.5 kW*h/kg, pine – 4.3 kW*h/kg")}</td>
                </tr>
                <tr>
                    <td>{t("Briquettes")}</td>
                    <td>{t("0.5-1.5%")}</td>
                    <td>{t("4.9 kW*h")}</td>
                </tr>
                <tr>
                    <td>{t("Pellets")}</td>
                    <td>{t("0.5-1%")}</td>
                    <td>{t("4.7-5.4 kW*h")}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default FuelComparisonSection;
