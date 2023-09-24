import React from 'react';
import useAPI from "../../provider/useAPI";

import {NavLink, useLocation} from "react-router-dom";

import {ReactComponent as Cart} from '../../assets/cart.svg';
import logo from '../../assets/logo.png';

import './Header.css';

const Header = () => {
  const { lang, setLang } = useAPI();
  const location = useLocation();
  return (
    <header className={`header ${location.pathname === '/' ? 'absolute' : ''}`}>
      <nav>
        <NavLink to="/about-us">About Us</NavLink>
        <NavLink to="/">Shop</NavLink>
      </nav>
      <img src={logo} alt="logo"/>
      <div className='lang-cart'>
        <button onClick={() => setLang('en')}>
          {lang}
        </button>
        <NavLink to='/cart'>
          <Cart/>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
