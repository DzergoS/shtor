import React from 'react';
import './Products.css'
import logo from '../../../../../assets/product1.png';

const Products = () => {
	return (
		<div className="products__container">
			<input className="search" type="search" placeholder="search"/>

			<div className="product-titles">
				<div className="pro-image">Картинка</div>
				<div className="pro-title">Ім'я</div>
				<div className="category">Категорія</div>
				<div className="price">Ціна</div>
				<div className="variants">Варіанти</div>
				<div className="actions">Дії</div>
			</div>
			<div className="product-list">
				<div className="product-list-item">
					<div className="image">
						<img src={logo} alt="" width="30px"/>
					</div>
					<div className="pro-title">Ono</div>
					<div className="category">One</div>
					<div className="price">20</div>
					<div className="variants">3</div>
					<div className="actions">Edit, Delete</div>
				</div>
				<div className="product-list-item">
					<div className="image">
						<img src={logo} alt="" width="30px"/>
					</div>
					<div className="pro-title">Ono</div>
					<div className="category">One</div>
					<div className="price">20</div>
					<div className="variants">3</div>
					<div className="actions">Edit, Delete</div>
				</div>
				<div className="product-list-item">
					<div className="image">
						<img src={logo} alt="" width="30px"/>
					</div>
					<div className="pro-title">Ono</div>
					<div className="category">One</div>
					<div className="price">20</div>
					<div className="variants">3</div>
					<div className="actions">Edit, Delete</div>
				</div>
			</div>
		</div>
	);
};

export default Products;
