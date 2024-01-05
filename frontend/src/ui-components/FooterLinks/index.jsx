import React from 'react';
import './FooterLinks.css'
import FooterIcon from "../../assets/arrow-email.svg";
import {Link} from "react-router-dom";
import {PaymentAndDeliveryTitle, PrivacyPolicyTitle, ReturnsAndExchangeTitle} from "info";
import useAPI from "provider/useAPI";
import {CHANGE_LANG} from "provider/actions/lang";
import {ReactComponent as InstIcon} from "assets/inst.svg";

export const HEADER_MENU = 'HEADER_MENU'

const FooterLinks = ({ type }) => {
	const {state: { lang }, dispatch} = useAPI();

	const toggleLanguage = () => dispatch({
		type: CHANGE_LANG,
		payload: lang === 'ua' ? 'en' : 'ua',
	})

	return (
		<>
			<div className="footer-links">
				<Link className="links-text" to={'/privacy-policy'}>
					<PrivacyPolicyTitle lang={lang}/>
				</Link>
				<Link className="links-text" to={'/payment-and-delivery'}>
					<PaymentAndDeliveryTitle lang={lang}/>
				</Link>
				<Link className="links-text" to={'/returns'}>
					<ReturnsAndExchangeTitle lang={lang}/>
				</Link>
			</div>
			<div className="footer-links social">
				{type === HEADER_MENU
					? <>
						<a className="link-instagram" href="https://www.instagram.com/shtorsstore/" target="_blank">
							<InstIcon className="custom-language-icon"/>
						</a>
						<span className="custom-language" onClick={toggleLanguage}>
							{lang === 'ua' ? 'EN' : 'UA'}
						</span>
					</>
					: <>
						<span className="custom-language" onClick={toggleLanguage}>
							{lang === 'ua' ? 'EN/USD' : 'UA/UAH'}
						</span>
						<a className="link-instagram" href="https://www.instagram.com/shtorsstore/" target="_blank">
							INSTAGRAM
						</a>
					</>
				}
			</div>
		</>
	);
};

export default FooterLinks;
