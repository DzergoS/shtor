import React, {useState} from 'react';
import './Auth.css'
import {useHistory} from "react-router-dom";
import api from "../../api";
import Loader from "../Loader";

const Auth = () => {
	const [form, setForm] = useState({
		email: "",
		password: "",
	});
	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const reqLogin = () => api.admin.auth.login(form)

	const onSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true)

		setTimeout(() => {
			reqLogin()
				.then(r => {
					console.log('res', r)
					history.push('/admin/panel');
				})
				.catch(e => {
					alert(e)
					history.push('/admin/panel');
				})
				.finally(() => setIsLoading(false));
		}, 1000)
	}
	// const register = () => api.admin.registration({})

	return (
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={onSubmit}>
					<div className="login100-form-logo"/>
					<div className="wrap-input100 validate-input" data-validate="Enter username">
						<input
							value={form.email}
							onChange={(e) => setForm({...form, email: e.target.value})}
							className="input100"
							type="text"
							name="username"
							placeholder="Логін"
							required
						/>
						<span className="focus-input100" data-placeholder=""></span>
					</div>
					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input
							value={form.password}
							onChange={(e) => setForm({...form, password: e.target.value})}
							className="input100"
							type="password"
							name="pass"
							placeholder="Пароль"
							required
						/>
						<span className="focus-input100 pass" data-placeholder=""></span>
					</div>
					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Вхід
						</button>
					</div>
				</form>
				<Loader isActive={isLoading}/>
			</div>
		</div>
);
};

export default Auth;
