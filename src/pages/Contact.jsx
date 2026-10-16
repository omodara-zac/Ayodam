import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import "./Contact.css";

const Contact = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("contact-visible");
                    observer.unobserve(section);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    const locations = [
        "Adesete, Ibadan",
        "Igbagbo, Ibadan",
        "Wisdom, Ibadan",
        "Olooyo, Diamond Estate, Ibadan",
        "Opposite Olorunda Police Station",
        "Eniosa, Ibadan",
        "Abudoro, Elekuru, Ibadan",
        "Ladojo, Ibadan",
        "Araoyo, Ibadan",
        "Elewuro, Ibadan",
        "Pakiti, Ibadan",
        "Olanla, Iyana One, Ibadan",
    ];

    return (
        <section
            id="contact"
            className="contact-section"
            ref={sectionRef}
        >
            <div className="contact-container">
                <div className="contact-heading contact-from-left">
                    <p className="contact-subtitle">GET IN TOUCH</p>

                    <h2 className="contact-title">
                        Contact <span>AYODAM</span>
                    </h2>

                    <p className="contact-description">
                        Need cement, building materials, or information about
                        our services? Contact AYODAM PROSPERITY today.
                        Our team is ready to assist with your enquiries.
                    </p>
                </div>


                <div className="contact-options contact-from-right">
                    <a
                        href="https://wa.me/2348039133095"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card whatsapp-card"
                    >
                        <div className="contact-card-icon">
                            <i className="bi bi-whatsapp"></i>
                        </div>
                        <div className="contact-card-text">
                            <h3>WhatsApp</h3>
                            <p>+234 803 913 3095</p>
                            <span>Chat with us →</span>
                        </div>
                    </a>

                    <a
                        href="tel:+2348039133095"
                        className="contact-card call-card"
                    >
                        <div className="contact-card-icon">
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="contact-card-text">
                            <h3>Call Us</h3>
                            <p>+234 803 913 3095</p>
                            <span>Call this number →</span>
                        </div>
                    </a>

                    <a
                        href="https://wa.me/2348038055181"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card whatsapp-card"
                    >
                        <div className="contact-card-icon">
                            <i className="bi bi-whatsapp"></i>
                        </div>
                        <div className="contact-card-text">
                            <h3>WhatsApp</h3>
                            <p>+234 803 805 5181</p>
                            <span>Chat with us →</span>
                        </div>
                    </a>

                    <a
                        href="tel:+2348038055181"
                        className="contact-card call-card"
                    >
                        <div className="contact-card-icon">
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="contact-card-text">
                            <h3>Call Us</h3>
                            <p>+234 803 805 5181</p>
                            <span>Call this number →</span>
                        </div>
                    </a>
                </div>


                <div className="contact-locations contact-from-left">
                    <h3 className="contact-locations-title">
                        Our Outlet Locations
                    </h3>

                    <p className="contact-locations-description">
                        Find an AYODAM outlet in Ibadan near you.
                    </p>

                    <div className="contact-location-grid">
                        {locations.map((location, index) => (
                            <div
                                className="contact-location"
                                key={index}
                            >
                                <span className="contact-location-dot"></span>
                                <span>{location}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact-back-home">
                    <Link to="/">
                        ← Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Contact;
