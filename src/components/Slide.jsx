
import "./Slide.css";

const logos = [
    { src: "/images/dangote logo.png", alt: "Dangote" },
    { src: "/images/larfarge logo1.png", alt: "Lafarge" },
    { src: "/images/Mangal.jpg", alt: "Mangal" },
    { src: "/images/BUA-logo.jpeg", alt: "BUA Group" }
];

const Slide = () => {
    return (
        <div className="slide">
            <div className="slide-track">
                {[0, 1, 2].map((setIndex) => (
                    <div
                        className="slide-set"
                        key={setIndex}
                        aria-hidden={setIndex !== 0}
                    >
                        {logos.map((logo) => (
                            <div className="slide-item" key={logo.src}>
                                <img src={logo.src} alt={setIndex === 0 ? logo.alt : ""} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide;
