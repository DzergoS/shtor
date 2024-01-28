import React, {useMemo} from 'react';
import useAPI from "provider/useAPI";
import {
	DECREMENT_PRODUCT,
	DELETE_PRODUCT,
	INCREMENT_PRODUCT
} from "provider/actions/cart";

import {ReactComponent as Cross} from "assets/cross.svg";

import './CartProducts.css'
import isMobile from "utils/isMobile";
import {translations} from "info";
import ProductImage from "ui-components/ProductImage";
import {getProductImageName} from "utils/getProduct";

const MINUS = 'MINUS'
const PLUS = 'PLUS'

const CartProducts = () => {

	const {state: {cart, lang, products: {allProducts}}, dispatch} = useAPI();

	const onChangeQuantity = (index, sign) => dispatch({
		type: sign === 'MINUS' ? DECREMENT_PRODUCT : INCREMENT_PRODUCT,
		payload: index,
	});

	const currency = translations.product.currency[lang]
	const formatDesc = (description) => description[description?.length - 1] === '.'
		? description.slice(0, -1)
		: description;

	console.log('cart', cart);

	return (
		<div className="cart-products">
			{cart.map((item, index) => (
				<div className="cart-product" key={index}>
					<div className="custom-img">
						<ProductImage imageName={item?.image} alt="product" className="cart-product__img"/>
					</div>
					<div className="cart-product-desc">
						{!isMobile
							? <>
								<h4 className="cart-product__title"><strong>{item.group}</strong>/ {item.name[lang]}</h4>
								<p className="cart-product__desc">
									{formatDesc(item.description[lang])}/ <strong>{item.size}</strong>
									{item?.color?.length ? `/ ${item.color}` : "" }
									{item?.attachment ? `/ ${item.attachment}` : "" }
								</p>
								<div className="cart-product__quantity">
									<div className="cart-product__quantity-label">
										<button className="minus" onClick={() => onChangeQuantity(index, MINUS)}>-</button>
										{item.quantity}
										<button className="plus"  onClick={() => onChangeQuantity(index, PLUS)}>+</button>
									</div>
									<div className="price">{currency}{item.price[lang] * item.quantity}</div>
								</div>
							</>
							: <>
								<div className="top">
									<h4 className="cart-product__title"><strong>{item.group}</strong>/ {item.name[lang]}</h4>
									<p className="cart-product__desc">{formatDesc(item.description[lang])}/ <strong>{item.size}</strong>{item?.color?.length ? `/ ${item.color}` : "" }</p>
								</div>
								<div className="bottom">
									<div className="cart-product__quantity">
										<div className="cart-product__quantity-label">
											<button className="minus" onClick={() => onChangeQuantity(item._id, MINUS)}>-</button>
											{item.quantity}
											<button className="plus"  onClick={() => onChangeQuantity(item._id, PLUS)}>+</button>
										</div>
										<div className="price">{currency}{item.price[lang] * item.quantity}</div>
									</div>
								</div>
							</>
						}

						{/*<Cross className="cross" onClick={() => deleteProductFromCart(item._id)}/>*/}
					</div>
				</div>
			))}
		</div>
	);
};

export default React.memo(CartProducts);
