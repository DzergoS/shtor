import React, {useState} from 'react';
import './Header.css'
import logo from '../../assets/logo.png';

const Header = () => {

	const [isOpenedMenu, setIsOpenedMenu] = useState(false);

	return (
		<header className="header__admin">
			<img src={logo} alt="logo" className="logo"/>
		</header>
	);
};

export default Header;
