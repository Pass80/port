import React from 'react';
import './Experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js-format.png';
import css1 from '../../assets/css.png';

export default function Experience() {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">
                                    Experienced
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>javaScript</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Git</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Github</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>UI/UX</h4>
                                <small className="text-light">
                                    Intermediate
                                </small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}