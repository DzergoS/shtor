// Header.js
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FooterLogo from "assets/logo-footer.jpg";
import FooterIcon from "assets/arrow-email.svg";
import './Footer.css';
import FooterLinks from "../FooterLinks";
import api from "../../api";


const Footer = () => {
	const [email, setEmail] = useState('');
  	const [error, setError] = useState(null);

	const reqSubscribe = () => api.subscribe.subscribe.activation({ email })

	function isValidEmail(email) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const onChange = (e) => {
		const inputEmail = e.target.value;
		var errorMessage = null;

		if (inputEmail.trim() !== '' && !isValidEmail(inputEmail)) {
		  errorMessage = 'Email is invalid';
		}

		setError(errorMessage);
		setEmail(inputEmail);
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		setError(null);

		if (isValidEmail(email)) {
		  try {
			const response = await reqSubscribe()

			// console.log('Subscribe successful:', response);
		  } catch (error) {
			console.error('Subscribe failed:', error);
		  }
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
				<form method='POST' onSubmit={onSubmit}>
					<div className="email-input">
						<input
							className="email-send"
							type="email"
							placeholder="Email"
							value={email}
        					onChange={onChange}
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
