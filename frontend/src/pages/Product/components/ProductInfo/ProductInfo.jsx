import React, { useState, useEffect } from 'react';
import './ProductInfo.css';
import ProductImg from "../../../../assets/frstProduct.jpg"
import ArrowLeft from "../../../../assets/arrow-left.svg"
import ArrowRight from "../../../../assets/arrow-right.svg"

const ProductInfo = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    };

    const updateSlider = () => {
        const slider = document.querySelector('.slider');
        const translateX = -currentIndex * 100 + '%';
        slider.style.transform = `translateX(${translateX})`;
    };

    useEffect(() => {
        updateSlider();
    }, [currentIndex]);

    const [isDescriptionActive, setIsDescriptionActive] = useState(true);

    return (
        <div className="product-info">
            <div className="slider-container">
                <div className="slider">
                    <div className="slide"><img src={ProductImg} alt="product" /></div>
                    <div className="slide"><img src={ProductImg} alt="product" /></div>
                    <div className="slide"><img src={ProductImg} alt="product" /></div>
                    <div className="slide"><img src={ProductImg} alt="product" /></div>
                </div>
                <button onClick={goToPrevSlide} className="slider-button prev-button">
                    <img src={ArrowLeft}  alt="arrow-icon"/>
                </button>
                <button onClick={goToNextSlide} className="slider-button next-button">
                    <img src={ArrowRight} alt="arrow-icon"/>
                </button>
            </div>
            <div className="info-right">
                <h2 className="product-title">OBJECT/pendant</h2>
                <div className="tabs-description">
                    <div className="tab-buttons">
                        <button className={ isDescriptionActive ? "tab-button active" : "tab-button" } onClick={() => setIsDescriptionActive(true)}>Discription</button>
                        {/*<button className={ "tab-button" + isDescriptionActive ? " active" : "" } onClick={() => setIsDescriptionActive(true)}>Discription</button>*/}
                        {/*<button className={ `tab-button ${isDescriptionActive ? " active" : ""}`} onClick={() => setIsDescriptionActive(true)}>Discription</button>*/}
                        <button className={ isDescriptionActive ? "tab-button" : "tab-button active"} onClick={() => setIsDescriptionActive(false)}>Care</button>
                    </div>
                    <div className="tab-content">
                        {isDescriptionActive ? (
                            <div>
                                <ul>
                                    <li>
                                        Handcrafted. Each piece is unique.
                                    </li>
                                    <li>
                                        Wood.
                                    </li>
                                    <li>
                                        Black waxed cord included
                                    </li>
                                    <li>
                                        Size: 9,5x4 cm
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div>
                                <ul>
                                    <li>
                                        Care me
                                    </li>
                                    <li>
                                        care off
                                    </li>
                                    <li>
                                       care add
                                    </li>
                                    <li>
                                        care out
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <p className="price">$80</p>
                <button className="add-cart button-container">Add to cart</button>
            </div>
        </div>
    );
};

export default ProductInfo;
