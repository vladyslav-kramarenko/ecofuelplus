import React from 'react';

interface ContactsSectionProps {
    id: string;
}

const ContactsSection: React.FC<ContactsSectionProps> = ({id}) => {
    return (
        <div id={id}  className="section">
            <h1>Contacts</h1>
        </div>
    );
};

export default ContactsSection;