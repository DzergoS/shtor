import React from 'react';
import './Menu.css'
import {NavLink, Route} from "react-router-dom";
import Products from "../Content/Products";
import AddProduct from "../Content/AddProduct";
import EditProduct from "../Content/EditProduct";
import Orders from "../Content/Orders";

const Menu = () => {
	return (
		<aside className="menu__container">
			<NavLink to="/admin" exact><i className="bi bi-basket"></i>Товари</NavLink>

			<div className="link__container">
				<h5><i className="bi bi-plus-circle-fill"></i>Додати Товар</h5>
				<NavLink to="/admin/products/add/simple">Звичайний</NavLink>
				<NavLink to="/admin/products/add/bracelet">Браслет</NavLink>
				<NavLink to="/admin/products/add/shell">Ракушка</NavLink>
			</div>

			<NavLink to="/admin/orders"><i className="bi bi-cart-check"></i>Замовлення</NavLink>
		</aside>
	);
};

export default Menu;
