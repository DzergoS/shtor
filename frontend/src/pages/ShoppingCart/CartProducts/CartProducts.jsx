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
import {translations} from "../../../info";
import ProductImage from "../../../ui-components/ProductImage";
import {getProductImageName} from "../../../utils/getProduct";

const MINUS = 'MINUS'
const PLUS = 'PLUS'

const CartProducts = () => {

	const {state: {cart, lang}, dispatch} = useAPI();

	const onChangeQuantity = (_id, sign) => dispatch({
		type: sign === 'MINUS' ? DECREMENT_PRODUCT : INCREMENT_PRODUCT,
		payload: _id,
	});

	const deleteProductFromCart = (_id) => dispatch({
		type: DELETE_PRODUCT,
		payload: _id,
	})
	console.log('cart', cart)

	const currency = translations.product.currency[lang]
	const formatDesc = (description) => description[description?.length - 1] === '.'
		? description.slice(0, -1)
		: description;

	return (
		<div className="cart-products">
			{cart.map((item, index) => (
				<div className="cart-product" key={index}>
					<ProductImage src={getProductImageName(item)} alt="product" className="cart-product__img"/>
					<div className="cart-product-desc">
						{!isMobile
							? <>
								<h4 className="cart-product__title"><strong>{item.group}</strong>/ {item.name[lang]}</h4>
								<p className="cart-product__desc">{formatDesc(item.description[lang])}/ <strong>{item.size}</strong></p>
								<div className="cart-product__quantity">
									{translations.cart.quantity[lang]}
									<div className="cart-product__quantity-label">
										<button className="minus" onClick={() => onChangeQuantity(item._id, MINUS)}>-</button>
										{item.quantity}
										<button className="plus"  onClick={() => onChangeQuantity(item._id, PLUS)}>+</button>
									</div>
								</div>
								<div className="price">{currency}{item.price[lang] * item.quantity}</div>
							</>
							: <>
								<div className="top">
									<h4 className="cart-product__title"><strong>{item.group}</strong>/ {item.name[lang]}</h4>
									<p className="cart-product__desc">{formatDesc(item.description[lang])}/ <strong>{item.size}</strong></p>
								</div>
								<div className="bottom">
									<div className="cart-product__quantity">
										{translations.cart.quantity[lang]}
										<div className="cart-product__quantity-label">
											<button className="minus" onClick={() => onChangeQuantity(item._id, MINUS)}>-</button>
											{item.quantity}
											<button className="plus"  onClick={() => onChangeQuantity(item._id, PLUS)}>+</button>
										</div>
									</div>
									<div className="price">{currency}{item.price[lang] * item.quantity}</div>
								</div>
							</>
						}

						<Cross className="cross" onClick={() => deleteProductFromCart(item._id)}/>
					</div>
				</div>
			))}
		</div>
	);
};

export default React.memo(CartProducts);
