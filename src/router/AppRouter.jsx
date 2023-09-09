// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "../pages/Main/Main";
import Info from "../pages/Info/Info";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Product from "../pages/Product/Product";
import Header from "../ui-components/Header";
import Footer from "../ui-components/Footer";
import './App.css';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/product" component={Product} />
        <Route path="/simple" component={Info} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default AppRouter;
