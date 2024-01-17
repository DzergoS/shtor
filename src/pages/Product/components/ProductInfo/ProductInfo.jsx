import React, { useState, useEffect } from 'react';
import './ProductInfo.css';
import ProductImg from "../../../../assets/frstProduct.jpg"
import ArrowLeft from "../../../../assets/arrow-left.svg"
import ArrowRight from "../../../../assets/arrow-right.svg"
import CartPopup from 'ui-components/CartPopup';
import { useCart } from 'react-use-cart';
import { useParams } from 'react-router-dom';

const macap = [ {
    id: 1,
    category: 'OBERIH',
    title: 'глиняне намисто',
    price: 2800,
    quantity: 10,
    img: '/img/product1.png'
  }, {
    id: 2,
    category: 'OBERIH',
    title: 'підвіс гребінь',
    price: 3000,
    quantity: 10,
    img: '/img/product2.png',
    variations: ['/img/frstProduct.jpg', '/img/product2.png', '/img/product3.png', '/img/product4.png', '/img/product1.png', '/img/product2.png'],
    type: ['Silver Chain', 'Silver Orbit']
  }, {
    id: 3,
    category: 'OBERIH',
    title: 'автентичні сережки',
    price: 2500,
    quantity: 10,
    img: '/img/product3.png',
    variations: ['/img/frstProduct.jpg', '/img/product2.png', '/img/product3.png', '/img/product4.png', '/img/product1.png', '/img/product2.png'],
    type: ['Silver Chain', 'Silver Orbit']
  }, {
    id: 4,
    category: 'NATURE',
    title: 'підвіс мушля',
    price: 2000,
    quantity: 10,
    img: '/img/product4.png'
  }, {
    id: 5,
    category: 'NATURE',
    title: 'гребінь для волосся',
    price: 2000,
    quantity: 10,
    img: '/img/product5.png',
    variations: ['/img/frstProduct.jpg', '/img/product2.png', '/img/product3.png', '/img/product4.png', '/img/product1.png', '/img/product2.png'],
    type: ['Silver Chain', 'Silver Orbit']
  }, {
    id: 6,
    category: 'NATURE',
    title: 'гребінь для волосся',
    price: 2500,
    quantity: 10,
    img: '/img/product6.png'
  },
]


const ProductInfo = () => {

    const {
        addItem
      } = useCart();

    const { title } = useParams()
    const [open, setOpen] = useState(false);
    const [productItem, setProductItem] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
      
    useEffect(() => {
        setProductItem(macap.find(res => res.title === title))
    }, [title])

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
                    <div className="slide"><img src={productItem.img} alt="product" /></div>
                    <div className="slide"><img src={productItem.img} alt="product" /></div>
                    <div className="slide"><img src={productItem.img} alt="product" /></div>
                    <div className="slide"><img src={productItem.img} alt="product" /></div>
                </div>
                <button onClick={goToPrevSlide} className="slider-button prev-button">
                    <img src={ArrowLeft}  alt="arrow-icon"/>
                </button>
                <button onClick={goToNextSlide} className="slider-button next-button">
                    <img src={ArrowRight} alt="arrow-icon"/>
                </button>
            </div>

            <div className="info-right">
                <h2 className="product-title">{productItem.title}</h2>
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
                <p className="price">${productItem.price}</p>
                
                <button className="add-cart button-container" onClick={() => {handleOpen(); addItem(productItem)}}>Add to cart</button>
            </div>
            
            {/* cart pop up */}
            <CartPopup 
                ProductImg={ProductImg}
                handleClose={handleClose}
                open={open}
                productItem={productItem}
            />
            
        </div>
    );
};

export default ProductInfo;
