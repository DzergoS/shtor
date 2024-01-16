import React from 'react';
import ProductImage from "ui-components/ProductImage";
import './ThumbNails.css'

const ThumbNails = ({slides, goToSlide}) => {
	return window.innerWidth > 768
		? <div className="thumbnail-slider">
			{slides?.map((imageName, index) => (
				<div className="thumbnail-slider__item" key={index} onClick={() => goToSlide(index)}>
					<ProductImage imageName={imageName} alt={`Thumbnail ${index + 1}`} />
				</div>
			))}
		</div>
		: ""
};

export default ThumbNails;
