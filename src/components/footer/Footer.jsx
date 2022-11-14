import React from 'react';
import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

export default function Footer() {
    return (
        <footer>
            <a href="#" className="footer__logo">
                Feras
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
            <div className="footer__socials">
                <a href="https://facebook.com">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com">
                    <FiInstagram />
                </a>
                <a href="https://twitter.com">
                    <IoLogoTwitter />
                </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Feras. All rights reserved</small>
            </div>
        </footer>
    );
}
