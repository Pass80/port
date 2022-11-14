import React from 'react';
import './About.css';
import ME from '../../assets/me1.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
export default function About() {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about-image" />
                    </div>
                </div>
                <div className="about__content">
                    {/* <div className="about__cards">
                        <article className="about_card">
                            <FaAward className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                        <article className="about_card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>
                    </div> */}
                    <p>
                        Hello. My Name is Feras Haj Saleh. I am a Frontend
                        Developer, but still exploring other technologies and
                        frameworks that catch my interest!. I'm excited to make
                        the leap and continue refining my skills with the right
                        company if you're looking for developer to add to your
                        team, I'd love to hear from you.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
}
