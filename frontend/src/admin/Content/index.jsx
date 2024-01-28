import React from 'react';
import './Content.css'
import {Route, Switch} from "react-router-dom";
import {ORDERS, PRODUCTS} from "./List";
import List from "./List";
import ProductForm from "./ProductForm";

const ProductsPage = () => <List type={PRODUCTS} />;
const Orders = () => <List type={ORDERS} />;

const Content = () => {
	return (
		<div className="content__container">
			<Switch>
				<Route path="/admin/" exact component={ProductsPage} />
				<Route path="/admin/add" component={ProductForm} />
				<Route path="/admin/:id" component={ProductForm} />
				<Route path="/admin/orders" component={Orders} />
			</Switch>
		</div>
	);
};

export default Content;
