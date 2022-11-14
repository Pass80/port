import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdContactMail } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

export default function Nav() {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a
                href="#"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => setActiveNav('#experience')}
                className={activeNav === '#experience' ? 'active' : ''}
            >
                <BiBook />
            </a>
            <a
                href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'active' : ''}
            >
                <CgWebsite />
            </a>
            <a
                href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}
            >
                <MdContactMail />
            </a>
        </nav>
    );
}
