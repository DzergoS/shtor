import React, {useEffect, useState} from 'react';
import './Admin.css'
import Header from "./Header";
import Menu from "./Menu";
import Content from "./Content";
import {useHistory} from "react-router-dom";
import api from "../api";
import Loader from "../ui-components/Admin/Loader";

const Admin = () => {

	const [isLoading, setIsLoading] = useState(true);
	const history = useHistory();

	const reqAuth = () => api.admin.auth.checkAuth()

	useEffect(() => {
		reqAuth()
			.catch(e => history.push('/auth/login'))
			.finally(() => setIsLoading(false))
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

		<Loader isActive={isLoading}/>

		</>)
};

export default Admin;
