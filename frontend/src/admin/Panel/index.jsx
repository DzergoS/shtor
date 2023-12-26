import React, {useEffect, useState} from 'react';
import './Panel.css'
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Loader from "../Loader";
import api from "../../api";
import {useHistory} from "react-router-dom";
import Cookies from "js-cookie";

const Panel = () => {

	const [isLoading, setIsLoading] = useState(false);
	const [hasAccessToken, setHasAccessToken] = useState(false)
	const history = useHistory();

	const reqProducts = () => api.admin.products.get()

	useEffect(() => {
		const accessToken = Cookies.get();
		console.log(accessToken);

		if (Cookies.get()) {
			setHasAccessToken(true)
			reqProducts()
				.then(r => console.log('r', r))
				.catch(e => {
					console.log(e)
				})
				.finally(() => setIsLoading(false))
		} else history.push('/auth/login')
	}, [])

	return hasAccessToken
		? <>
			{isLoading
				? ""
				: <div className="panel__container">

					<Header/>

					<main className="main__container">

						<Menu/>

						<Content/>

					</main>

					<Loader/>

				</div>}
			<Loader isActive={isLoading}/>
		</>
		: "";
};

export default Panel;
