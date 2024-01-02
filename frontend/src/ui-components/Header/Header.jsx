import React, {useContext, useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { ReactComponent as CartIcon } from 'assets/cart.svg';
import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import logo from 'assets/logo.png';
import { CHANGE_LANG } from 'provider/actions/lang';
import { isMobile } from '../../utils/isMobile';

import './Header.css';
import {translations} from "../../info";
import useAPI from "../../provider/useAPI";

const Header = () => {
    const { state: { lang, cart }, dispatch } = useAPI();
    const location = useLocation();
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const closeMenu = () => setIsOpenMenu(false)
    const openMenu = () => setIsOpenMenu(true)

    const toggleLanguage = () => dispatch({ type: CHANGE_LANG, payload: lang === 'en' ? 'ua' : 'en' });

    const setLanguage = (value) => dispatch({ type: CHANGE_LANG, payload: value });

    const isMainPage = location.pathname === '/'

    const sumOfQuantities = cart.reduce((accumulator, currentObject) => {
        return accumulator + currentObject.quantity;
    }, 0);

    return (
        <header className={`header ${isMainPage ? 'absolute' : ''}`}>
            {!isMobile && (
                <nav>
                    <NavLink to="/#about-us">{translations.header.aboutUs[lang]}</NavLink>
                    <NavLink to="/#product-list">{translations.header.shop[lang]}</NavLink>
                </nav>
            )}
            <NavLink to="/" className="logo">
                <img src={logo} alt="logo" />
            </NavLink>
            {isMobile ? (
                <>
                    <MenuIcon className="menu" onClick={openMenu} />
                    <div className={`menu__container-mobile ${isOpenMenu ? 'opened' : ''}`} onClick={closeMenu}>
                        <NavLink to="/#about-us" onClick={closeMenu}>{translations.header.aboutUs[lang]}</NavLink>
                        <NavLink to="/#product-list" onClick={closeMenu}>{translations.header.shop[lang]}</NavLink>
                        <NavLink className="cart-link" onClick={closeMenu} to="/cart">
                            {translations.cart.title[lang]}
                            <CartIcon />
                            <span className="cart-count">{sumOfQuantities ? sumOfQuantities : ''}</span>
                        </NavLink>
                        <div className="languages-items">
                            <button className="change__language" onClick={() => setLanguage('ua')}>
                                UA
                            </button>
                            <button className="change__language" onClick={() => setLanguage('en')}>
                                EN
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="lang-cart">
                    <button className="change__language" onClick={toggleLanguage}>
                        {lang}
                    </button>
                    <NavLink className="cart-link" to="/cart">
                        <CartIcon />
                        <span className="cart-count">{sumOfQuantities ? sumOfQuantities : ''}</span>
                    </NavLink>
                </div>
            )}
        </header>
    );
};

export default Header;
