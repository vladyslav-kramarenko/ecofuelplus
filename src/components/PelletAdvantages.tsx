import React from 'react';
interface AdvantagesSectionProps {
    id: string;
}
const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({id}) => {
    return (
        <section  id={id} className="section">
            <h1>PelletAdvantages</h1>
        </section>
    );
};

export default AdvantagesSection;