import React from 'react';
import {Link} from "react-router-dom";
import getUrlByImageName from "../../../../../utils/getUrlByImageName";
import './ProductItem.css'
import useAPI from "../../../../../provider/useAPI";
import capitalizeFirstLetter from "../../../../../utils/capitalizeFirstLetter";

const ProductItem = ({_id, name, group, price, variationIndex, variations, images}) => {

	const { state: { lang } } = useAPI()

	const ProductImage = () => {
		const url = images[0]
		return <img className="image" src={getUrlByImageName(url)} alt="product list item image"/>
	}
	const ProductHoverImage = () => {
		const url = images?.[1]
		return url ? <img className="hover-image" src={getUrlByImageName(url)} alt="product item image hover"/> : ""
	}

	return (
		<Link to={`/${_id}${variationIndex ? `/${variationIndex}` : ""}`} className="product-list__item">

			<div className="image__container">
				<ProductImage/>
				<ProductHoverImage/>
			</div>

			<div className="product-list__item-info">

				<h3>{group}/{capitalizeFirstLetter(name?.[lang] || variations[0].name[lang])}</h3>

				<p>{lang === 'ua' ? '₴' : '$'}{price?.[lang] || variations[0].price[lang]}</p>

			</div>
		</Link>
	);
};

export default ProductItem;
