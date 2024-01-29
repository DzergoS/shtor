import React, {useEffect, useMemo, useState} from 'react';
import './Orders.css'
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import api from "../../../api";
import {translations} from "../../../info";
import PendingIcon from '@mui/icons-material/Pending';
import Button from "@mui/material/Button";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import product from "../../../pages/Product/Product";
import ProductImage from "../../../ui-components/ProductImage";
import {useParams, Redirect} from "react-router-dom";

const ukrainianMonths = {
	'01': 'січня',
	'02': 'лютого',
	'03': 'березня',
	'04': 'квітня',
	'05': 'травня',
	'06': 'червня',
	'07': 'липення',
	'08': 'серпення',
	'09': 'вересня',
	'10': 'жовтня',
	'11': 'листопаду',
	'12': 'груденя'
};

function formatDate(dateString) {
	const date = new Date(dateString);

	// Extract components
	const day = ('0' + date.getDate()).slice(-2);
	const month = ukrainianMonths[(('0' + (date.getMonth() + 1)).slice(-2))];
	const year = date.getFullYear().toString();

	// Construct the formatted date string
	return `${day} ${month} ${year}`;
}

const formatTime = (dateString) => {
	const date = new Date(dateString);

	const hours = ('0' + date.getHours()).slice(-2);
	const minutes = ('0' + date.getMinutes()).slice(-2);

	return `${hours}:${minutes}`
}

const originalDateString = '2024-01-28T20:38:21.946Z';
const formattedDate = formatDate(originalDateString);
console.log(formattedDate); // Output: 20:38 28.01.24


const Orders = ({orders}) => {
	console.log('page', orders)
	const [trackingNumber, setTrackingNumber] = useState("")
	const [pickedOrderIndex, setPickedOrderIndex] = useState(-1)
	const [isLoading, setIsLoading] = useState("");

	const { id } = useParams()

	const [redirect, setRedirect] = useState(false);

	// Function to handle the click event and set redirect state
	const handleOrderClick = (orderId) => {
		setRedirect(`/admin/order/${orderId}`);
	};

	const pickedOrder = useMemo(() => orders.find(item => item?._id === id), [id, orders])

	const sendTrackingNumber = async () => {
		setIsLoading("loading")
		try {
			const {email, language, shippingInfo, firstName, lastName, order_id } = id ? pickedOrder : orders[pickedOrderIndex]
			await api.order.sendTrackingNumber({
				order_id,
				email,
				language,
				tracking_id: trackingNumber,
				shipping_type: shippingInfo.type,
				first_name: firstName,
				last_name: lastName,
			})
			setIsLoading('success')
			setTimeout(() => {
				setPickedOrderIndex(-1)
				setIsLoading(false)
			}, 1000)
		} catch (e) {
			setIsLoading('error')
			setTimeout(() => {
				setPickedOrderIndex(-1)
				setIsLoading(false)
			}, 1000)
			console.error(e)
		}
	}

	return (
		<div className="orders__container">
			<Typography variant="h4" gutterBottom>Замовлення {id ? `#${id}` : ''}</Typography>

			{id
				? <div className="hover-info">
					<ul>
						{pickedOrder && Object.entries(pickedOrder).map(([key, value]) => {
							if (key === 'currency' || (key === 'additional' && !value )) return
							if (key === 'shippingInfo') {
								return Object.entries(value).map(([shippingKey, shippingValue]) => {
									return (<li key={shippingKey}><h4>{shippingKey}: </h4>{shippingValue}
									</li>)
								});
							}
							if (key === 'products') {
								return value.map((product, index) => {
									console.log('products value', product)
									return (
										<li className="products-li" key={index} style={{marginBottom: '10px'}}>
											<div>
												<ProductImage imageName={product.image}/>
											</div>
											<div className="product-details" style={{display: 'flex'}}>
												<div>{product.name.en} {product.quantity}</div>
												<div style={{marginLeft: 'auto'}}>
													{pickedOrder?.language === 'uk'
														? product.price.ua * product.quantity
														: product.price.en * product.quantity}
													{translations.product.currency[pickedOrder?.language === 'uk' ? 'ua' : 'en']}
												</div>
											</div>
										</li>
									)});
							}
							return (<li key={key}><h4>{key}: </h4>{typeof value === 'boolean' ? value ? 'так' : 'ні' : value}</li>);
						})}
					</ul>
					<div className="virovni">
						<TextField id="filled-basic" label="Tracking Number" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)}/>
						<Button variant="contained" onClick={sendTrackingNumber}>
							{isLoading === 'loading'
								? <PendingIcon/>
								:  isLoading === 'success'
									? <DoneAllIcon/>
									: isLoading === 'error'
										? <ReportGmailerrorredIcon/>
										: <>Віправити на {orders.find(item => item?._id === id)?.email}</>}
						</Button>
					</div>
				</div>
				: <TableContainer component={Paper}>
					<Table className="table" sx={{minWidth: 650}} size="small" aria-label="a dense table">
						<TableHead>
							<TableRow>
								<TableCell>Опис</TableCell>
								<TableCell align="center">Actions</TableCell>
								<TableCell align="center">Ім'я</TableCell>
								<TableCell align="center">Адреса</TableCell>
								<TableCell align="center">Сума</TableCell>
								<TableCell align="center">Час</TableCell>
								<TableCell align="center">Дата</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{orders?.map((row, index) => (
								<TableRow
									key={index}
									sx={{'&:last-child td, &:last-child th': {border: 0}}}
									className={`orders-row ${index === pickedOrderIndex ? 'active' : '' }`}
									onClick={() => handleOrderClick(row._id)}
								>
									<TableCell scope="row">
										{row.approved && !row.trackingSent ? <Button variant="contained" onClick={() => setPickedOrderIndex(index)}>трекінг</Button> : ''}
									</TableCell>
									<TableCell component="th" scope="row">
										{row.orderDescription}
										{index === pickedOrderIndex
											? <div className="tracking-number">
												<TextField id="filled-basic" label="Tracking Number" value={trackingNumber} onChange={e => setTrackingNumber(e.target.value)}/>
												<Button variant="contained" onClick={sendTrackingNumber}>
													{isLoading === 'loading'
														? <PendingIcon/>
														:  isLoading === 'success'
															? <DoneAllIcon/>
															: isLoading === 'error'
																? <ReportGmailerrorredIcon/>
																: <>Віправити на {row.email}</>}
												</Button>
												<Button variant="outlined" onClick={() => setPickedOrderIndex(-1)}>Скасувати</Button>
											</div>
											: ""
										}
									</TableCell>
									<TableCell align="center">{row.shippingInfo.firstName} {row.shippingInfo.lastName}</TableCell>
									<TableCell align="center">{row.shippingInfo.city}, {row.shippingInfo.countryRegion}</TableCell>
									<TableCell align="center">{row.amount} {row.language === 'uk' ? translations.product.currency.ua : translations.product.currency.en}</TableCell>
									<TableCell align="center">{formatTime(row.createdAt)}</TableCell>
									<TableCell align="center">{formatDate(row.createdAt)}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			}
			{redirect && <Redirect to={redirect} />}
		</div>
	);
};

export default Orders;
