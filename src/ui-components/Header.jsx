import React from 'react';
import logo from './../assets/logo.png';
import useAPI from "../provider/useAPI";

const Header = () => {
  const { lang, setLang } = useAPI();
  return (
    <header>
      <nav>
        <a href="/about-us">About Us</a>
        <a href="/">Shop</a>
      </nav>
      <img src={logo} alt="logo"/>
      <button onClick={() => setLang('en')}>{lang}</button>
    </header>
  );
};

export default Header;
