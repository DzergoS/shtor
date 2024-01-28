import React, {useMemo} from 'react';
import './Product.css'
import Breadcrumbs from "../../ui-components/Breadcrumbs/Breadcrumbs";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Scroller from "./components/Scroller/Scroller";
import {useEffect, useState} from "react";
import useAPI from "../../provider/useAPI";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import getDefaultOptions from "../../utils/getDefaultOptions";
import getSortedAttachmentsProduct from "../../utils/getSortedVariationProduct";

const Product = ({match}) => {

	const {params: { id, variationIndex }} = match
	const [currentVariationIndex, setCurrentVariationIndex] = useState(variationIndex ? Number(variationIndex) : 0)

	const {state: { lang, products: { allProducts } }} = useAPI()

	const [product, setProduct] = useState(getSortedAttachmentsProduct(allProducts.find((product) => product._id === id)));
	const [currentOptions, setCurrentOptions] = useState(getDefaultOptions(product, currentVariationIndex))

	useEffect(() => {
		if (allProducts.length) {
			const foundProduct = getSortedAttachmentsProduct(allProducts.find((product) => product._id === id))
			setProduct(foundProduct)
			setCurrentOptions(getDefaultOptions(foundProduct, currentVariationIndex))
		}
	}, [allProducts.length, id, variationIndex]);

	const getProductProperty = (property) =>
		capitalizeFirstLetter(product?.[property]?.[lang] || product?.variations?.[currentVariationIndex]?.[property]?.[lang]);

	const productText = useMemo(() => ({
		title: getProductProperty('name'),
		description: getProductProperty('description').split('\n'),
		price: getProductProperty('price'),
	}), [product, currentVariationIndex, lang])

	return (
		<>
			<Breadcrumbs group={product?.group} name={productText.title} lang={lang}/>
			<ProductInfo
				product={product}
				productText={productText}
				currentOptions={currentOptions}
				setCurrentOptions={setCurrentOptions}
				currentVariationIndex={currentVariationIndex}
				setCurrentVariationIndex={setCurrentVariationIndex}
			/>
			<Scroller/>
		</>
	);
};

export default Product;
