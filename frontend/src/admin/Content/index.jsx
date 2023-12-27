import React from 'react';
import './Content.css'
import {Route, Switch} from "react-router-dom";
import EditProduct from "./EditProduct";
import Attachments from "./Attachments";
import AddProduct from "./AddProduct";
import Products from "./Products";
import Orders from "./Orders";
import Colors from "./Colors";

const Content = () => {
	return (
		<div className="content__container">
			<Switch>
				<Route path="/admin/" exact component={Products}/>
				<Route path="/admin/simple" exact component={Products}/>
				<Route path="/admin/bracelet" exact component={Products}/>
				<Route path="/admin/shell" exact component={Products}/>
				<Route path="/admin/products/add" component={AddProduct}/>
				<Route path="/admin/products/edit/:product_id" component={EditProduct}/>
				<Route path="/admin/orders" component={Orders}/>
				<Route path="/admin/colors" component={Colors}/>
				<Route path="/admin/attachments" component={Attachments}/>
			</Switch>
		</div>
	);
};

export default Content;
