import React from 'react';
import logo from '../../../../assets/logo.png'
import './Menu.css'
import {Link} from "react-router-dom";

const Menu = () => {
	return (
		<aside className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered bg-white  ">
			<div className="navbar-vertical-container">
				<div className="navbar-vertical-footer-offset">
					{/*!--Logo--*/}

					<Link className="navbar-brand" to="/admin/panel" aria-label="Front">
						<img className="navbar-brand-logo" style={{filter: "invert(1)"}} src={logo} alt="Logo"
							 data-hs-theme-appearance="default"/>
						<img className="navbar-brand-logo" src={logo} alt="Logo"
							 data-hs-theme-appearance="dark"/>
						<img className="navbar-brand-logo-mini" src={logo} alt="Logo"
							 data-hs-theme-appearance="default"/>
						<img className="navbar-brand-logo-mini" src={logo} alt="Logo"
							 data-hs-theme-appearance="dark"/>
					</Link>

					{/*!--End Logo --*/}

					{/*!--Navbar Vertical Toggle --*/}
					<button type="button" className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler">
						<i className="bi-arrow-bar-left navbar-toggler-short-align"
						   data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>'
						   data-bs-toggle="tooltip" data-bs-placement="right" title="Collapse"></i>
						<i className="bi-arrow-bar-right navbar-toggler-full-align"
						   data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>'
						   data-bs-toggle="tooltip" data-bs-placement="right" title="Expand"></i>
					</button>

					{/*!--End Navbar Vertical Toggle --*/}

					{/*!--Content--*/}
					<div className="navbar-vertical-content">
						<div id="navbarVerticalMenu" className="nav nav-pills nav-vertical card-navbar-nav">
							{/*!--Collapse--*/}
							<div className="nav-item">
								<a className="nav-link dropdown-toggle " href="#navbarVerticalMenuDashboards"
								   role="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuDashboards"
								   aria-expanded="false" aria-controls="navbarVerticalMenuDashboards">
									<i className="bi-house-door nav-icon"></i>
									<span className="nav-link-title">Dashboards</span>
								</a>

								<div id="navbarVerticalMenuDashboards" className="nav-collapse collapse "
									 data-bs-parent="#navbarVerticalMenu">
									<a className="nav-link " href="./index.html">Default</a>
									<a className="nav-link " href="./dashboard-alternative.html">Alternative</a>
								</div>
							</div>
							{/*!--End Collapse --*/}

							<span className="dropdown-header mt-4">Pages</span>
							<small className="bi-three-dots nav-subtitle-replacer"></small>

							{/*!--Collapse--*/}
							<div className="navbar-nav nav-compact">

							</div>
							<div id="navbarVerticalMenuPagesMenu">
								{/*!--Collapse--*/}
								<div className="nav-item">
									<a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesUsersMenu"
									   role="button" data-bs-toggle="collapse"
									   data-bs-target="#navbarVerticalMenuPagesUsersMenu" aria-expanded="false"
									   aria-controls="navbarVerticalMenuPagesUsersMenu">
										<i className="bi-people nav-icon"></i>
										<span className="nav-link-title">Users</span>
									</a>

									<div id="navbarVerticalMenuPagesUsersMenu" className="nav-collapse collapse "
										 data-bs-parent="#navbarVerticalMenuPagesMenu">
										<a className="nav-link " href="./users.html">Overview</a>
										<a className="nav-link " href="./users-leaderboard.html">Leaderboard</a>
										<a className="nav-link " href="./users-add-user.html">Add User <span
											className="badge bg-info rounded-pill ms-1">Hot</span></a>
									</div>
								</div>
								{/*!--End Collapse --*/}

								{/*!--Collapse--*/}
								<div className="nav-item">
									<a className="nav-link dropdown-toggle "
									   href="#navbarVerticalMenuPagesUserProfileMenu" role="button"
									   data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesUserProfileMenu"
									   aria-expanded="false" aria-controls="navbarVerticalMenuPagesUserProfileMenu">
										<i className="bi-person nav-icon"></i>
										<span className="nav-link-title">User Profile <span
											className="badge bg-primary rounded-pill ms-1">5</span></span>
									</a>

									<div id="navbarVerticalMenuPagesUserProfileMenu" className="nav-collapse collapse "
										 data-bs-parent="#navbarVerticalMenuPagesMenu">
										<a className="nav-link " href="./user-profile.html">Profile</a>
										<a className="nav-link " href="./user-profile-teams.html">Teams</a>
										<a className="nav-link " href="./user-profile-projects.html">Projects</a>
										<a className="nav-link " href="./user-profile-connections.html">Connections</a>
										<a className="nav-link " href="./user-profile-my-profile.html">My Profile</a>
									</div>
								</div>
								{/*!--End Collapse --*/}

								{/*!--Collapse--*/}
								<div className="nav-item">
									<a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesAccountMenu"
									   role="button" data-bs-toggle="collapse"
									   data-bs-target="#navbarVerticalMenuPagesAccountMenu" aria-expanded="false"
									   aria-controls="navbarVerticalMenuPagesAccountMenu">
										<i className="bi-person-badge nav-icon"></i>
										<span className="nav-link-title">Account</span>
									</a>

									<div id="navbarVerticalMenuPagesAccountMenu" className="nav-collapse collapse "
										 data-bs-parent="#navbarVerticalMenuPagesMenu">
										<a className="nav-link " href="./account-settings.html">Settings</a>
										<a className="nav-link " href="./account-billing.html">Billing</a>
										<a className="nav-link " href="./account-invoice.html">Invoice</a>
									</div>
								</div>
								{/*!--End Collapse --*/}

								{/*!--Collapse--*/}
								<div className="nav-item">
									<a className="nav-link dropdown-toggle active"
									   href="#navbarVerticalMenuPagesEcommerceMenu" role="button"
									   data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuPagesEcommerceMenu"
									   aria-expanded="true" aria-controls="navbarVerticalMenuPagesEcommerceMenu">
										<i className="bi-basket nav-icon"></i>
										<span className="nav-link-title">E-commerce</span>
									</a>

									<div id="navbarVerticalMenuPagesEcommerceMenu" className="nav-collapse collapse show"
										 data-bs-parent="#navbarVerticalMenuPagesMenu">
										<a className="nav-link " href="./ecommerce.html">Overview</a>

										<div id="navbarVerticalMenuPagesMenuEcommerce">
											{/*!--Collapse--*/}
											<div className="nav-item">
												<a className="nav-link dropdown-toggle"
												   href="#navbarVerticalMenuPagesEcommerceProductsMenu" role="button"
												   data-bs-toggle="collapse"
												   data-bs-target="#navbarVerticalMenuPagesEcommerceProductsMenu"
												   aria-expanded="true"
												   aria-controls="navbarVerticalMenuPagesEcommerceProductsMenu">
													Products
												</a>

												<div id="navbarVerticalMenuPagesEcommerceProductsMenu"
													 className="nav-collapse collapse show"
													 data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
													<a className="nav-link active"
													   href="./ecommerce-products.html">Products</a>
													<a className="nav-link " href="./ecommerce-product-details.html">Product
														Details</a>
													<a className="nav-link " href="./ecommerce-add-product.html">Add
														Product</a>
												</div>
											</div>
											{/*!--End Collapse --*/}

											{/*!--Collapse--*/}
											<div className="nav-item">
												<a className="nav-link dropdown-toggle"
												   href="#navbarVerticalMenuPagesEcommerceOrdersMenu" role="button"
												   data-bs-toggle="collapse"
												   data-bs-target="#navbarVerticalMenuPagesEcommerceOrdersMenu"
												   aria-expanded="false"
												   aria-controls="navbarVerticalMenuPagesEcommerceOrdersMenu">
													Orders
												</a>

												<div id="navbarVerticalMenuPagesEcommerceOrdersMenu"
													 className="nav-collapse collapse "
													 data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
													<a className="nav-link " href="./ecommerce-orders.html">Orders</a>
													<a className="nav-link " href="./ecommerce-order-details.html">Order
														Details</a>
												</div>
											</div>
											{/*!--End Collapse --*/}

											{/*!--Collapse--*/}
											<div className="nav-item">
												<a className="nav-link dropdown-toggle"
												   href="#navbarVerticalMenuPagesEcommerceCustomersMenu" role="button"
												   data-bs-toggle="collapse"
												   data-bs-target="#navbarVerticalMenuPagesEcommerceCustomersMenu"
												   aria-expanded="false"
												   aria-controls="navbarVerticalMenuPagesEcommerceCustomersMenu">
													Customers
												</a>

												<div id="navbarVerticalMenuPagesEcommerceCustomersMenu"
													 className="nav-collapse collapse "
													 data-bs-parent="#navbarVerticalMenuPagesMenuEcommerce">
													<a className="nav-link "
													   href="./ecommerce-customers.html">Customers</a>
													<a className="nav-link " href="./ecommerce-customer-details.html">Customer
														Details</a>
													<a className="nav-link " href="./ecommerce-add-customers.html">Add
														Customers</a>
												</div>
											</div>
											{/*!--End Collapse --*/}
										</div>

										<a className="nav-link " href="./ecommerce-referrals.html">Referrals</a>
										<a className="nav-link " href="./ecommerce-manage-reviews.html">Manage
											Reviews</a>
										<a className="nav-link " href="./ecommerce-checkout.html">Checkout</a>
									</div>
								</div>
								{/*!--End Collapse --*/}

								{/*!--Collapse--*/}
								<div className="nav-item">
									<a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesProjectsMenu"
									   role="button" data-bs-toggle="collapse"
									   data-bs-target="#navbarVerticalMenuPagesProjectsMenu" aria-expanded="false"
									   aria-controls="navbarVerticalMenuPagesProjectsMenu">
										<i className="bi-stickies nav-icon"></i>
										<span className="nav-link-title">Projects</span>
									</a>

									<div id="navbarVerticalMenuPagesProjectsMenu" className="nav-collapse collapse "
										 data-bs-parent="#navbarVerticalMenuPagesMenu">
										<a className="nav-link " href="./projects.html">Overview</a>
										<a className="nav-link " href="./projects-timeline.html">Timeline</a>
									</div>
								</div>
								{/*!--End Collapse --*/}

								{/*!--Collapse--*/}
								<div className="nav-item">
									<a className="nav-link dropdown-toggle " href="#navbarVerticalMenuPagesProjectMenu"
									   role="button" data-bs-toggle="collapse"
									   data-bs-target="#navbarVerticalMenuPagesProjectMenu" aria-expanded="false"
									   aria-controls="navbarVerticalMenuPagesProjectMenu">
										<i className="bi-briefcase nav-icon"></i>
										<span className="nav-link-title">Project</span>
									</a>

									<div id="navbarVerticalMenuPagesProjectMenu" className="nav-collapse collapse "
										 data-bs-parent="#navbarVerticalMenuPagesMenu">
										<a className="nav-link " href="./project.html">Overview</a>
										<a className="nav-link " href="./project-files.html">Files</a>
										<a className="nav-link " href="./project-activity.html">Activity</a>
										<a className="nav-link " href="./project-teams.html">Teams</a>
										<a className="nav-link " href="./project-settings.html">Settings</a>
									</div>
								</div>
								{/*!--End Collapse --*/}

								{/*!--Collapse--*/}
								<div className="nav-item">
									<a className="nav-link dropdown-toggle  collapsed" href="#" role="button"
									   data-bs-toggle="collapse" data-bs-target="#navbarVerticalMenuAuthentication"
									   aria-expanded="false" aria-controls="navbarVerticalMenuAuthentication">
										<i className="bi-shield-lock nav-icon"></i>
										<span className="nav-link-title">Authentication</span>
									</a>

									<div id="navbarVerticalMenuAuthentication" className="nav-collapse collapse "
										 data-bs-parent="#navbarVerticalMenu">
										<div id="navbarVerticalMenuAuthenticationMenu">
											{/*!--Collapse--*/}
											<div className="nav-item">
												<a className="nav-link dropdown-toggle "
												   href="#navbarVerticalMenuAuthenticationLoginMenu" role="button"
												   data-bs-toggle="collapse"
												   data-bs-target="#navbarVerticalMenuAuthenticationLoginMenu"
												   aria-expanded="false"
												   aria-controls="navbarVerticalMenuAuthenticationLoginMenu">
													Log In
												</a>

												<div id="navbarVerticalMenuAuthenticationLoginMenu"
													 className="nav-collapse collapse "
													 data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
													<a className="nav-link "
													   href="./authentication-login-basic.html">Basic</a>
													<a className="nav-link "
													   href="./authentication-login-cover.html">Cover</a>
												</div>
											</div>
											{/*!--End Collapse --*/}

											{/*!--Collapse--*/}
											<div className="nav-item">
												<a className="nav-link dropdown-toggle "
												   href="#navbarVerticalMenuAuthenticationSignupMenu" role="button"
												   data-bs-toggle="collapse"
												   data-bs-target="#navbarVerticalMenuAuthenticationSignupMenu"
												   aria-expanded="false"
												   aria-controls="navbarVerticalMenuAuthenticationSignupMenu">
													Sign Up
												</a>

												<div id="navbarVerticalMenuAuthenticationSignupMenu"
													 className="nav-collapse collapse "
													 data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
													<a className="nav-link "
													   href="./authentication-signup-basic.html">Basic</a>
													<a className="nav-link "
													   href="./authentication-signup-cover.html">Cover</a>
												</div>
											</div>
											{/*!--End Collapse --*/}

											{/*!--Collapse--*/}
											<div className="nav-item">
												<a className="nav-link dropdown-toggle "
												   href="#navbarVerticalMenuAuthenticationResetPasswordMenu"
												   role="button" data-bs-toggle="collapse"
												   data-bs-target="#navbarVerticalMenuAuthenticationResetPasswordMenu"
												   aria-expanded="false"
												   aria-controls="navbarVerticalMenuAuthenticationResetPasswordMenu">
													Reset Password
												</a>

												<div id="navbarVerticalMenuAuthenticationResetPasswordMenu"
													 className="nav-collapse collapse "
													 data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
													<a className="nav-link "
													   href="./authentication-reset-password-basic.html">Basic</a>
													<a className="nav-link "
													   href="./authentication-reset-password-cover.html">Cover</a>
												</div>
											</div>
											{/*!--End Collapse --*/}

											{/*!--Collapse--*/}
											<div className="nav-item">
												<a className="nav-link dropdown-toggle "
												   href="#navbarVerticalMenuAuthenticationEmailVerificationMenu"
												   role="button" data-bs-toggle="collapse"
												   data-bs-target="#navbarVerticalMenuAuthenticationEmailVerificationMenu"
												   aria-expanded="false"
												   aria-controls="navbarVerticalMenuAuthenticationEmailVerificationMenu">
													Email Verification
												</a>

												<div id="navbarVerticalMenuAuthenticationEmailVerificationMenu"
													 className="nav-collapse collapse "
													 data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
													<a className="nav-link "
													   href="./authentication-email-verification-basic.html">Basic</a>
													<a className="nav-link "
													   href="./authentication-email-verification-cover.html">Cover</a>
												</div>
											</div>
											{/*!--End Collapse --*/}

											{/*!--Collapse--*/}
											<div className="nav-item">
												<a className="nav-link dropdown-toggle "
												   href="#navbarVerticalMenuAuthentication2StepVerificationMenu"
												   role="button" data-bs-toggle="collapse"
												   data-bs-target="#navbarVerticalMenuAuthentication2StepVerificationMenu"
												   aria-expanded="false"
												   aria-controls="navbarVerticalMenuAuthentication2StepVerificationMenu">
													2-step Verification
												</a>

												<div id="navbarVerticalMenuAuthentication2StepVerificationMenu"
													 className="nav-collapse collapse "
													 data-bs-parent="#navbarVerticalMenuAuthenticationMenu">
													<a className="nav-link "
													   href="./authentication-2-step-verification-basic.html">Basic</a>
													<a className="nav-link "
													   href="./authentication-2-step-verification-cover.html">Cover</a>
												</div>
											</div>
											{/*!--End Collapse --*/}

											<a className="nav-link" href="javascript:;" data-bs-toggle="modal"
											   data-bs-target="#welcomeMessageModal">Welcome Message</a>
											<a className="nav-link " href="./error-404.html">Error 404</a>
											<a className="nav-link " href="./error-500.html">Error 500</a>
										</div>
									</div>
								</div>
								{/*!--End Collapse --*/}

								<div className="nav-item">
									<a className="nav-link " href="./api-keys.html" data-placement="left">
										<i className="bi-key nav-icon"></i>
										<span className="nav-link-title">API Keys</span>
									</a>
								</div>

								<div className="nav-item">
									<a className="nav-link " href="./welcome-page.html" data-placement="left">
										<i className="bi-eye nav-icon"></i>
										<span className="nav-link-title">Welcome Page</span>
									</a>
								</div>

								<div className="nav-item">
									<a className="nav-link " href="./landing.html" data-placement="left">
										<i className="bi-box-seam nav-icon"></i>
										<span className="nav-link-title">Landing Page <span
											className="badge bg-info rounded-pill ms-1">New</span></span>
									</a>
								</div>
							</div>
							{/*!--End Collapse --*/}

							<span className="dropdown-header mt-4">Apps</span>
							<small className="bi-three-dots nav-subtitle-replacer"></small>

							<div className="nav-item">
								<a className="nav-link " href="./apps-kanban.html" data-placement="left">
									<i className="bi-kanban nav-icon"></i>
									<span className="nav-link-title">Kanban</span>
								</a>
							</div>

							<div className="nav-item">
								<a className="nav-link " href="./apps-calendar.html" data-placement="left">
									<i className="bi-calendar-week nav-icon"></i>
									<span className="nav-link-title">Calendar</span>
								</a>
							</div>

							<div className="nav-item">
								<a className="nav-link " href="./apps-invoice-generator.html" data-placement="left">
									<i className="bi-receipt nav-icon"></i>
									<span className="nav-link-title">Invoice Generator</span>
								</a>
							</div>

							<div className="nav-item">
								<a className="nav-link " href="./apps-file-manager.html" data-placement="left">
									<i className="bi-folder2-open nav-icon"></i>
									<span className="nav-link-title">File Manager</span>
								</a>
							</div>

							<span className="dropdown-header mt-4">Layouts</span>
							<small className="bi-three-dots nav-subtitle-replacer"></small>

							<div className="nav-item">
								<a className="nav-link " href="./layouts/index.html" data-placement="left">
									<i className="bi-grid-1x2 nav-icon"></i>
									<span className="nav-link-title">Layouts</span>
								</a>
							</div>

							<span className="dropdown-header mt-4">Documentation</span>
							<small className="bi-three-dots nav-subtitle-replacer"></small>

							<div className="nav-item">
								<a className="nav-link " href="./documentation/index.html" data-placement="left">
									<i className="bi-book nav-icon"></i>
									<span className="nav-link-title">Documentation <span
										className="badge bg-primary rounded-pill ms-1">v2.1</span></span>
								</a>
							</div>

							<div className="nav-item">
								<a className="nav-link " href="./documentation/typography.html" data-placement="left">
									<i className="bi-layers nav-icon"></i>
									<span className="nav-link-title">Components</span>
								</a>
							</div>
						</div>

					</div>
					{/*!--End Content --*/}

					{/*!--Footer--*/}
					<div className="navbar-vertical-footer">
						<ul className="navbar-vertical-footer-list">
							<li className="navbar-vertical-footer-list-item">
								{/*!--Style Switcher --*/}
								<div className="dropdown dropup">
									<button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle"
											id="selectThemeDropdown" data-bs-toggle="dropdown" aria-expanded="false"
											data-bs-dropdown-animation>

									</button>

									<div className="dropdown-menu navbar-dropdown-menu navbar-dropdown-menu-borderless"
										 aria-labelledby="selectThemeDropdown">
										<a className="dropdown-item" href="#" data-icon="bi-moon-stars"
										   data-value="auto">
											<i className="bi-moon-stars me-2"></i>
											<span className="text-truncate" title="Auto (system default)">Auto (system default)</span>
										</a>
										<a className="dropdown-item" href="#" data-icon="bi-brightness-high"
										   data-value="default">
											<i className="bi-brightness-high me-2"></i>
											<span className="text-truncate" title="Default (light mode)">Default (light mode)</span>
										</a>
										<a className="dropdown-item active" href="#" data-icon="bi-moon"
										   data-value="dark">
											<i className="bi-moon me-2"></i>
											<span className="text-truncate" title="Dark">Dark</span>
										</a>
									</div>
								</div>

								{/*!--End Style Switcher --*/}
							</li>

							<li className="navbar-vertical-footer-list-item">
								{/*!--Other Links --*/}
								<div className="dropdown dropup">
									<button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle"
											id="otherLinksDropdown" data-bs-toggle="dropdown" aria-expanded="false"
											data-bs-dropdown-animation>
										<i className="bi-info-circle"></i>
									</button>

									<div className="dropdown-menu navbar-dropdown-menu-borderless"
										 aria-labelledby="otherLinksDropdown">
										<span className="dropdown-header">Help</span>
										<a className="dropdown-item" href="#">
											<i className="bi-journals dropdown-item-icon"></i>
											<span className="text-truncate"
												  title="Resources &amp; tutorials">Resources &amp; tutorials</span>
										</a>
										<a className="dropdown-item" href="#">
											<i className="bi-command dropdown-item-icon"></i>
											<span className="text-truncate"
												  title="Keyboard shortcuts">Keyboard shortcuts</span>
										</a>
										<a className="dropdown-item" href="#">
											<i className="bi-alt dropdown-item-icon"></i>
											<span className="text-truncate"
												  title="Connect other apps">Connect other apps</span>
										</a>
										<a className="dropdown-item" href="#">
											<i className="bi-gift dropdown-item-icon"></i>
											<span className="text-truncate" title="What's new?">What's new?</span>
										</a>
										<div className="dropdown-divider"></div>
										<span className="dropdown-header">Contacts</span>
										<a className="dropdown-item" href="#">
											<i className="bi-chat-left-dots dropdown-item-icon"></i>
											<span className="text-truncate"
												  title="Contact support">Contact support</span>
										</a>
									</div>
								</div>
								{/*!--End Other Links --*/}
							</li>

							<li className="navbar-vertical-footer-list-item">
								{/*!--Language--*/}
								<div className="dropdown dropup">
									<button type="button" className="btn btn-ghost-secondary btn-icon rounded-circle"
											id="selectLanguageDropdown" data-bs-toggle="dropdown" aria-expanded="false"
											data-bs-dropdown-animation>
										<img className="avatar avatar-xss avatar-circle"
											 src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
											 alt="United States Flag"/>
									</button>

									<div className="dropdown-menu navbar-dropdown-menu-borderless"
										 aria-labelledby="selectLanguageDropdown">
										<span className="dropdown-header">Select language</span>
										<a className="dropdown-item" href="#">
											<img className="avatar avatar-xss avatar-circle me-2"
												 src="./assets/vendor/flag-icon-css/flags/1x1/us.svg" alt="Flag"/>
											<span className="text-truncate" title="English">English (US)</span>
										</a>
										<a className="dropdown-item" href="#">
											<img className="avatar avatar-xss avatar-circle me-2"
												 src="./assets/vendor/flag-icon-css/flags/1x1/gb.svg" alt="Flag"/>
											<span className="text-truncate" title="English">English (UK)</span>
										</a>
										<a className="dropdown-item" href="#">
											<img className="avatar avatar-xss avatar-circle me-2"
												 src="./assets/vendor/flag-icon-css/flags/1x1/de.svg" alt="Flag"/>
											<span className="text-truncate" title="Deutsch">Deutsch</span>
										</a>
										<a className="dropdown-item" href="#">
											<img className="avatar avatar-xss avatar-circle me-2"
												 src="./assets/vendor/flag-icon-css/flags/1x1/dk.svg" alt="Flag"/>
											<span className="text-truncate" title="Dansk">Dansk</span>
										</a>
										<a className="dropdown-item" href="#">
											<img className="avatar avatar-xss avatar-circle me-2"
												 src="./assets/vendor/flag-icon-css/flags/1x1/it.svg" alt="Flag"/>
											<span className="text-truncate" title="Italiano">Italiano</span>
										</a>
										<a className="dropdown-item" href="#">
											<img className="avatar avatar-xss avatar-circle me-2"
												 src="./assets/vendor/flag-icon-css/flags/1x1/cn.svg" alt="Flag"/>
											<span className="text-truncate" title="中文 (繁體)">中文 (繁體)</span>
										</a>
									</div>
								</div>

								{/*!--End Language --*/}
							</li>
						</ul>
					</div>
					{/*!--End Footer --*/}
				</div>
			</div>
		</aside>
	);
};

export default Menu;
