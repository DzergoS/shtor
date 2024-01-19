import React, {useState} from 'react';
import './CartPickerPopUp.css'

import {ReactComponent as Cross} from "../../../../assets/cross.svg";
import Sliders from "../Sliders/Sliders";
import {isProductToSetVariationBySliding} from "../ProductInfo/filters";

const CartPickerPopUp = ({ currentOptions, product, showPicker, setShowPicker }) => {
	const [slider, setSlider] = useState()
	console.log('currentOptions', currentOptions)

	return (
		<div className="cart__pop-up">
			<Cross className="cross"/>
			<h3 className="cart__pop-up-title"></h3>
			<Sliders
				slider={slider}
				setSlider={setSlider}
				// slides={images}
				// initialSlide={initialSlide}
				// setCurrentVariationIndex={isProductToSetVariationBySliding(product) ? setCurrentVariationIndex : () => {}}
			/>
			<div className="quantity__container">
				<div className="quantity">
					<button>-</button>
				</div>
			</div>
		</div>
	);
};

export default CartPickerPopUp;
