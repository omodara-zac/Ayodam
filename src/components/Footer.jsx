
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-contact">
                <p className="footer-title">Contact Us</p>

                <p>
                    <a href="tel:+2348039133095">
                        <FaPhoneAlt className="phone-icon" />
                        +234 803 913 3095
                    </a>
                </p>

                <p>
                    <a href="tel:+2348038055181">
                        <FaPhoneAlt className="phone-icon" />
                        +234 803 805 5181
                    </a>
                </p>
            </div>

            <div className="footer-locations">
                <p className="footer-title">Locations</p>
                <p>Our mini-stores are located at:</p>
                <p> <FaMapMarkerAlt className="address-icon" />Igbagbo, Ibadan</p>
                <p> <FaMapMarkerAlt className="address-icon" />Adesete, Ibadan</p>
                <p> <FaMapMarkerAlt className="address-icon" />Wisdom, Ibadan</p>
            </div>

            <div className="footer-copyright">
                Copyright © 2026 - AYODAM PROSPERITY
            </div>
        </section>
    );
};

export default Footer;
