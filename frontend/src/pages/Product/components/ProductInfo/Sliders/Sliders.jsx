import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import ArrowRight from 'assets/arrow-right.svg';
import ArrowLeft from 'assets/arrow-left.svg';
import './Sliders.css';
import ProductImage from "ui-components/ProductImage";
import {calculateIsBackWay} from "utils/calculateIsBackWay";

const NextArrow = (props) => (
	<button {...props} className="slider-button next-button">
		<img src={ArrowRight} alt="arrow-icon" />
	</button>
);

const PrevArrow = (props) => (
	<button {...props} className="slider-button prev-button">
		<img src={ArrowLeft} alt="arrow-icon" />
	</button>
);

const CustomDots = ({ slides, currentSlide, goToSlide }) => (
	<div>
		<ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
			{slides.map((slide, index) => (
				<li key={index} style={{ margin: '0 5px', cursor: 'pointer', opacity: currentSlide === index ? 1 : 0.5 }}>
					<button onClick={() => goToSlide(index)}>{index + 1}</button>
				</li>
			))}
		</ul>
	</div>
);

const Sliders = ({ slider, setSlider, sliderImages, initialSlide, setCurrentVariationIndex }) => {
	const slider1 = useRef(null);
	const [currentSlide, setCurrentSlide] = useState(initialSlide)
	useEffect(() => setSlider(slider1.current), []);

	const [animation, setAnimation] = useState({
		back: [],
		forth: [],
	})

	const startDotAnimation = (isBack) => {
		setAnimation(prevAnimation => ({
			...prevAnimation,
			[isBack ? 'back' : 'forth']: [...(isBack ? back : forth), 1]
		}))
		setTimeout(() => setAnimation(prevAnimation => ({
			...prevAnimation,
			[isBack ? 'back' : 'forth']: (isBack ? back : forth).slice(0, -1)
		})), 500)
	}

	const { back, forth } = animation

	const goToSlide = (e, slideIndex) => slider.slickGoTo(slideIndex)

	return (
		<>
			<Slider
				infinite
				speed={500}
				adaptiveHeight
				focusOnSelect
				slidesToShow={1}
				slidesToScroll={1}
				className="main-slider"
				beforeChange={(oldIndex, newIndex) => {
					let isBackWay;
					if (oldIndex > newIndex) isBackWay = true
					if (!oldIndex && newIndex === (sliderImages?.length - 1)) isBackWay = true
					if (!newIndex && oldIndex === (sliderImages?.length - 1) ) isBackWay = false

					if (oldIndex !== newIndex) startDotAnimation(isBackWay);
					setCurrentSlide(newIndex)
					setCurrentVariationIndex && setCurrentVariationIndex(newIndex)
				}}
				nextArrow={<NextArrow />}
				prevArrow={<PrevArrow />}
				initialSlide={initialSlide}
				ref={slider1}
			>
				{sliderImages?.map((imageName, index) => (
					<ProductImage key={index} imageName={imageName} alt={`Slide ${index + 1}`}/>
				))}
			</Slider>
			<div className={`dots-slider ${back.length ? 'back-animation' : forth.length ? 'forth-animation' : ''}`}>
				<div className="dots-slider__dot back-hidden" onClick={(e) => goToSlide(e,currentSlide - 1)}/>
				<div className="dots-slider__dot back-color" onClick={(e) => goToSlide(e, currentSlide - 1)}/>
				<div className="dots-slider__dot active"/>
				<div className="dots-slider__dot forth-color" onClick={(e) => goToSlide(e, currentSlide + 1)}/>
				<div className="dots-slider__dot forth-hidden" onClick={(e) => goToSlide(e, currentSlide + 1)}/>
			</div>
			{window.innerWidth > 548
				? <div className="thumbnail-slider">
					{sliderImages?.map((imageName, index) => (
						<div className="thumbnail-slider__item" key={index} onClick={() => index !== currentSlide && slider.slickGoTo(index)}>
							<ProductImage imageName={imageName} alt={`Thumbnail ${index + 1}`} />
						</div>
					))}
				</div>
				: ""}
		</>
	);
};

export default Sliders;
