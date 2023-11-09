import React from 'react';
import './Product.css'
import Breadcrumbs from "../../ui-components/Breadcrumbs/Breadcrumbs";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Scroller from "./components/Scroller/Scroller";

const Product = () => {
  return (
    <>
      <Breadcrumbs/>
      <ProductInfo/>
      <Scroller/>
    </>
  );
};

export default Product;
