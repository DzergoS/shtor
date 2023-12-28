import React from 'react';
import './Menu.css'
import {Link, NavLink, Route, useHistory, useLocation} from "react-router-dom";

const Menu = () => {

	const location = useLocation();

	return (
		<aside className="menu__container">
			<div className={`link__container ${location.pathname === '/admin/' ? 'active' : ''}`}>
				<NavLink className="link-title" to="/admin/" exact><i className="bi bi-eye"></i>Товари</NavLink>
				<div className="menu__container-link">
					<NavLink className="link" to="/admin/regular">Звичайний</NavLink>
					<Link className="button" to="/admin/regular/add"><i className="bi bi-pencil-square"></i></Link>
				</div>
				<div className="menu__container-link">
					<NavLink className="link" to="/admin/bracelet">Браслет</NavLink>
					<Link className="button" to="/admin/bracelet/add"><i className="bi bi-pencil-square"></i></Link>
				</div>
				<div className="menu__container-link">
					<NavLink className="link" to="/admin/shell">Ракушка</NavLink>
					<Link className="button" to="/admin/shell/add"><i className="bi bi-pencil-square"></i></Link>
				</div>
			</div>

			<div className="link__container">
				<h5><i className="bi bi-sliders"></i>Параметри</h5>
				<div className="menu__container-link">
					<NavLink className="link" to="/admin/colors">Колір</NavLink>
					<Link className="button" to="/admin/colors/add"><i className="bi bi-pencil-square"></i></Link>
				</div>
				<div className="menu__container-link">
					<NavLink className="link" to="/admin/attachments">Підвіс</NavLink>
					<Link className="button" to="/admin/attachments/add"><i className="bi bi-pencil-square"></i></Link>
				</div>
			</div>

			<NavLink className="menu__container-link solo" to="/admin/orders"><i className="bi bi-cart-check"></i>Замовлення</NavLink>
		</aside>
	);
};

export default Menu;
