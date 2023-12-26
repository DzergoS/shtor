import React from 'react';
import './Auth.css'
import {ReactComponent as User} from "../../assets/admin/user.svg";
import {ReactComponent as Pass} from "../../assets/admin/pass.svg";

const Auth = () => {
	return (
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form">
					<span className="login100-form-logo">
						<i className="zmdi zmdi-landscape"></i>
					</span>
					<div className="wrap-input100 validate-input" data-validate="Enter username">
						<input className="input100" type="text" name="username" placeholder="Логін"/>
							<span className="focus-input100" data-placeholder=""></span>
					</div>
					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" placeholder="Пароль"/>
							<span className="focus-input100 pass" data-placeholder=""></span>
					</div>
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Вхід
						</button>
					</div>
				</form>
			</div>
		</div>
);
};

export default Auth;
