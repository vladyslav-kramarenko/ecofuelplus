import React from 'react';

interface AboutSectionProps {
    id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({id}) => {
    return (
        <div id={id}  className="section">
            <h1>About</h1>
        </div>
    );
};

export default AboutSection;