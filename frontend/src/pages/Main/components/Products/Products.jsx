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
			classList: 'rotate-270',
		}));

		setTimeout(() => {
			setAnimation((prevAnimation) => ({
				...prevAnimation,
				classList: `${prevAnimation.classList} rotate-ended-270 rotate-360`,
			}));
		}, 1600);

		setTimeout(() => {
			setAnimation((prevAnimation) => ({
				...prevAnimation,
				maxElements: maxElements + 15,
			}));
		}, 2200);
	};

	const productList = products.reduce((accumulator, currentObject) => {
		if (currentObject?.name?.ua === 'Браслет-підвіс' || currentObject?.seashells?.length) {
			accumulator.push({
				...currentObject,
				images: currentObject?.seashells?.length
					? currentObject.seashells.flatMap(images => images)
					: currentObject?.variations?.[0]?.images
			})
		}
		else if (currentObject?.variations?.[0]?.images?.length) {
			currentObject.variations.map((variation, variationIndex) => {
				accumulator.push({
					...currentObject,
					...variation,
					_id: currentObject._id,
					variationIndex,
				})
			})
		} else accumulator.push(currentObject)
		return accumulator;
	}, []);
	console.log('productList', productList)
	return (<>
		<div className="product-list" id="product-list">
			{productList.slice(0, maxElements).map((product, index) => <ProductItem product={product} key={index} index={index}/>)}
		</div>
		{maxElements < productList?.length
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
