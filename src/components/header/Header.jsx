import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <div className="heading-content">
                    <div>
                        <h5>Hello I'm</h5>
                        <h1>Feras Haj Saleh</h1>
                        <h5 className="text-light">Frontend Developer</h5>
                    </div>
                    <CTA />
                </div>
                <img className="me-main" src={ME} alt="me" />

                <HeaderSocials />

                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
}
