import React from 'react';
import './Color.css'

const Color = ({color, onChange, type, index}) => {

	if (type === 'add') {
		return (
			<div className="color__block add">
				<i className="add bi bi-pencil-square"></i>
				Додати колір
				<input
					type="color"
					className="color-input"
					onBlur={onChange}
					onSubmit={onChange}
				/>
			</div>
		);
	}
	return (
		<div className="color__block" style={{backgroundColor: color}} onClick={() => onChange(index)}>
			<i className="delete bi bi-trash"></i>
		</div>
	);
};

export default Color;
