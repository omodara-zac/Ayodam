
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
                <div className="footer-location1">
                <p className="footer-title2">Locations</p>
                <p>Our mini-stores are located at:</p>
                <p><FaMapMarkerAlt className="address-icon" />Adesete<span className="ibadan">, Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Igbagbo<span className="ibadan">, Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Wisdom<span className="ibadan">, Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Araoyo<span className="ibadan">, Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Ladojo<span className="ibadan">, Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Eniosa<span className="ibadan">, Ibadan</span></p>
                    <p className="see-more"><a href="#outlets" className="see-more-link">        View All Outlet Locations →
</a></p>
                </div>

                <div className="footer-location2">
                  <p><FaMapMarkerAlt className="address-icon" />Abudoro, Elekuru, <span className="ibadan">Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Elewuro, <span className="ibadan">Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Pakiti, <span className="ibadan">Ibadan</span></p>
                     <p><FaMapMarkerAlt className="address-icon" />Olooyo, Diamond Estate, <span className="ibadan">Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Olanla, Iyana One, <span className="ibadan">Ibadan</span></p>
                    <p><FaMapMarkerAlt className="address-icon" />Opposite Olorunda Police Station.</p>
                    
            </div>
            </div>
          
            <div className="footer-copyright">
                Copyright © 2026 - AYODAM PROSPERITY
            </div>
        </section>
    );
};

export default Footer;
