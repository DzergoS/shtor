import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import ArrowRight from '../../../../../assets/arrow-right.svg';
import ArrowLeft from '../../../../../assets/arrow-left.svg';
import getUrlByImageName from '../../../../../utils/getUrlByImageName';
import './Sliders.css';

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

const Sliders = ({ sliders, setSliders, sliderImages, initialSlide, setCurrentVariationIndex }) => {
	const slider1 = useRef(null);
	const slider2 = useRef(null);
	const slider3 = useRef(null);

	useEffect(() => {
		setSliders({
			nav1: slider1.current,
			nav2: slider2.current,
			nav3: slider3.current,
		})
	}, []);

	const { nav1, nav2, nav3 } = sliders;

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
				beforeChange={(oldIndex, newIndex) => setCurrentVariationIndex(newIndex)}
				nextArrow={<NextArrow />}
				prevArrow={<PrevArrow />}
				initialSlide={initialSlide}
				asNavFor={nav3}
				ref={slider1}
			>
				{sliderImages?.map((slide, index) => (
					<img key={index} src={getUrlByImageName(slide)} alt={`Slide ${index + 1}`} />
				))}
			</Slider>
			{sliderImages?.length > 1
				? <Slider
					centerMode
					speed={500}
					infinite
					focusOnSelect
					slidesToShow={sliderImages?.length > 2 ? 3 : 2}
					className={`dots-slider ${sliderImages?.length === 2 ? 'double-items' : ''}`}
					asNavFor={nav1}
					initialSlide={initialSlide}
					ref={slider2}
				>
					{sliderImages?.map((_, index) => (
						<div key={index} className="custom-slick-dot" />
					))}
				</Slider>
				: ""
			}
			{window.innerWidth > 548
				? <Slider
					infinite={false}
					speed={500}
					focusOnSelect
					slidesToScroll={1}
					initialSlide={initialSlide}
					asNavFor={nav2}
					className="thumbnail-slider"
					ref={slider3}
					slidesToShow={sliderImages?.length}
				>
					{sliderImages?.map((slide, index) => (
						<div key={index}>
							<img src={getUrlByImageName(slide)} alt={`Thumbnail ${index + 1}`} />
						</div>
					))}
				</Slider>
				: ''
			}
		</>
	);
};

export default Sliders;
