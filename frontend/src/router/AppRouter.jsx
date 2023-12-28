// Router.js
import ScrollToTop from "../utils/ScrollToTop";
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from "../pages/Main/Main";
import Info from "../pages/Info/Info";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import Product from "../pages/Product/Product";
import Header from "../ui-components/Header/Header";
import Footer from "../ui-components/Footer/Footer";
import './AppRouter.css';
import Auth from "../admin/Auth";
import Admin from "../admin";

const AppRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/auth/login" exact component={Auth}/>
				<Route path="/admin" component={Admin}/>
				<Route path="/*">
					<ScrollToTop/>
					<Header/>
					<main>
						<Switch>
							<Route path="/" exact component={Main}/>
							<Route path="/product" component={Product}/>
							<Route path="/payment-and-delivery">
								<Info
									title="Payment and delivery"
									text={<>
										<p>Dear customers,</p>
										<p>Please note that all shipments are from our warehouse in Odesa (Ukraine). Due to the war in our country, there are slight changes in delivery terms.The production of the item will take till 10 business days. Please note that the brand is not responsible for local taxes.</p>
										<ul>
											<li>DELIVERY TO RUSSIA AND BELARUS IS NOT AVAILABLE. We are praying for peace!Stand with Ukraine!</li>
										</ul>
										<p><strong>International orders:</strong></p>
										<p>All international orders will be shipped by Ukrposhta service and DHL Express.</p>
										<ul>
											<li>Standard delivery - $30 (10-20 business days)</li>
											<li>Express delivery - $60 (5-10 business days)</li>
										</ul>
										<p><strong>Ukraine:</strong></p>
										<p>All orders within Ukraine we will be delivered via the Nova Poshta service. The delivery time during martial law is 2-5 business days.</p>
										<p>Free delivery</p>
									</>}
								/>
							</Route>
							<Route path="/returns">
								<Info
									title="Returns and Exchange"
									text={<>
										<p>Exchange and return of products are possible within 14 days after receiving the order. To arrange a return or an exchange of goods, please contact us at: Shtorga@icloud.com</p>
										<p>Make sure that the returned product has not been used, is placed in its original packaging, and contains original tags, price tags, and all additional attachments.</p>
										<p>We reserve the right to refuse returns or exchanges if the item does not comply with the above-mentioned rules.</p>
										<ul>
											<li>Goods from the OUTLET section and products made according to individual measurements are not subject to return and exchange.</li>
										</ul>
										<p>You can use any express delivery service for a return (please note that the delivery time should NOT exceed 10 days). SHTOR is not responsible for return shipping costs and customs duties.</p>
										<p>After dispatching the package, please let us know the tracking number of the parcel and leave a link to the tracking website.</p>
										<p>Any disputes which do not fall under the Returns and Exchange policy are subject to individual resolvement through negotiation between the parties involved.</p>
									</>}
								/>
							</Route>
							<Route path="/privacy-policy">
								<Info
									title="Privacy Policy"
									text={
										<>
											<p>SHTOR recognizes the importance of protecting
												the privacy of your personal data. We have
												instituted strict policies and security
												measures to protect the information you
												provide us.</p>
											<ol>
												<li>Data is collected when you shop on our
													website or use our online services
												</li>
											</ol>
											<p><strong>Contact details:</strong> If you make
												a purchase online we will collect your name,
												address, e-mail address, telephone number,
												and country of residence. We will use your
												contact information to:</p>
											<ul>
												<li>Process your purchase/orders and any
													returns, exchanges and complaints you
													may have relating to your purchase
												</li>
												<li>communicate with you regarding your
													purchase and answer and administer any
													questions or comments you may have
													regarding our products or services. The
													legal basis is that it is necessary to
													process your data in order for us to be
													able to fulfill our contractual
													obligations to you under the purchase
													agreement. We will retain your data for
													as long as necessary for this purpose.
													We may also process your contact details
													to keep you informed, via email, SMS,
													letters, telephone, WeChat, Whatsapp and
													other social media, of our special
													events or promotions. You are entitled
													to reject our marketing messages at any
													time by clicking on the unsubscribe link
													included in each message or by
													contacting customer service at
													Shtorga@icloud.com
												</li>
											</ul>
											<p>Credit card details: If you make a purchase
												online and choose to pay by credit card, you
												will provide your credit card information on
												our website to finalize your purchase. Your
												credit card details will be protected using
												Global Sign Encryption. All the payments on
												the website are carried out by FONDY Payment
												System.</p>
											<p>Newsletter</p>
											<ul>
												<li><strong>Newsletter</strong></li>
											</ul>
											<p>If you have subscribed to one of our
												newsletters, we will process your name,
												email address, country and information on
												whether you are interested in womenswear or
												menswear for the purpose of sending out such
												a newsletter. You are entitled to
												unsubscribe to our newsletter at any time by
												clicking on the unsubscribe link included in
												each newsletter or by contacting customer
												service at Shtorga@icloud.com </p>
										</>
									}
								/>
							</Route>
							<Route path="/about-us" component={Info}/>
							<Route path="/cart" component={ShoppingCart}/>
						</Switch>
					</main>
					<Footer/>
				</Route>
			</Switch>
		</Router>
	);
};

export default AppRouter;
