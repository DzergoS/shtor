import React, {useState} from 'react';
import useAPI from "provider/useAPI";
import {
	DECREMENT_PRODUCT,
	DELETE_PRODUCT,
	INCREMENT_PRODUCT
} from "provider/actions/cart";

import {ReactComponent as Cross} from "assets/cross.svg";

import './CartProducts.css'
import {translations} from "info";
import ProductImage from "ui-components/ProductImage";
import {getProductImageName} from "utils/getProduct";
import DeletePopUp from "../../../ui-components/DeletePopUp";

const MINUS = 'MINUS'
const PLUS = 'PLUS'

const CartProducts = () => {

	const {state: {cart, lang, isMobile}, dispatch} = useAPI();
	const [deleteIndex, setDeleteIndex] = useState(-1);

	const onChangeQuantity = (index, sign) => {
		if (cart[index].quantity === 1 && sign === MINUS) setDeleteIndex(index)
		else dispatch({
			type: sign === MINUS ? DECREMENT_PRODUCT : INCREMENT_PRODUCT,
			payload: index,
		});
	}

	const deleteProductFromCart = (index) => setDeleteIndex(index);
	const currency = translations.product.currency[lang]
	const formatDesc = (description) => description[description?.length - 1] === '.'
		? description.slice(0, -1)
		: description;

	return (
		<div className="cart-products">
			{cart.map((item, index) => (
				<div className="cart-product" key={index}>
					<ProductImage imageName={getProductImageName(item)} alt="product" className="cart-product__img"/>
					<div className="cart-product-desc">
						{!isMobile
							? <>
								<h4 className="cart-product__title"><strong>{item.group}</strong>/ {item.name[lang]}</h4>
								<p className="cart-product__desc">{formatDesc(item.description[lang])}/ <strong>{item.size}</strong>{item?.color ? `/ ${item.color}` : "" }</p>
								<div className="cart-product__quantity">
									{translations.cart.quantity[lang]}
									<div className="cart-product__quantity-label">
										<button className="minus" onClick={() => onChangeQuantity(index, MINUS)}>-</button>
										{item.quantity}
										<button className="plus"  onClick={() => onChangeQuantity(index, PLUS)}>+</button>
									</div>
								</div>
								<div className="price">{currency}{item.price[lang] * item.quantity}</div>
							</>
							: <>
								<div className="top">
									<h4 className="cart-product__title"><strong>{item.group}</strong>/ {item.name[lang]}</h4>
									<p className="cart-product__desc">{formatDesc(item.description[lang])}/ <strong>{item.size}</strong>{item?.color ? `/ ${item.color}` : "" }</p>
								</div>
								<div className="bottom">
									<div className="cart-product__quantity">
										{translations.cart.quantity[lang]}
										<div className="cart-product__quantity-label">
											<button className="minus" onClick={() => onChangeQuantity(index, MINUS)}>-</button>
											{item.quantity}
											<button className="plus"  onClick={() => onChangeQuantity(index, PLUS)}>+</button>
										</div>
									</div>
									<div className="price">{currency}{item.price[lang] * item.quantity}</div>
								</div>
							</>
						}

						<Cross className="cross" onClick={() => deleteProductFromCart(index)}/>
					</div>
				</div>
			))}
			{deleteIndex !== -1
				? <DeletePopUp
					isActive={<><strong>{cart[deleteIndex].group}</strong>/ {cart[deleteIndex].name[lang]}</>}
					onYes={() => {
						dispatch({
							type: DECREMENT_PRODUCT,
							payload: deleteIndex,
						})
						setDeleteIndex(-1)
					}}
					onNo={() => {
						setDeleteIndex(-1)
					}}
				/>
				: ""
			}
		</div>
	);
};

export default React.memo(CartProducts);
