import React, { useState, useEffect } from 'react';
import './ProductInfo.css';
import ProductImg from "../../../../assets/frstProduct.jpg"

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
                        <div className="slide">
                            <img src={ProductImg} alt="product" />
                        </div>
                        <div className="slide">
                            <img src={ProductImg} alt="product" />
                        </div>
                    </div>
                    <button onClick={goToPrevSlide} className="slider-button prev-button">
                        &lt;
                    </button>
                    <button onClick={goToNextSlide} className="slider-button next-button">
                        &gt;
                    </button>
                </div>
                <div className="info-right">
                    <h2 className="product-title">OBJECT/pendant</h2>
                    <div className="tabs-description">
                        <div className="tab-buttons">
                            <button class="button-description" onClick={() => setIsDescriptionActive(true)}>Discription</button>
                            <button class="button-care" onClick={() => setIsDescriptionActive(false)}>Care</button>
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
                    <div className="button-container">
                        <button className="add-cart">Add to cart</button>
                    </div>
                </div>
        </div>
    );
};

export default ProductInfo;
