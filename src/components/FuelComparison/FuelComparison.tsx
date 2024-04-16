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
            {/*<h1>{t("menu.pellets")}</h1>*/}
            <p>{t("pellets.tableDescription")}</p>
            <div className="table-responsive">
                <table>
                    <thead>
                    <tr>
                        <th>{t("pellets.parameter")}</th>
                        <th>{t("pellets.wood")}</th>
                        <th>{t("pellets.woodPellet")}</th>
                        <th>{t("pellets.coal")}</th>
                        <th>{t("pellets.gas")}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{t("pellets.moisture")}</td>
                        <td>{"30-40"}</td>
                        <td>{"6-10"}</td>
                        <td>{"10-15"}</td>
                        <td>{"-"}</td>
                    </tr>
                    <tr>
                        <td>{t("pellets.density")}</td>
                        <td>{"200-250"}</td>
                        <td>{"550-750"}</td>
                        <td>{"800-850"}</td>
                        <td>{"-"}</td>
                    </tr>
                    <tr>
                        <td>{t("pellets.calorificMjKg")}</td>
                        <td>{"9-12"}</td>
                        <td>{"15-19"}</td>
                        <td>{"23-28"}</td>
                        <td>{"35-48"}</td>
                    </tr>
                    <tr>
                        <td>{t("pellets.calorificKWH")}</td>
                        <td>{"4.2-4.5"}</td>
                        <td>{"4.7-5.5"}</td>
                        <td>{"6.4-7.5"}</td>
                        <td>{"9.6-13.3"}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default FuelComparisonSection;
