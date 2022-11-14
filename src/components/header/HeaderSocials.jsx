import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

export default function HeaderSocials() {
    return (
        <div className="header__socials">
            <a
                href="http://https://www.linkedin.com/in/feras-haj-saleh-49a27892/"
                target="_blank"
            >
                <BsLinkedin />
            </a>
            <a
                href="http://https://github.com/Pass80?tab=repositories"
                target="_blank"
            >
                <FaGithub />
            </a>
            <a href="http://facebook.com" target="_blank">
                <AiOutlineTwitter />
            </a>
        </div>
    );
}
