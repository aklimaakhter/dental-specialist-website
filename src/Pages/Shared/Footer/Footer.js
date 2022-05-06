import React from 'react';
import copyrightIcon from '../../../images/icon/copyright icon.png'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-black text-white p-8'>
            <p><span>copyright @ {year}</span></p>
        </footer>
    );
};

export default Footer;