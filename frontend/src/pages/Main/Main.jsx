import React, {useEffect} from 'react';
import './Main.css'
import Banner from "./components/Banner/Banner";
import UTP from "./components/UTP/UTP";
import Products from "./components/Products/Products";

const Main = () => (
    <>
        <Banner/>
        <UTP/>
        <Products/>
    </>
);

export default Main;
