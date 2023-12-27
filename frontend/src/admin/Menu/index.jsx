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
				<h5><i className="bi bi-eye"></i>Товари</h5>
				<NavLink to="/admin/products/">Усі</NavLink>
				<NavLink to="/admin/products/simple">Звичайний</NavLink>
				<NavLink to="/admin/products/bracelet">Браслет</NavLink>
				<NavLink to="/admin/products/shell">Ракушка</NavLink>
			</div>

			<div className="link__container">
				<h5><i className="bi bi-sliders"></i>Параметри</h5>
				<NavLink to="/admin/colors">Колір</NavLink>
				<NavLink to="/admin/attachments">Підвіс</NavLink>
			</div>

			<NavLink to="/admin/orders"><i className="bi bi-cart-check"></i>Замовлення</NavLink>
		</aside>
	);
};

export default Menu;
