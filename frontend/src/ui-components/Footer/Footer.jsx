// Header.js
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import FooterLogo from "assets/logo-footer.jpg";
import FooterIcon from "assets/arrow-email.svg";
import './Footer.css';
import {PaymentAndDeliveryTitle, PrivacyPolicyTitle, ReturnsAndExchangeText, ReturnsAndExchangeTitle} from "../../info";
import useAPI from "../../provider/useAPI";

const Footer = () => {
	const {state: {lang}} = useAPI()
	return (
		<footer>
			<div className="footer-block">
				<div className="footer-logo">
					<Link to="/" className='homeBtn'>
						<img src={FooterLogo} alt="footer-main__logo"/>
					</Link>
				</div>
				<div className="footer-nav">
					<div className="footer-info">
						<p className="footer-title">Stay informed about releases and special events</p>
						<div className="email-input">
							<input className="email-send" type="email" placeholder="Email"></input>
							<img className="icon-img" src={FooterIcon} alt="icon-arrow"/>
						</div>
					</div>
					<div className="footer-links">
						<Link className="links-text" to={'/privacy-policy'}><PrivacyPolicyTitle lang={lang}/></Link>
						<Link className="links-text" to={'/payment-and-delivery'}><PaymentAndDeliveryTitle
							lang={lang}/></Link>
						<Link className="links-text" to={'/returns'}><ReturnsAndExchangeTitle lang={lang}/></Link>
					</div>
					<div className="footer-links social">
                  <span className="custom-language">
                      EN/USD
                  </span>
						<a className="link-instagram" href="src/ui-components/Footer/Footer#">INSTAGRAM</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
