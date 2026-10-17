
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [customers, setCustomers] = useState(0);
    const [experience, setExperience] = useState(0);
    const [satisfaction, setSatisfaction] = useState(0);

    useEffect(() => {
        const targets = [
            { setter: setCustomers, target: 150, delay: 0 },
            { setter: setExperience, target: 20, delay: 1200 },
            { setter: setSatisfaction, target: 100, delay: 2400 }
        ];

        const timers = [];

        targets.forEach(({ setter, target, delay }) => {
            const startTimer = setTimeout(() => {
                let count = 0;
                const step = Math.ceil(target / 50);

                const counter = setInterval(() => {
                    count = Math.min(count + step, target);
                    setter(count);

                    if (count >= target) {
                        clearInterval(counter);
                    }
                }, 30);

                timers.push(counter);
            }, delay);

            timers.push(startTimer);
        });

        return () => {
            timers.forEach(timer => {
                clearTimeout(timer);
                clearInterval(timer);
            });
        };
    }, []);

    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">AYODAM</h1>

                <p className="hero-description">
                    Supplying quality cement at competitive prices for projects big and small,
                    <span className="hero-desc-highlight">
                        {' '}with reliable service you can count on from foundation to finish.
                    </span>
                </p>
            </div>

            <div className="hero-buttons">
                <button className="hero-btn">
                    <a href="#business-section" className="hero-btn-link">
                        Our Businesses
                    </a>
                </button>

                <button className="hero-btn">
                    <a href="#outlets" className="hero-btn-link">
                        Outlets
                    </a>
                </button>
            </div>

            <div className="hero-display">
                <div className="hero-stat">
                    <h3>{customers}+</h3>
                    <p>Customers</p>

                </div>

                <span className='divide'></span>

                <div className="hero-stat">
                    <h3>{experience}+</h3>
                    <p>Years of Experience</p>
                </div>

                <span className='divide'></span>

                <div className="hero-stat">
                    <h3>{satisfaction}%</h3>
                    <p>Satisfaction</p>
                </div>
            </div>
        </section>

    );
};

export default Hero;
