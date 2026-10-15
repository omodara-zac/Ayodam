import { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
    const aboutRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`about ${isVisible ? 'about-visible' : ''}`}
            ref={aboutRef}
        >
            <div className="about-image-container">
                <img
                    src="/images/trucks.jpg"
                    alt="AYODAM trucks"
                    className="about-image"
                />
            </div>

            <div className="about-content">
                <h2 className="about-title">About Us</h2>

                <p className="about-description">
                      AYODAM PROSPERITY is a business specialising in the sale
                    and distribution of cement, the supply of quality
                    building blocks, and the sale of land for residential,
                    commercial, and investment purposes.
                </p>

                <p className="about-description">
                    We supply cement in bulk to retailers and businesses
                    at competitive prices, while our mini stores provide
                    convenient access to cement for individual customers
                    and smaller construction projects. We also supply
                    durable building blocks to meet a variety of
                    construction needs.
                </p>

                <p className="about-description">
                     In addition to building materials, AYODAM PROSPERITY offers land
                    for sale to individuals, property developers, and
                    investors. Whether you need cement for your business,
                    building materials for your project, or land for your
                    next investment, AYODAM PROSPERITY is committed to reliable
                    service, competitive pricing, and quality you can
                    count on.
                </p>
            </div>
        </section>
    );
};

export default About;