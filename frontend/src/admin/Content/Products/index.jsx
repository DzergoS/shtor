import React from 'react';
import './Products.css'
import logo from '../../../assets/product1.png';
import {useHistory} from "react-router-dom";

const good = [{
	title: "title prod",
	category: "category",
	price: 20,
	variants: 3,
},{
	title: "title prod",
	category: "category",
	price: 20,
	variants: 3,
},{
	title: "title prod",
	category: "category",
	price: 20,
	variants: 3,
}];

const Products = () => {

	const history = useHistory();

	const deleteProduct = (e, item) => {
		e.stopPropagation()
		alert(`delete ${item.title}`)
	}

	const editProduct = (item) => {
		alert(`edit ${item.title}`)
	}

	return (
		<div className="products__container">
			<label className="search__label">
				<i className="bi bi-search"></i>
				<input className="search" type="search" placeholder="Шукати товар..."/>
			</label>

			<div className="product-titles">
				<div className="pro-image">Картинка</div>
				<div className="pro-title">Ім'я</div>
				<div className="category">Категорія</div>
				<div className="price">Ціна</div>
				<div className="variants">Варіанти</div>
				<div className="actions">Дії</div>
			</div>
			<div className="product-list">
				{good.map((item, key) => (
					<div key={key} className="product-list-item" onClick={() => editProduct(item)}>
						<div className="image">
							<img src={logo} alt="" width="30px"/>
						</div>
						<div className="pro-title">{item.title}</div>
						<div className="category">{item.category}</div>
						<div className="price">{item.price}</div>
						<div className="variants">{item.variants}</div>
						<div className="actions">
							<button className="edit"><i className="bi bi-gear-fill"></i></button>
							<button className="delete" onClick={(e) => deleteProduct(e, item)}><i className="bi bi-trash"></i></button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
