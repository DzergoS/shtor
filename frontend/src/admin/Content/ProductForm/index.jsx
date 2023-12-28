import React, {useEffect, useState} from 'react';
import './ProductForm.css';
import {
	NATURE,
	OBERIH,
	OBJECT,
	PRODUCT_EDIT,
	SHELL_PRODUCT,
	REGULAR_PRODUCT,
	BRACELET_PRODUCT,
	ATTACHMENT_ORBIT, ATTACHMENT_CHAIN, ATTACHMENT_EMPTY
} from "./constants";
import Input from "../../../ui-components/Admin/Input";

const ProductForm = ({ type }) => {
	const [form, setForm] = useState({});

	const onSubmit = (e) => {
		e.preventDefault()
		console.log('formData', form)
	}

	useEffect(() => {
		switch (type) {
			case OBERIH:
				setForm(BRACELET_PRODUCT);
				break;
			case OBJECT:
				setForm(REGULAR_PRODUCT);
				break;
			case NATURE:
				setForm(SHELL_PRODUCT);
				break;
			default:
				setForm({});
		}
	}, [type]);


	const handleVariationInputChange = (index, key, subKey, inputValue) => {
		setForm((prevForm) => {
			const newVariations = prevForm.variations;
			const variationToUpdate = newVariations[index];

			if (subKey) {
				variationToUpdate[subKey] = inputValue;
			} else {
				variationToUpdate[key] = inputValue;
			}

			newVariations[index] = variationToUpdate;

			return {
				...prevForm,
				variations: newVariations,
			};
		});
	};



	const renderPriceInput = (value, i) => (
		<div className="input__container double">
			<Input
				type="number"
				prefix="UA"
				label="Ціна варіації"
				value={value.ua}
				onChange={(event) => handleVariationInputChange(i, 'price', 'ua', event.target.value)}
				required
			/>
			<Input
				type="number"
				prefix="EN"
				value={value.en}
				onChange={(event) => handleVariationInputChange(i, 'price', 'en', event.target.value)}
				required
			/>
		</div>
	);

	const renderSizeInput = (value, i) => (
		<div className="input__container plain">
			<Input
				type="text"
				label="Розмір варіації"
				value={value}
				onChange={(event) => handleVariationInputChange(i, 'size', null, event.target.value)}
				required
			/>
		</div>
	);

	const renderImageInput = (value, i) => (
		<div className="input__container image">
			<Input
				type="image"
				label="Картинка варіації"
				value={value}
				onChange={(event) => handleVariationInputChange(i, 'image', null, event.target.value)}
				required
			/>
		</div>
	);

	const renderAttachmentInput = (value, i) => (
		<div className="input__container attachment">
			<Input
				type="text"
				disabled
				label="Підвіс товару"
				value={value}
			/>
		</div>
	);

	const renderVariation = (variation, i) => (
		<div className="variations-item" key={i}>
			<h4>#{i + 1}</h4>
			{Object.entries(variation).map(([key, value], e) => (
				<div key={`${i}${e}`} className={`input__row ${key}`}>
					{key === 'price' && renderPriceInput(value, i)}
					{key === 'size' && renderSizeInput(value, i)}
					{key === 'attachment' && renderAttachmentInput(value, i)}
					{key === 'image' && renderImageInput(value, i)}
				</div>
			))}
		</div>
	);

	const renderVariations = (variations) => (
		variations.map((variation, i) => renderVariation(variation, i))
	);


	const renderDoubleInput = (label, valueUA, onChangeUA, valueEN, onChangeEN) => (
		<div className="input__container double">
			<Input type="text" prefix="UA" label={label} value={valueUA} onChange={onChangeUA} required />
			<Input type="text" prefix="EN" value={valueEN} onChange={onChangeEN} required />
		</div>
	);

	const renderTextAreaInput = (label, valueUA, onChangeUA, valueEN, onChangeEN) => (
		<div className="input__container double">
			<Input type="textarea" prefix="UA" label={label} value={valueUA} onChange={onChangeUA} required />
			<Input type="textarea" prefix="EN" value={valueEN} onChange={onChangeEN} required />
		</div>
	);

	const renderSelectInput = (label, options, value) => (
		<div className="input__container group">
			<Input type="select" label={label} options={options} value={value} disabled required />
		</div>
	);

	const renderSingleInput = (type, label, value, onChange, multiple) => (
		<div className={`input__container ${type}`}>
			<Input type={type} label={label} value={value} onChange={onChange} multiple={multiple} required />
		</div>
	);

	const renderContent = (key, value) => {
		let content = value;

		if (key === 'name' || key === 'price' || key === 'description') {
			const label = key === 'name' ? 'Назва товару' : key === 'price' ? 'Ціна товару' : 'Опис товару';
			content = key === 'description'
				? renderTextAreaInput(label, form[key].ua, (e) => setForm({ ...form, [key]: { ...form[key], ua: e.target.value } }),
					form[key].en, (e) => setForm({ ...form, [key]: { ...form[key], en: e.target.value } }))
				: renderDoubleInput(label, form[key].ua, (e) => setForm({ ...form, [key]: { ...form[key], ua: e.target.value } }),
					form[key].en, (e) => setForm({ ...form, [key]: { ...form[key], en: e.target.value } }));
		}

		if (key === 'group') {
			content = renderSelectInput('Група товару', [OBJECT, OBJECT, NATURE], form.group, (e) => setForm({ ...form, group: e.target.value }));
		}

		if (key === 'size') {
			content = renderSingleInput('plain', 'Розмір товару', form.size, (e) => setForm({ ...form, size: e.target.value }));
		}

		if (key === 'images' || key === 'colors') {
			const type = key === 'images' ? 'image' : 'color';
			content = renderSingleInput(type, key === 'images' ? 'Картинки товару' : 'Кольори товару', value, (e) => setForm({ ...form, [key]: e.target.value }), key === 'images');
		}

		if (key === 'variations') {
			return (
				<React.Fragment key={key}>
					<h5 className="variations__title">Варіації: </h5>
					<div className="variations__container">{renderVariations(value)}</div>
				</React.Fragment>
			);
		}

		return <div key={key} className={`input__row ${key}__container`}>{content}</div>;
	};


	const title = type === PRODUCT_EDIT ? 'Редагування товару' : 'Додавання товару';

	return (
		<form className="product__form" onSubmit={onSubmit}>
			<h2>{title}</h2>
			{Object.keys(form).map((key) => renderContent(key, form[key]))}
			<button type="submit" className="submit">Створити Товар</button>
		</form>
	);
};

export default React.memo(ProductForm);
