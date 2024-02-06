import React, {useEffect, useMemo, useRef, useState} from 'react';
import './ProductsPage.css'
import logo from '../../../assets/product1.png';
import {Redirect, useHistory, useParams} from "react-router-dom";
import Input from "../../../ui-components/Admin/Input";
import SubmitButton from "../../../ui-components/Admin/SubmitButton";
import api from "../../../api";
import useAPI from "../../../provider/useAPI";
import {getProductImageName} from "../../../utils/getProduct";
import ProductImage from "../../../ui-components/ProductImage";
import {translations} from "../../../info";
import Checkbox from '@mui/material/Checkbox';
import {ADD_PRODUCTS} from "../../../provider/actions/products";
import {data} from "../../../data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Loader from "../../../ui-components/Loader";
import InputFileUpload from "../../../ui-components/InputFileUpload";
import DeletePopUp from "../../../ui-components/DeletePopUp";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

export const PRODUCTS = "PRODUCTS";
export const ORDERS = "ORDERS";
export const REGULAR_PRODUCTS = "REGULAR_PRODUCTS";
export const BRACELET_PRODUCTS = "BRACELET_PRODUCTS";
export const SHELL_PRODUCTS = "SHELL_PRODUCTS";
export const COLORS = "COLORS";
export const ATTACHMENTS = "ATTACHMENTS";

const ProductsPage = () => {

	const {state: {products, lang}} = useAPI();
	const [data, setData] = useState(products)
	const [redirect, setRedirect] = useState(false);
	const [loading, setLoading] = useState(false)
	const [deleting, setDeleting] = useState(null);
	const [copy, setCopy] = useState(false)
	const [pageLoading, setPageLoading] = useState(false)
	const {id} = useParams()

	const scrollRef = useRef(null);

	const scrollDown = () => {
		if (scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	useEffect(() => setData(products), [products])

	const deleteProduct = async () => {
		const {_id} = deleting;
		setLoading(_id)
		try {
			const {data: {success}} = await api.products.deleteById({_id})
			if (success) setData(curData => curData.filter(prod => prod._id !== _id))
		} catch (e) {
			console.error(e)
		} finally {
			setDeleting(null)
			setLoading(false);
		}
	}

	const handleProductClick = (productId, {target: {tagName}}) => {
		if (tagName === 'DIV' || tagName === 'IMG') setRedirect(`/admin/${productId}`);
	};

	const changeKeyValue = async (newObj) => {
		setLoading(newObj._id)
		try {
			const {data: {success, data: responseData}} = await api.products.updateKeyValueById(newObj)
			if (success) setData(curData => curData.map(prod => prod._id === responseData._id ? responseData : prod))
		} catch (e) {
			console.error(e)
		} finally {
			setLoading(false)
		}
	}

	const pickedProduct = useMemo(() => Array.isArray(data) ? data?.find(item => item?._id === id) : [], [id, data])

	const deleteImg = () => {}
	const deleteSeashell = () => {}
	const deleteVariationsImg = () => {}

	const copyProduct = async () => {
		const {_id} = copy
		setLoading(_id)
		try {
			const {data: { success, data: responseData }} = await api.products.copyById({_id})
			if (success) {
				setData(curData => ([...curData, {...responseData, active: true}]))
				scrollDown();
			}
		} catch (e) {
			console.error(e)
		} finally {
			setCopy(false)
			setLoading(false)
		}
	}

	// Function to update list on drop
	const handleDrop = (droppedItem) => {
		const { destination, source, draggableId } = droppedItem;
		// Ignore drop outside droppable container
		if (!droppedItem || !destination || (destination.droppableId === source.droppableId && destination.index === source.index)) {
			return;
		}
		var updatedList = [...data];
		// Remove dragged item
		const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
		// Add dropped item
		updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
		// Update State
		setData(updatedList);
		try {
			setPageLoading(true)
			api.products.updateOrder(updatedList.map(item => item._id))
		} catch (e) {
			console.error(e)
		} finally {
			setPageLoading(false)
		}
	};


	return (
		<div className={`list__container ${id && pickedProduct ? 'flex' : ''}`}>
			<Typography variant="h5" gutterBottom className="admin-product-title">
				{id ? <ArrowBackIcon onClick={() => setRedirect('/admin/')}/> : ""}
				{id ? `Товар #${id}` : ''}
			</Typography>

			{id && pickedProduct
				? <div className="product__edit">
					<Button className="delete__product" onClick={() => setDeleting(pickedProduct)}>Видалити товар</Button>
					<div className="images__edit images">
						{Boolean(pickedProduct?.seashells?.length) && (<>
							<h5>Seashells Images</h5>
							{pickedProduct?.seashells.map((seashellArr, index) => (
								<div className="images__row variation">
									Мушля {index}
									{seashellArr.map(seashell => {
										return (<div className="images__edit-item">
											<ProductImage imageName={seashell}/>
											<div className="actions__images">
												<InputFileUpload/>
												{seashellArr.length !== 1
													? <Button className="delete" onClick={(e) => deleteSeashell(e, seashell)}>
														<i className="bi bi-trash"></i></Button>
													: ""}
											</div>
										</div>)
									})}
									<div className="general__actions">
										<InputFileUpload title="Додати фото"/>
										{pickedProduct.variations.length !== 1 && pickedProduct.variations[0].images.length !== 1
											? <Button className="delete" onClick={(e) => deleteVariationsImg(e)}>
												Видалити мушлю <i className="bi bi-trash"></i>
											</Button>
											: ""}
									</div>
								</div>
							))}
						</>)}
						{Boolean(pickedProduct?.variations?.length && pickedProduct.variations[0].images?.length) && (<>
							<h5>Variation Images</h5>
							{pickedProduct?.variations.map((variation, index) => (
								<div className="images__row variation">
									Варіація {index + 1}
									{variation.images.map(img => {
										return (<div className="images__edit-item">
											<ProductImage imageName={img}/>
											<div className="actions__images">
												<InputFileUpload/>
												{variation.images.length !== 1
													? <Button className="delete" onClick={(e) => deleteVariationsImg(e, img)}>
														<i className="bi bi-trash"></i></Button>
													: ""}
											</div>
										</div>)
									})}
									<div className="general__actions">
										<InputFileUpload title="Додати фото"/>
										{pickedProduct.variations.length !== 1 && pickedProduct.variations[0].images.length !== 1
											? <Button className="delete" onClick={(e) => deleteVariationsImg(e)}>
												Видалити варіацію <i className="bi bi-trash"></i>
											</Button>
											: ""}
									</div>
								</div>
							))}
						</>)}
						{Boolean(pickedProduct?.images?.length) && (<>
							<h5>General Images</h5>
							{pickedProduct.images.map(item => {
								return (<div className="images__edit-item">
									<ProductImage imageName={item}/>
									<div className="actions__images">
										<InputFileUpload/>
										{pickedProduct.images.length !== 1
											? <Button className="delete" onClick={(e) => deleteImg(e, item)}>
												<i className="bi bi-trash"></i></Button>
											: ""}
									</div>
								</div>)
							})}
						</>)}
					</div>
					{Object.keys(pickedProduct).map(key => {
						if (key === '_id' || key !== 'variations' || key === 'colors' || key === 'size' || key === 'images') {
							return (
								<div className="edit__item">
									{key}: {pickedProduct[key]?.[lang]}
								</div>
							)
						}
					})}
				</div>
				: <>
					<label className="search__label">
						<i className="bi bi-search"></i>
						<input className="search" type="search" placeholder="Шукати товар..."/>
					</label>

					<div className="list-titles">
						<div className="pro-image">В наявності</div>
						<div className="pro-image">Картинка</div>
						<div className="pro-title">Ім'я</div>
						<div className="category">Категорія</div>
						<div className="price">Ціна</div>
						<div className="actions">Дії</div>
					</div>
					<div className="list-items">
						{Array.isArray(data) && data.length &&
							<DragDropContext onDragEnd={handleDrop}>
								<Droppable droppableId="list-container">
									{(provided) => (
										<div
											className="list-container"
											{...provided.droppableProps}
											ref={provided.innerRef}
										>
											{data.map((item, key) => (
												<Draggable key={item._id} draggableId={item._id} index={key}>
													{(provided) => (
														<div
															onClick={(e) => handleProductClick(item._id, e)}
															className={`item-container list-item ${item?.active ? 'active' : ''} ${!item?.inStock ? 'hidden' : ''}`}
															ref={provided.innerRef}
															{...provided.dragHandleProps}
															{...provided.draggableProps}
														>
															<div className="inUse">
																<Loader isActive={loading === item?._id}/>
																<Checkbox checked={item?.inStock}
																		  onChange={() => changeKeyValue({
																			  _id: item._id,
																			  inStock: !item.inStock
																		  })}/>
															</div>
															<div className="image"><ProductImage
																imageName={getProductImageName(item)} alt=""
																width="30px"/></div>
															<div className="pro-title">{item.name[lang]}</div>
															<div className="category">{item.group}</div>
															<div
																className="price">{item.price?.[lang] || item.variations[0].price[lang]} {translations.product.currency[lang]}</div>
															<div className="actions">
																<Button className="edit" onClick={() => setCopy(item)}>
																	<i className="bi bi-copy"></i>
																</Button>
																<Button className="delete" onClick={() => setDeleting(item)}>
																	<i className="bi bi-trash"></i>
																</Button>
															</div>
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									)}
								</Droppable>
							</DragDropContext>
						}
						<div ref={scrollRef}/>
					</div>
				</>
			}
			{(deleting || copy) && <DeletePopUp isActive={(deleting || copy)?.name?.[lang]} onNo={() => deleting ? setDeleting(null) : setCopy(null)} onYes={deleting ? deleteProduct : copyProduct} from={deleting ? ` з бази даних?` : "в базу даних?"} alertText={deleting ? "" : translations.cart.copy[lang]}/>}
			{pageLoading && <Loader isActive={pageLoading}/>}
			{redirect && <Redirect to={redirect}/>}
		</div>
	);
};

export default ProductsPage;
