import React from 'react';

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="w3-center w3-container w3-small">
            <p>&copy; {year} Molly Britton</p>
        </footer>
    );
};

export default Footer;
