import React from 'react';
import './CustomRadio.css'

const CustomRadio = ({name, value, showValue, checked, onChange}) => {
	return (
		<label className={`custom-radio ${name} ${checked ? 'checked' : ''}`}>
			<input name={name} checked={checked} type="radio" value={value} onChange={onChange} hidden/>
			<div className="custom-radio__switch"/>
			<span className="custom-radio__value">{name === 'size' ? '' : showValue}</span>
		</label>
	);
};

export default CustomRadio;
