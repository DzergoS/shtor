import React, {useContext, useState} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';
import { ReactComponent as CartIcon } from 'assets/cart.svg';
import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { ReactComponent as CrossIcon } from 'assets/cross.svg';
import logo from 'assets/logo.png';
import { CHANGE_LANG } from 'provider/actions/lang';
import { isMobile } from '../../utils/isMobile';

import './Header.css';
import {translations} from "../../info";
import useAPI from "../../provider/useAPI";
import FooterLinks, {HEADER_MENU} from "../FooterLinks";

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
                        <div className="menu-link-mobile__container">
                            <CrossIcon className="cross-icon"/>
                            <NavLink className="nav-link" to="/#about-us" onClick={closeMenu}>{translations.header.aboutUs[lang]}</NavLink>
                            <NavLink className="nav-link"  to="/#product-list" onClick={closeMenu}>{translations.header.shop[lang]}</NavLink>
                            <NavLink className="nav-link cart-link" onClick={closeMenu} to="/cart">
                                {translations.cart.title[lang]}
                                <span className="cart-icon__container">
                                    <CartIcon />
                                    <bdi className="cart-count">{sumOfQuantities ? sumOfQuantities : ''}</bdi>
                                </span>
                            </NavLink>
                        </div>
                        <div className="menu-footer-mobile__container">
                            <FooterLinks type={HEADER_MENU}/>
                            {/*<div className="languages-items">*/}
                            {/*    <button className="change__language" onClick={() => setLanguage('ua')}>*/}
                            {/*        UA*/}
                            {/*    </button>*/}
                            {/*    <button className="change__language" onClick={() => setLanguage('en')}>*/}
                            {/*        EN*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </>
            ) : (
                <div className="lang-cart">
                    <button className="change__language" onClick={toggleLanguage}>
                        {lang}
                    </button>
                    <NavLink className="cart-link" to="/cart">
                        <span className="cart-icon__container">
                            <CartIcon />
                            <bdi className="cart-count">{sumOfQuantities ? sumOfQuantities : ''}</bdi>
                        </span>
                    </NavLink>
                </div>
            )}
        </header>
    );
};

export default Header;
