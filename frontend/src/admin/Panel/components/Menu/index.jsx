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
			<NavLink to="/admin/panel" exact>Товари</NavLink>

			<div className="link__container">
				<h5>Додати Товар</h5>
				<NavLink to="/admin/panel/products/add/simple">Звичайний</NavLink>
				<NavLink to="/admin/panel/products/add/bracelet">Браслет</NavLink>
				<NavLink to="/admin/panel/products/add/shell">Ракушка</NavLink>
			</div>

			<NavLink to="/admin/panel/orders">Замовлення</NavLink>
		</aside>
	);
};

export default Menu;
