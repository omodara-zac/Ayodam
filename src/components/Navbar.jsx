import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src="/images/ayodam-logo.jpeg" alt="AYODAM logo" />
                </Link>
            </div>

            <div className="navbar-links">
                <a href="/#outlets">Outlets</a>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>

    );
};

export default Navbar;