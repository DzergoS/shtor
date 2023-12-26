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
				<Route path="/" component={Products}/>
				<Route path="/products/add" component={AddProduct}/>
				<Route path="/products/edit/:product_id" component={EditProduct}/>
				<Route path="/orders" component={Orders}/>
			</Switch>
		</div>
	);
};

export default Content;
