import React from 'react';
import ProductImage from "ui-components/ProductImage";
import './ThumbNails.css'

const ThumbNails = ({slides, goToSlide, currentSlide, isQuantityPicker}) => {
	return window.innerWidth > 768 || isQuantityPicker
		? <div className="thumbnail-slider">
			{slides?.map((imageName, index) => {
				if (!isQuantityPicker && (
					(Math.abs(index - currentSlide) <= 3) ||
					currentSlide < 4 && (index < 7) ||
					currentSlide > (slides.length - 4) && (index > (slides.length - 8))
				) || (
					isQuantityPicker && (
					(Math.abs(index - currentSlide) <= 2) ||
					!currentSlide && (index < 5) ||
					currentSlide === 1 && (index < 5) ||
					currentSlide === (slides.length - 1) && (index > (slides.length - 6)) ||
					currentSlide === (slides.length - 2) && (index > (slides.length - 7))
					))) {
					return (
						<div className="thumbnail-slider__item" key={index} onClick={() => goToSlide(index)}>
							<ProductImage imageName={imageName} alt={`Thumbnail ${index + 1}`} />
						</div>
					);
				} else {
					return null; // Skip rendering if isQuantityPicker and element is not within 2 indexes of the currentSlide
				}
			})}
		</div>
		: ""
};

export default ThumbNails;
