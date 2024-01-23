import React from 'react';

import './CartTotal.css'
import useAPI from "provider/useAPI";
import isMobile from "utils/isMobile";
import {translations} from "info";

const CartTotal = (props) => {
	const {state: {cart, lang}} = useAPI();

	

	return (
		<div className="cart-total">
			{!isMobile
				? <>
					<h4 className="cart-total__subtotal">{translations.cart.subTotal[lang]}</h4>
					<p className="cart-total__total">{translations.cart.total[lang]}: <span>{translations.product.currency[lang]}{ props.sumOfPrices }</span></p>
				</>
				: <>
					<h4 className="cart-total__subtotal">{translations.cart.subTotal[lang]} <span>{translations.product.currency[lang]}{ props.sumOfPrices }</span></h4>
					<p className="cart-total__total">{translations.cart.deliveryAlert[lang]}</p>
				</>
			}
			<button className="cart-total__check-out" onClick={props.checkoutOnClick}>{translations.cart.checkOut[lang]}</button>

		</div>

	);
};

export default CartTotal;
