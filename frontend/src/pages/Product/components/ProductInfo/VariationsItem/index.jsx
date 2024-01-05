import React from 'react';
import './VariationsItem.css'
import CustomRadio from "../../../../../ui-components/CustomRadio";
import {translations} from "../../../../../info";
import useAPI from "../../../../../provider/useAPI";

const VariationsItem = ({variations, currentVariation, setCurrentOption, isInVariations, name, pickVariation}) => {

	const {state: { lang }} = useAPI();

	if (!variations || variations.length <= 1) return null;
	if (name === 'size' && variations?.length > 1 && isInVariations) return;

	console.log('name', name)
	console.log('isInVariations', isInVariations)
	return (
		<ul className={`variation ${name}`}>
			{variations.map((variation, index) => {
				const value = typeof variation === 'object' ? variation[0] : variation
				if (name === 'seashell') {
					console.log('`#${index + 1}`', `#${index + 1}`)
					console.log('value', value)
					console.log('currentVariation', currentVariation)
				}
				return (
					<li key={variation}>
						<CustomRadio
							checked={value === currentVariation}
							name={name}
							value={value}
							showValue={name === 'color'
								? translations.product.color[value][lang]
								: name === 'attachment'
									? translations.product.attachment[value][lang]
									: (name === 'image' || name === 'seashell')
										? `#${index + 1}`
										: value
							}
							onChange={(e) => {
								if (isInVariations) pickVariation(index, name)
								setCurrentOption(name, e.target.value);
							}}
						/>
					</li>
				)
			})}
		</ul>
	);
};

export default VariationsItem;
