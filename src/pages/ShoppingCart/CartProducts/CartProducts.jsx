import React from 'react';
import useAPI from "provider/useAPI";
import {
	DECREMENT_PRODUCT,
	DELETE_PRODUCT,
	INCREMENT_PRODUCT
} from "provider/actions/cart";

import {ReactComponent as Cross} from "assets/cross.svg";
import cartProduct from 'assets/cart-product.png'

import './CartProducts.css'
import {isMobile} from "../../../utils/isMobile";

const MINUS = 'MINUS'
const PLUS = 'PLUS'

const CartProducts = () => {

	const {state: {cart}, dispatch} = useAPI();

	const onChangeQuantity = (_id, sign) => dispatch({
		type: sign === 'MINUS' ? DECREMENT_PRODUCT : INCREMENT_PRODUCT,
		payload: _id,
	});

	const deleteProductFromCart = (_id) => dispatch({
		type: DELETE_PRODUCT,
		payload: _id,
	})


	return (
		<div className="cart-products">
			{cart.map((item, index) => (
				<div className="cart-product" key={index}>
					<img
						// src={item.src}
						src={cartProduct}
						alt="product" className="cart-product__img"/>
					<div className="cart-product-desc">
						{!isMobile
							? <>
								<h4 className="cart-product__title">{item.title}</h4>
								<p className="cart-product__desc">{item.desc}</p>
								<div className="cart-product__quantity">
									quantity
									<div className="cart-product__quantity-label">
										<button className="minus" onClick={() => onChangeQuantity(item._id, MINUS)}>-</button>
										{item.quantity}
										<button className="plus"  onClick={() => onChangeQuantity(item._id, PLUS)}>+</button>
									</div>
								</div>
								<div className="price">{`$${item.price}`}</div>
							</>
							: <>
								<div className="top">
									<h4 className="cart-product__title">{item.title}</h4>
									<p className="cart-product__desc">{item.desc}</p>
								</div>
								<div className="bottom">
									<div className="cart-product__quantity">
										quantity
										<div className="cart-product__quantity-label">
											<button className="minus" onClick={() => onChangeQuantity(item._id, MINUS)}>-</button>
											{item.quantity}
											<button className="plus"  onClick={() => onChangeQuantity(item._id, PLUS)}>+</button>
										</div>
									</div>
									<div className="price">{`$${item.price}`}</div>
								</div>
							</>}
						<Cross className="cross" onClick={() => deleteProductFromCart(item._id)}/>
					</div>
				</div>
			))}
		</div>
	);
};

export default React.memo(CartProducts);
