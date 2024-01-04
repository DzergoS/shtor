import React from 'react';
import {Link} from "react-router-dom";
import './ProductItem.css'
import useAPI from "../../../../../provider/useAPI";
import capitalizeFirstLetter from "../../../../../utils/capitalizeFirstLetter";
import {getProductImageName, getProductImageNameHover, getProductName} from "../../../../../utils/getProduct";
import ProductImage from "../../../../../ui-components/ProductImage";

const ProductItem = ({product}) => {

	const { _id, name, group, price, variations, variationIndex } = product
	const { state: { lang } } = useAPI()

	return (
		<Link to={`/${_id}${variationIndex ? `/${variationIndex}` : ""}`} className="product-list__item">

			<div className="image__container">
				<ProductImage className="image" imageName={product?.images[0]} alt="product list item image"/>
				{product?.images[1]
					? <ProductImage className="hover-image" imageName={product?.images[1]}
							   alt="product item image hover"/>
					: ""}
			</div>

			<div className="product-list__item-info">

				<h3>{group}/{capitalizeFirstLetter(getProductName(product, lang))} {product?.feature ? product.feature : ''}</h3>

				<p>{lang === 'ua' ? '₴' : '$'}{price?.[lang] || variations[0].price[lang]}</p>

			</div>
		</Link>
	);
};

export default ProductItem;
