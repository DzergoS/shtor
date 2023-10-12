import React from 'react';
import './Scroller.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollImg from "assets/frstProduct.jpg"

const Scroller = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <div className="scroller-container">
            <h4 className="scroller-title">You also may like</h4>
            <Slider class="" {...settings}>
                <div className="product-item">
                    <img className='product-img' src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img className='product-img' src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img className='product-img' src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
            </Slider>
        </div>
    );
};

export default Scroller;
