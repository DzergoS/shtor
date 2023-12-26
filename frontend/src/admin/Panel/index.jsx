import React, {useEffect, useState} from 'react';
import './Panel.css'
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Loader from "../Loader";
import api from "../../api";
import {useHistory} from "react-router-dom";

const Panel = () => {

	const [isLoading, setIsLoading] = useState(false);
	const history = useHistory();

	const reqProducts = () => api.admin.products.get()

	// useEffect(() => {
	// 	reqProducts()
	// 		.then(r => console.log('r', r))
	// 		.catch(e => {
	// 			alert(e)
	// 			history.push('/admin')
	// 		})
	// 		.finally(() => setIsLoading(false))
	// }, [])

	return (
		<>
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
	);
};

export default Panel;
