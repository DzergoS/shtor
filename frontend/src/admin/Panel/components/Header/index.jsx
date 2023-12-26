import React, {useState} from 'react';
import './Header.css'
import logo from '../../../../assets/logo.png';

const Header = () => {

	const [isOpenedMenu, setIsOpenedMenu] = useState(false);

	return (
		<header className="header">
			<img src={logo} alt="logo"/>
		</header>
	);
};

export default Header;
