import React from 'react';
import './Content.css'
import Products from "./Products";
import {Route, Switch} from "react-router-dom";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";

const Content = () => {
	return (
		<main id="content" role="main" className="main">
			{/*!--Content--*/}
			<Products/>
			<Switch>
				<Route path="/products" exact component={Products}/>
				<Route path="/products/add" component={AddProduct}/>
				<Route path="/products/edit/:product_id" component={EditProduct}/>
			</Switch>
			{/*!--End Content --*/}

			{/*!--Footer--*/}

			<div className="footer">
				<div className="row justify-content-between align-items-center">
					<div className="col">
						<p className="fs-6 mb-0">&copy; SHTOR. <span
							className="d-none d-sm-inline-block">2023 Htmlstream.</span>
						</p>
					</div>
					{/*!--End Col --*/}

					<div className="col-auto">
						<div className="d-flex justify-content-end">
							{/*!--List Separator --*/}
							<ul className="list-inline list-separator">
								<li className="list-inline-item">
									<a className="list-separator-link" href="#">FAQ</a>
								</li>

								<li className="list-inline-item">
									<a className="list-separator-link" href="#">License</a>
								</li>

								<li className="list-inline-item">
									{/*!--Keyboard Shortcuts Toggle --*/}
									<button
										className="btn btn-ghost-secondary btn btn-icon btn-ghost-secondary rounded-circle"
										type="button" data-bs-toggle="offcanvas"
										data-bs-target="#offcanvasKeyboardShortcuts"
										aria-controls="offcanvasKeyboardShortcuts">
										<i className="bi-command"></i>
									</button>
									{/*!--End Keyboard Shortcuts Toggle --*/}
								</li>
							</ul>
							{/*!--End List Separator --*/}
						</div>
					</div>
					{/*!--End Col --*/}
				</div>
				{/*!--End Row --*/}
			</div>

			{/*!--End Footer --*/}
		</main>);
};

export default Content;
