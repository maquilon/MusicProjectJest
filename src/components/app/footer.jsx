import React from 'react';

const Footer = () => {
    let currentDate = new Date().getFullYear();

    return (
        <footer className="container-fluid">
            <nav className="navbar fixed-bottom">
                <p style={{ color: '#fff', font: 'Open Sans, Helvetica Neue', fontSize: '12px', padding: '10px 10px 15px 0px' }}>
                    {currentDate} - All rights Reserved
                 </p>
            </nav>
        </footer>
    );
};

export default Footer;