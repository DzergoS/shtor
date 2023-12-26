import React from 'react';
import './Content.css'
import Products from "./Products";
import {Route, Switch} from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import Orders from "./Orders";

const Content = () => {
	return (
		<div className="content__container">
			<Switch>
				<Route path="/admin/" exact component={Products}/>
				<Route path="/admin/products/add" component={AddProduct}/>
				<Route path="/admin/products/edit/:product_id" component={EditProduct}/>
				<Route path="/admin/orders" component={Orders}/>
			</Switch>
		</div>
	);
};

export default Content;
