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
import {getSeashellVariationsIndxBySlide} from "../../../../utils/getImageIndexInVariation";

const CartPickerPopUp = ({ popUpSlider, setPopUpSlider, currentSlide, currentVariationIndex, setCurrentSlide, isAddingAnimation, setShowPicker, currentOptions, product, productTitle, showPicker, initialSlide, images, addToCart, price, variationContainer }) => {
	const isSeashell = useMemo(() => !!product?.seashells?.length, [product]);

	const [quantity, setQuantity] = useState(1);
	const {state: {lang}} = useAPI();
	const [popUpSlide, setPopUpSlide] = useState(0)

	const currency = translations.product.currency[lang]

	useEffect(() => {
		if (!showPicker) setQuantity(1)
		if (showPicker) {
			console.log('isSeashell', isSeashell)
			if (isSeashell) {
				const neededIdx = getSeashellVariationsIndxBySlide(product?.seashells, currentSlide)
				setPopUpSlide(neededIdx)
				popUpSlider.slickGoTo(neededIdx)
			}
		}
	}, [showPicker])

	const slides = isSeashell ? images.map(item => item[0]) : images

	console.log('product', product)
	console.log('currentSlide', currentSlide)
	return (
		<div className={`cart__pop-up ${showPicker ? 'active' : ''}`}>
			<Cross className="cross" onClick={() => setShowPicker(false)}/>
			<h3 className="cart__pop-up-title">{productTitle}</h3>
			{isSeashell
				? <Sliders
					slider={popUpSlider}
					setSlider={setPopUpSlider}
					currentSlide={popUpSlide}
					setCurrentSlide={setPopUpSlide}
					slides={slides}
					initialSlide={0}
					seashells={product?.seashells?.length ? product?.seashells : null}
					isSeashell={isSeashell}
					isQuantityPicker
				/>
				: <div className="popup-image__container">
					<ProductImage
						className="popup-image"
						imageName={product?.variations?.[currentVariationIndex]?.images?.[0] || images?.[0]}
					/>
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
			<button className={`popup__add-to-card ${isAddingAnimation ? 'adding-animation' : ''}`} onClick={() => !isAddingAnimation && addToCart(quantity, popUpSlide)}>
				<CheckIcon/>
				<span>{translations.product.addToCart[lang]}</span>
			</button>
		</div>
	);
};

export default CartPickerPopUp;
