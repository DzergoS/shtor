import React, {useEffect, useMemo, useState} from 'react';
import './CartPickerPopUp.css'

import {ReactComponent as Cross} from "../../../../assets/cross.svg";
import Sliders from "../Sliders/Sliders";
import {isProductToSetVariationBySliding} from "../ProductInfo/filters";
import useAPI from "../../../../provider/useAPI";
import {DECREMENT_PRODUCT, DELETE_PRODUCT, INCREMENT_PRODUCT} from "../../../../provider/actions/cart";
import {translations} from "../../../../info";
import ProductImage from "../../../../ui-components/ProductImage";
import CheckIcon from "@mui/icons-material/Check";

const CartPickerPopUp = ({ popUpSlider, setPopUpSlider, currentSlide, currentVariationIndex, setCurrentSlide, isAddingAnimation, setShowPicker, currentOptions, product, productTitle, showPicker, initialSlide, images, addToCart, price, variationContainer }) => {
	const isSeashell = useMemo(() => !!product?.seashells?.length, [product]);

	const [quantity, setQuantity] = useState(1);
	const {state: {lang}} = useAPI();

	const currency = translations.product.currency[lang]

	useEffect(() => {
		if (!showPicker) setQuantity(1)
	}, [showPicker])

	console.log('product', product)
	console.log('currentSlide', currentSlide)
	console.log('currentVariationIndex', currentVariationIndex)
	return (
		<div className={`cart__pop-up ${showPicker ? 'active' : ''}`}>
			<Cross className="cross" onClick={() => setShowPicker(false)}/>
			<h3 className="cart__pop-up-title">{productTitle}</h3>
			{isSeashell
				? <Sliders
					slider={popUpSlider}
					setSlider={setPopUpSlider}
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
					slides={images}
					initialSlide={initialSlide}
					seashells={product?.seashells?.length ? product?.seashells : null}
					isSeashell={isSeashell}
					isQuantityPicker
				/>
				: <div className="popup-image__container">
					<ProductImage className="popup-image" imageName={product?.variations?.[currentVariationIndex]?.images?.[0] || images?.[0]}/>
				</div>
			}
			<div className="popup-quantity__container">
				<div className="popup-product__quantity-label">
					<button className="minus" onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
					{quantity}
					<button className="plus"  onClick={() => setQuantity(quantity + 1)}>+</button>
				</div>
				<div className="popup-price">{currency}{price * quantity}</div>
			</div>
			{variationContainer}
			<button className={`popup__add-to-card ${isAddingAnimation ? 'adding-animation' : ''}`} onClick={() => !isAddingAnimation && addToCart(quantity)}>
				<CheckIcon/>
				<span>{translations.product.addToCart[lang]}</span>
			</button>
		</div>
	);
};

export default CartPickerPopUp;
