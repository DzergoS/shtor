import React from 'react';
import './Product.css'
import Breadcrumbs from "../../ui-components/Breadcrumbs/Breadcrumbs";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Scroller from "./components/Scroller/Scroller";
import {useEffect, useState} from "react";
import useAPI from "../../provider/useAPI";
import {useParams} from "react-router-dom";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";


const customSortOrder = [
	'Без підвісу',
	'Срібний ланцюг',
	'Срібна орбіта',
];

const getSortedVariationsProduct = (product) => {
	if (!product || !product.variations) {
		return product;
	}

	const sortedVariationsProduct = {...product};
	if (product?.variations?.[0].attachment) {
		sortedVariationsProduct.variations = sortedVariationsProduct.variations.sort((a, b) => {
			const indexA = customSortOrder.indexOf(a.attachment);
			const indexB = customSortOrder.indexOf(b.attachment);

			return indexA - indexB;
		})
	}
	return sortedVariationsProduct
}

const Product = ({match}) => {

	const {state: { lang, products }} = useAPI()
	const {params: { id, variationIndex }} = match
	const [product, setProduct] = useState(
		getSortedVariationsProduct(products.find((product) => product._id === id))
	);

	const receivedVariationsIndex = variationIndex ? Number(variationIndex) : 0

	const getDefaultOptions = (foundProduct = product) => {
		const { size, color, material, feature, variations } = foundProduct || {};
		let options = {};
		if (size?.length || variations?.[0]?.size?.length)
			options.size = size?.[0] || variations[receivedVariationsIndex].size[0]
		if (color?.length || variations?.[0]?.color?.length)
			options.color = color?.[0] || variations[receivedVariationsIndex].color
		if (material || variations?.[0]?.material)
			options.material = material || variations[receivedVariationsIndex].material
		if (variations?.[0]?.attachment)
			options.attachment = variations[receivedVariationsIndex].attachment
		if (feature || variations?.[0]?.feature)
			options.feature = feature || variations?.[receivedVariationsIndex]?.feature
		return options
	}
	const [currentOptions, setCurrentOptions] = useState(getDefaultOptions())

	const [currentVariationIndex, setCurrentVariationIndex] = useState(receivedVariationsIndex)

	useEffect(() => {
		if (products.length) {
			const foundProduct = getSortedVariationsProduct(products.find((product) => product._id === id))
			setProduct(foundProduct)
			setCurrentOptions(getDefaultOptions(foundProduct))
		}
	}, [products]);

	const { variations } = product || {};
	const getProductProperty = (property, lang) => product
		? product?.[property]?.[lang]
			? capitalizeFirstLetter(product?.[property]?.[lang])
			: capitalizeFirstLetter(variations?.[currentVariationIndex]?.[property]?.[lang])
		: '';

	const productText = {
		title: getProductProperty('name', lang),
		description: getProductProperty('description', lang).split('\n'),
		price: getProductProperty('price', lang),
	}

	return (
		<>
			<Breadcrumbs group={product?.group} name={productText.title} lang={lang}/>
			<ProductInfo
				product={product}
				productText={productText}
				currentOptions={currentOptions}
				setCurrentOptions={setCurrentOptions}
				currentVariationIndex={currentVariationIndex}
				receivedVariationsIndex={receivedVariationsIndex}
				setCurrentVariationIndex={setCurrentVariationIndex}
			/>
			<Scroller/>
		</>
	);
};

export default Product;
