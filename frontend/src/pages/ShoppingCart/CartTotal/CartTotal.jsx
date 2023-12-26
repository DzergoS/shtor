import React from 'react';

import './CartTotal.css'
import useAPI from "../../../provider/useAPI";
import {isMobile} from "../../../utils/isMobile";

const CartTotal = () => {
	const {state: {cart}} = useAPI();
	return (
		<div className="cart-total">
			{!isMobile
				? <>
					<h4 className="cart-total__subtotal">Subtotal</h4>
					<p className="cart-total__total">Total <span>${cart[0].price}</span></p>
				</>
				: <>
					<h4 className="cart-total__subtotal">Subtotal <span>${cart[0].price}</span></h4>
					<p className="cart-total__total">Shopping,taxes and discount codes calculated at checkout.</p>
				</>
			}
			<button className="cart-total__check-out">Check Out</button>
		</div>
	);
};

export default CartTotal;
