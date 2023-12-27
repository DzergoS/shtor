import React, {useEffect, useState} from 'react';
import './Admin.css'
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import {useHistory} from "react-router-dom";
import api from "../api";
import AdminLoader from "../ui-components/AdminLoader";

const Admin = () => {

	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const reqProducts = () => api.admin.products.get()

	useEffect(() => {
		// reqProducts()
		// 	.then(r => console.log('r', r))
		// 	.catch(e => {
		// 		console.log(e)
		// 	})
		// 	.finally(() => setIsLoading(false))
	}, [])

	return (<>

		{isLoading
			? ""
			: <div className="panel__container">

				<Header/>

				<main className="main__container">

					<Menu/>

					<Content/>

				</main>

			</div>}

		<AdminLoader isActive={isLoading}/>

		</>)
};

export default Admin;
