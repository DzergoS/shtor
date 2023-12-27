import React from 'react';
import {ReactComponent as LoaderIcon} from "../../assets/admin/Vanilla-1s-280px.svg";
import './AdminLoader.css'

const AdminLoader = ({isActive}) => {
	return (
		<div className={`loader__wrapper ${isActive ? "active" : ""}`}>
			<div className="loader__container">
				<LoaderIcon/>
			</div>
		</div>
	);
};

export default AdminLoader;
