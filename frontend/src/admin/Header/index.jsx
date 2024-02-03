import React, {useState} from 'react';
import './Header.css'
import logo from '../../assets/logo.png';
import useAPI from "../../provider/useAPI";
import {CHANGE_LANG} from "../../provider/actions/lang";

const Header = () => {

	const [isOpenedMenu, setIsOpenedMenu] = useState(false);
	const {state: {lang}, dispatch} = useAPI();

	const toggleLanguage = () => dispatch({ type: CHANGE_LANG, payload: lang === 'en' ? 'ua' : 'en' });

	return (
		<header className="header__admin">
			<img src={logo} alt="logo" className="logo"/>
			<button className="change__language" onClick={toggleLanguage}>
				{lang}
			</button>
		</header>
	);
};

export default Header;
