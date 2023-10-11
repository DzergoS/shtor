import React from 'react';
import useAPI from "provider/useAPI";
import {
	DECREMENT_PRODUCT,
	DELETE_PRODUCT,
	INCREMENT_PRODUCT
} from "provider/actions/cart";

import {ReactComponent as Cross} from "assets/cross.svg";
import cartProduct from 'assets/cart-product.png'

import './ShoppingCart.css'

const MINUS = 'MINUS'
const PLUS = 'PLUS'

const ShoppingCart = () => {

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
		<>
			<h2 className="title">Cart</h2>
			<div className="cart-container">
				<div className="cart-products">
					{cart.map((item, index) => (
						<div className="cart-product" key={index}>
							<img
								// src={item.src}
								src={cartProduct}
								alt="product" className="cart-product__img"/>
							<div className="cart-product-desc">
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
								<Cross className="cross" onClick={() => deleteProductFromCart(item._id)}/>
							</div>
						</div>
					))}
				</div>
				<div className="cart-total">
				</div>
			</div>
		</>
	);
};

export default React.memo(ShoppingCart);
