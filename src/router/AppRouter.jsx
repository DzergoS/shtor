// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "../pages/Main/Main";
import Info from "../pages/Info/Info";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Product from "../pages/Product/Product";
import Header from "../ui-components/Header/Header";
import Footer from "../ui-components/Footer";
import './AppRouter.css';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/product" component={Product} />
          <Route path="/simple" component={Info} />
          <Route path="/about-us" component={Info} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRouter;
