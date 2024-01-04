import React, {useMemo, useState} from 'react';
import './Scroller.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ScrollImg from "assets/frstProduct.jpg"
import useAPI from "../../../../provider/useAPI";
import {isMobile} from "../../../../utils/isMobile";
import ProductImage from "../../../../ui-components/ProductImage";
import {getProductName, getProductImageName} from "../../../../utils/getProduct";

const Scroller = () => {
    const {state: { products, lang }} = useAPI();
    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
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

    const shuffledProducts = useMemo(() => {
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        return shuffleArray([...products]);
    }, [products]);

    return (
        <div className="scroller-container">
            <h4 className="scroller-title">You also may like</h4>
            <Slider class="" {...settings}>
                {shuffledProducts?.slice(0, 8).map((product, index) => (
                    <div key={index} className="product-item">
                        <ProductImage className='product-img' imageName={getProductImageName(product)}/>
                        <p className='scroller-subtitle'>{product.group}/{getProductName(product, lang)}</p>
                    </div>
                ))}
            </Slider>
            <div className="progress-bar__container">
                <div className="progress-bar" style={{left: `${(currentIndex % 8) * 12.5}%`}}/>
            </div>
        </div>
    );
};

export default Scroller;
