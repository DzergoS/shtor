import React from 'react';
import './CustomRadio.css'

const CustomRadio = ({name, value, showValue, checked, onChange, type}) => {

	console.log(`${name} - ${value} - ${showValue}`);
	

	return (
		<label className={`custom-radio ${name} ${checked ? 'checked' : ''}`}>
			<input name={name} checked={checked} type={type || "radio"} value={value} onChange={onChange} hidden/>
			<div className="custom-radio__switch"/>
			<span className="custom-radio__value">{showValue}</span>
		</label>
	);
};

export default CustomRadio;
