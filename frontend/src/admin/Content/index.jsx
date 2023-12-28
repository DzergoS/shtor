import React from 'react';
import './Content.css'
import {Route, Switch} from "react-router-dom";
import {ATTACHMENTS, BRACELET_PRODUCTS, COLORS, ORDERS, PRODUCTS, REGULAR_PRODUCTS, SHELL_PRODUCTS} from "./List";
import List from "./List";
import ProductForm from "./ProductForm";
import {NATURE, OBERIH, OBJECT, PRODUCT_EDIT} from "./ProductForm/constants";

const ProductsPage = () => <List type={PRODUCTS} />;
const RegularProducts = () => <List type={REGULAR_PRODUCTS} />;
const BraceletProducts = () => <List type={BRACELET_PRODUCTS} />;
const ShellProducts = () => <List type={SHELL_PRODUCTS} />;
const Orders = () => <List type={ORDERS} />;
const Colors = () => <List type={COLORS} />;
const Attachments = () => <List type={ATTACHMENTS} />;
const ShellAdd = () => <ProductForm type={NATURE} />;
const BraceletAdd = () => <ProductForm type={OBERIH} />;
const RegularAdd = () => <ProductForm type={OBJECT} />;
const ProductEdit = () => <ProductForm type={PRODUCT_EDIT} />;

const Content = () => {
	return (
		<div className="content__container">
			<Switch>
				<Route path="/admin/" exact component={ProductsPage} />
				<Route path="/admin/regular" exact component={RegularProducts} />
				<Route path="/admin/regular/add" component={RegularAdd} />
				<Route path="/admin/bracelet" exact component={BraceletProducts} />
				<Route path="/admin/bracelet/add" component={BraceletAdd} />
				<Route path="/admin/shell" exact component={ShellProducts} />
				<Route path="/admin/shell/add" component={ShellAdd} />
				<Route path="/admin/edit/:product_id" component={ProductEdit} />
				<Route path="/admin/orders" component={Orders} />
				<Route path="/admin/colors" component={Colors} />
				<Route path="/admin/attachments" component={Attachments} />
			</Switch>
		</div>
	);
};

export default Content;
