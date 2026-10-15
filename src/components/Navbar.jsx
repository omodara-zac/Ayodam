import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/images/ayodam-logo.jpeg" alt="AYODAM logo" />
            </div>

            <div className="navbar-links">
                <a href="#products">Products</a>
                <a href="#contact">Contact Us</a>
            </div>
        </nav>
    );
};

export default Navbar;