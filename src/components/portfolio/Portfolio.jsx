import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG9 from '../../assets/portfolio9.png';
import IMG7 from '../../assets/portfolio7.png';

const data = [
    {
        id: 3,
        image: IMG3,
        title: 'Memory Game',
        github: 'https://github.com/Pass80/Memory-game.git',
        demo: 'https://pass80.github.io/Memory-game/',
    },
    {
        id: 7,
        image: IMG7,
        title: 'Rock-Paper-Scissors',
        github: 'https://github.com/Pass80/Rock-Paper-Scissors.git',
        demo: 'https://pass80.github.io/Rock-Paper-Scissors/',
    },
    {
        id: 1,
        image: IMG1,
        title: 'Weather Forecast',
        github: 'https://github.com/Pass80/weather-app2.git',
        demo: 'https://weather-app22222.herokuapp.com/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'Online Shop',
        github: 'https://github.com/Pass80/onlineshop.git',
        demo: 'https://online-shop-eb79a.web.app/',
    },

    {
        id: 4,
        image: IMG4,
        title: 'Movie Search Engine',
        github: 'https://github.com/Pass80/movies-search-engine2.git',
        demo: ' https://movies-search-engine2.herokuapp.com/',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Food Delivery (Layout)',
        github: 'https://github.com/Pass80/Omnifood.git',
        demo: 'https://pass80.github.io/Omnifood/',
    },
    {
        id: 6,
        image: IMG9,
        title: 'Designer Project (Layout)',
        github: 'https://github.com/Pass80/Designer-challenge.git',
        demo: 'https://pass80.github.io/Designer-challenge/',
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {data.map(({ id, image, title, github, demo }) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a
                                    href={github}
                                    className="btn"
                                    target="_blank"
                                >
                                    Github
                                </a>
                                <a
                                    href={demo}
                                    className="btn btn-primary"
                                    target="_blank"
                                >
                                    Live Demo
                                </a>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
