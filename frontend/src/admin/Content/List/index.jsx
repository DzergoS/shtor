import React, {useEffect, useState} from 'react';
import './List.css'
import logo from '../../../assets/product1.png';
import {useHistory} from "react-router-dom";
import Input from "../../../ui-components/Admin/Input";
import SubmitButton from "../../../ui-components/Admin/SubmitButton";
import api from "../../../api";

const good = [{
	title: "title prod",
	category: "category",
	price: 20,
	variants: 3,
},{
	title: "title prod",
	category: "category",
	price: 20,
	variants: 3,
},{
	title: "title prod",
	category: "category",
	price: 20,
	variants: 3,
}];

export const PRODUCTS = "PRODUCTS";
export const ORDERS = "ORDERS";
export const REGULAR_PRODUCTS = "REGULAR_PRODUCTS";
export const BRACELET_PRODUCTS = "BRACELET_PRODUCTS";
export const SHELL_PRODUCTS = "SHELL_PRODUCTS";
export const COLORS = "COLORS";
export const ATTACHMENTS = "ATTACHMENTS";

const List = ({type}) => {

	const history = useHistory();

	const deleteProduct = (e, item) => {
		e.stopPropagation()
		alert(`delete ${item.title}`)
	}

	const editProduct = (item) => {
		alert(`edit ${item.title}`)
	}

	const [data, setData] = useState([]);

	useEffect(() => {
		if (type === PRODUCTS) {
			setData(good)
		}
		if (type === ORDERS) {
			setData(good)
		}
		if (type === REGULAR_PRODUCTS) {
			setData(good)
		}
		if (type === BRACELET_PRODUCTS) {
			setData(good)
		}
		if (type === SHELL_PRODUCTS) {
			setData(good)
		}
		if (type === COLORS) {
			// setData(['#fff', '#000', '#123321'])
			api.admin.colors.get()
				.then(({data: { data: response }}) => {
					setData(response)
				})
				.catch(error => {
					console.error(error)
					alert('Кольори не отримались з Серверу')
				})
		}
		if (type === ATTACHMENTS) {
			api.admin.attachments.get()
				.then(({data: { data: response }}) => {
					console.log(response)
					setData(response)
				})
				.catch(error => {
					console.error(error)
					alert('Кольори не отримались з Серверу')
				})
			setData(good)
		}
		if (type === PRODUCTS) {
			setData(good)
		}
	}, []);

	if (type === ATTACHMENTS) {
		const saveAttachments = (e) => {
			e.preventDefault();
			api.admin.attachments.save(data)
				.then(({data: {data: response}}) => {
					alert('Підвіси збережені')
					console.log('response', response)
					setData(response)
				})
				.catch(error => {
					console.error(error)
					alert('Підвіси не збережені')
				})
		}

		const renderDoubleInput = (label, valueUA, onChangeUA, valueEN, onChangeEN) => (
			<div key={label} className="input__container double">
				<Input type="text" prefix="UA" label={label} value={valueUA} onChange={onChangeUA} required />
				<Input type="text" prefix="EN" value={valueEN} onChange={onChangeEN} required />
			</div>
		);

		const handleInputChange = (i, lang, value) => {
			setData((prevData) =>
				prevData.map((attach, indx) =>
					indx === i
						? {
							name: {
								...attach.name,
								[lang]: value,
							}
						}
						: attach
				)
			);
		};

		return (
			<form className="list__container" onSubmit={saveAttachments}>
				<div className="list-items">
					{data.map((attachment, i) => (
						renderDoubleInput(
							`#${i}`,
							attachment.name?.ua,
							(e) => handleInputChange(i, 'ua', e.target.value),
							attachment.name?.en,
							(e) => handleInputChange(i, 'en', e.target.value)
						)
					))}
				</div>
				<SubmitButton text="Зберегти кольори" />
			</form>
		);



	}

	if (type === COLORS) {
		const saveColors = (e) => {
			e.preventDefault();
			api.admin.colors.save(data)
				.then(({data: { data: response }}) => {
					alert('Кольори збережені')
					setData(response)
				})
				.catch(error => {
					console.error(error)
					alert('Кольори не збережені')
				})
		}

		return (
			<form className="list__container" onSubmit={saveColors}>
				<div className="list-items">
					<div className={`input__container ${type}`}>
						<Input type="color" labelH2="Усі кольори" value={data} onChange={(e) => setData(e.target.value)} required />
					</div>
				</div>
				<SubmitButton text="Зберегти кольори" />
			</form>
		)
	}

	return (
		<div className="list__container">
			<label className="search__label">
				<i className="bi bi-search"></i>
				<input className="search" type="search" placeholder="Шукати товар..."/>
			</label>

			<div className="list-titles">
				{type !== ORDERS
					? <>
						<div className="pro-image">Картинка</div>
						<div className="pro-title">Ім'я</div>
						<div className="category">Категорія</div>
						<div className="price">Ціна</div>
						<div className="variants">Варіанти</div>
						<div className="actions">Дії</div>
					</>
					: <>
						<div className="order-id">ID замовленяя</div>
						<div className="order-name">Ім'я клієнту</div>
						<div className="order-date">Дата</div>
						<div className="order-sum">Сума</div>
						<div className="order-actions">Дії</div>
					</>
				}
			</div>
			<div className="list-items">
				{good.map((item, key) => (
					<div key={key} className="list-item" onClick={() => editProduct(item)}>
						{type !== ORDERS
							? <>
								<div className="image">
									<img src={logo} alt="" width="30px"/>
								</div>
								<div className="pro-title">{item.title}</div>
								<div className="category">{item.category}</div>
								<div className="price">{item.price}</div>
								<div className="variants">{item.variants}</div>
								<div className="actions">
									<button className="edit"><i className="bi bi-gear-fill"></i></button>
									<button className="delete" onClick={(e) => deleteProduct(e, item)}><i className="bi bi-trash"></i></button>
								</div>
							</>
							: <>
								<div className="order-id">ID замовленяя</div>
								<div className="order-name">Ім'я клієнту</div>
								<div className="order-date">Дата</div>
								<div className="order-sum">Сума</div>
								<div className="order-actions">Дії</div>
							</>
						}
					</div>
				))}
			</div>
		</div>
	);
};

export default List;
