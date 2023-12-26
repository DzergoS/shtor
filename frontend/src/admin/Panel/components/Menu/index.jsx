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
			<NavLink to="/">Товари</NavLink>
			<hr/>
			<h5>Додати Товар</h5>
			<NavLink to="/products/add/simple">Звичайний</NavLink>
			<NavLink to="/products/add/bracelet">Браслет</NavLink>
			<NavLink to="/products/add/shell">Ракушка</NavLink>
			<hr/>
			<NavLink to="/products/add/orders">Замовлення</NavLink>
		</aside>
	);
};

export default Menu;
