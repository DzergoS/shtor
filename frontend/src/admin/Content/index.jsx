import React from 'react';
import './Content.css'
import {Route, Switch} from "react-router-dom";
import {ORDERS, PRODUCTS} from "./List";
import List from "./List";
import ProductForm from "./ProductForm";
import Orders from "./Orders/Orders";

const ProductsPage = () => <List type={PRODUCTS} />;

const Content = ({orderList}) => {
	return (
		<div className="content__container">
			<Switch>
				<Route path="/admin/" exact component={ProductsPage} />
				<Route path="/admin/add" component={ProductForm} />
				<Route path="/admin/orders" exact render={() => <Orders orders={orderList} />} />
				<Route path="/admin/order/:id" render={(props) => <Orders {...props} orders={orderList} />} />
				<Route path="/admin/:id" component={ProductForm} />
			</Switch>
		</div>
	);
};

export default React.memo(Content);
