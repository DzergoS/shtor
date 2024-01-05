// Header.js
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FooterLogo from "assets/logo-footer.jpg";
import FooterIcon from "assets/arrow-email.svg";
import './Footer.css';
import {PaymentAndDeliveryTitle, PrivacyPolicyTitle, ReturnsAndExchangeText, ReturnsAndExchangeTitle} from "../../info";
import useAPI from "../../provider/useAPI";
import FooterLinks from "../FooterLinks";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-logo">
				<Link to="/" className='homeBtn'>
					<img src={FooterLogo} alt="footer-main__logo"/>
				</Link>
				<p className="footer-title">Stay informed about releases and special events</p>
				<div className="email-input">
					<input className="email-send" type="email" placeholder="Email"></input>
					<img className="icon-img" src={FooterIcon} alt="icon-arrow"/>
				</div>
			</div>
			<FooterLinks/>
		</footer>
	);
};

export default Footer;
