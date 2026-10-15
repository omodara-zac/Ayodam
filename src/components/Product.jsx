
import { useEffect, useRef, useState } from "react";
import "./Product.css";

const Product = () => {
    const productRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2
            }
        );

        if (productRef.current) {
            observer.observe(productRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className={`product ${isVisible ? "product-visible" : ""}`}
            ref={productRef}
        >
            <div className="product-textarea">
                <h2 className="product-title">Products</h2>

                <p>
                    AYODAM PROSPERITY supplies quality cement for construction projects of all sizes,
                     from residential buildings to large commercial developments.
                </p>

                <p>
                    We sell <strong>Dangote Cement, BUA Cement, Mangal Cement, and Elephant Cement</strong>,
                     giving customers a range of options to suit their building requirements.
                </p>

                <p>
                    Whether you need cement in bulk for your business or smaller quantities for personal construction,
                     we offer competitive prices, convenient access, and dependable customer service.
                    Contact us today to enquire about availability and place your order.
                </p>

            </div>

            <div className="picture-area">
                <img
                    src="/images/ayodam-cement-stack.jpg"
                    alt="Lafarge Elephant, Dangote, Mangal and BUA cement bags"
                    className="product-image"
                />
            </div>
        </section>
    );
};

export default Product;
