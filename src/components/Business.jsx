
import { useEffect, useRef, useState } from "react";
import "./Business.css";

const Business = () => {
    const businessRef = useRef(null);
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

        if (businessRef.current) {
            observer.observe(businessRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="business-section"
            className={`business-section ${isVisible ? "business-visible" : ""}`}
            ref={businessRef}
        >
            <div className="business">
                <h2>Our <span className="business-highlight">Businesses</span></h2>
                <p>
                    AYODAM PROSPERITY supplies quality cement and building blocks for every construction need.
                </p>
                <p>
                    We also offer land for residential and commercial purposes.
                </p>
            </div>

            <div className="business-image-container">
                <div className="business-image">
                    <img src="/images/cements.jpg" alt="Cement supply" />
                    <div className="business-image-text">
                        <h3>Cement Supply</h3>
                        <p>Quality cement at competitive prices<span className="trust"> you can trust</span>.</p>
                        <a
                            className="business-button"
                            href="https://wa.me/2348039133095"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-whatsapp"></i>
                            Make enquiry
                        </a>
                    </div>
                </div>

                <div className="business-image">
                    <img src="/images/blocks.jpg" alt="Building blocks" />
                    <div className="business-image-text">
                        <h3>Building Blocks</h3>
                        <p>Durable blocks for your construction needs.</p>
                        <a
                            className="business-button"
                            href="https://wa.me/2348039133095"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-whatsapp"></i>
                            Make enquiry
                        </a>
                    </div>
                </div>

                <div className="business-image">
                    <img src="/images/land-for-sale.jpg" alt="Land for sale" />
                    <div className="business-image-text">
                        <h3>Land for Sale</h3>
                        <p>Land for residential and commercial purposes.</p>
                        <a
                            className="business-button"
                            href="https://wa.me/2348039133095"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-whatsapp"></i>
                            Make enquiry
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Business;
