import React, {useEffect, useRef, useState} from 'react';

import seeMore from 'assets/seeMore.png'

import './Products.css'
import useAPI from "provider/useAPI";
import ProductItem from "./ProductItem/ProductItem";

const Products = () => {

	const {state: { products }} = useAPI()
	const rotateElementRef = useRef(null);
	const [animation, setAnimation] = useState({
		on: false,
		maxElements: 15,
		classList: '',
	});

	const { on, classList, maxElements } = animation;

	const handleRotateClick = () => {
		setAnimation((prevAnimation) => ({
			...prevAnimation,
			on: true,
			classList: 'rotate-360',
		}));

		setTimeout(() => {
			setAnimation((prevAnimation) => ({
				...prevAnimation,
				maxElements: maxElements + 15,
			}));
		}, 2200);
	};

	return (<>
		<div className="product-list" id="product-list">
			{(Array.isArray(products) ? products : []).filter(product => product.inStock).slice(0, maxElements).map((product, index) => <ProductItem product={product} key={index} index={index}/>)}
		</div>
		{maxElements < products?.length
			? <div
				className="see-more"
				onClick={handleRotateClick}
			>
				<img
					src={seeMore}
					ref={rotateElementRef}
					className={animation.classList}
					alt="img-button"
				/>
				See More
			</div>
			: ""}
	</>
	);
};

export default React.memo(Products);
