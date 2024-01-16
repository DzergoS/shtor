// Header.js
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FooterLogo from "assets/logo-footer.jpg";
import FooterIcon from "assets/arrow-email.svg";
import './Footer.css';
import FooterLinks from "../FooterLinks";

const Footer = () => {
	const [email, setEmail] = useState('');
  	const [error, setError] = useState(null);

	function isValidEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleChange = (event) => {
		const inputEmail = event.target.value;
		var errorMessage = null;
	  
		if (inputEmail.trim() !== '' && !isValidEmail(inputEmail)) {
		  errorMessage = 'Email is invalid';
		}
	  
		setError(errorMessage);
		setEmail(inputEmail);
	};

	const handleSubmit = event => {
		event.preventDefault();
		setError(null);
	
		if (isValidEmail(email)) {
		  // Заглушка для Серго. Отправляешь запрос на /api/subscribe и передаёшь email в body
		  console.log('The email is valid'); 
		} else {
		  setError('Email is invalid');
		}
	};

	return (
		<footer className="footer">
			<div className="footer-logo">
				<Link to="/" className='homeBtn'>
					<img src={FooterLogo} alt="footer-main__logo"/>
				</Link>
				<p className="footer-title">Stay informed about releases and special events</p>
				<form method='POST' onSubmit={handleSubmit}>
					<div className="email-input">
						<input
							className="email-send"
							type="email"
							placeholder="Email"
							value={email}
        					onChange={handleChange}
						/>
						<img className="icon-img" src={FooterIcon} alt="icon-arrow"/>
					</div>
					{error && <p className='email-input-error'>{error}</p>}
				</form>
			</div>
			<FooterLinks/>
		</footer>
	);
};

export default Footer;
