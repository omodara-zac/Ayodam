import { useEffect, useRef } from "react";
import "./Outlet.css";

const Outlets = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("outlets-visible");
                    observer.unobserve(section);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const locations = [
        "Adesete, Akobo–Ojurin–Olorunda Abaa Road",
        "Igbagbo, Akobo–Ojurin–Olorunda Abaa Road",
        "Wisdom, Akobo–Ojurin–Olorunda Abaa Road",
        "Olooyo, Diamond Estate, Akobo–Ojurin–Olorunda Abaa Road",
        "Opposite Olorunda Police Station, Akobo–Ojurin–Olorunda Abaa Road",
        "Eniosa, Akobo–Ojurin–Olorunda Abaa Road",
        "Abudoro, Elekuru, Akobo–Ojurin–Olorunda Abaa Road",
        "Ladojo, Akobo–Ojurin–Olorunda Abaa Road",
        "Araoyo, Akobo–Ojurin–Olorunda Abaa Road",
        "Elewuro, Akobo–Ojurin–Olorunda Abaa Road",
        "Pakiti, Akobo–Ojurin–Olorunda Abaa Road",
        "Olanla, Akobo–Ojurin–Olorunda Abaa Road",
    ];

    return (
        <section id="outlets" className="outlets-section" ref={sectionRef}>
            <div className="outlets-content outlets-from-left">
                <p className="outlets-subtitle">OUR PRESENCE</p>

                <h2 className="outlets-title">
                    Find an <span>AYODAM</span> Outlet Near You
                </h2>

                <p className="outlets-description">
                    AYODAM PROSPERITY is committed to making quality cement
                    and building materials accessible to customers across
                    Ibadan. Visit any of our mini-stores for your cement needs,
                    whether for personal projects or business.
                </p>

                <h3 className="outlets-list-title">Our Outlet Locations</h3>

                <div className="outlets-list">
                    {locations.map((location, index) => (
                        <p className="outlet-location" key={index}>
                            <span className="outlet-location-dot"></span>
                            {location}
                        </p>
                    ))}
                </div>
            </div>

            <div className="outlets-image-wrapper outlets-from-right">
                <img
                    src="/images/truck of cement.jpg"
                    alt="AYODAM PROSPERITY cement outlet"
                    className="outlets-image"
                />

                <div className="outlets-image-caption">
                    <h3>AYODAM PROSPERITY</h3>
                    <p>Your Trusted Building Materials Partner</p>
                </div>
            </div>
        </section>
    );
};

export default Outlets;