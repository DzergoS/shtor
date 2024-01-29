import React, {useEffect, useState} from 'react';
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


const Orders = () => {
	const [orders, setOrders] = useState([])
	const [trackingNumber, setTrackingNumber] = useState("")
	const [pickedOrderIndex, setPickedOrderIndex] = useState(-1)
	const [isLoading, setIsLoading] = useState("");
	useEffect(() => {
		const requestData = async () => {
			const {data} = await api.order.get()
			setOrders(data.data)
		}

		requestData()
	}, [])

	const sendTrackingNumber = async () => {
		setIsLoading("loading")
		try {
			const {email, language, shippingInfo, firstName, lastName} = orders[pickedOrderIndex]
			await api.order.sendTrackingNumber({
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
	console.log(orders)
	return (
		<div className="orders__container">
			<Typography variant="h4" gutterBottom>Замовлення</Typography>

			<TableContainer component={Paper}>
				<Table className="table" sx={{minWidth: 650}} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Опис</TableCell>
							<TableCell align="center">Ім'я</TableCell>
							<TableCell align="center">Адреса</TableCell>
							<TableCell align="center">Сума</TableCell>
							<TableCell align="center">Час</TableCell>
							<TableCell align="center">Дата</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{orders.map((row, index) => (
							<TableRow
								key={index}
								sx={{'&:last-child td, &:last-child th': {border: 0}}}
								className={`orders-row ${index === pickedOrderIndex ? 'active' : '' }`}
								onClick={() => setPickedOrderIndex(index)}
							>
								<TableCell component="th" scope="row">
									{row.orderDescription}
									{index === pickedOrderIndex
										? <div className="tracking-number">
											<TextField id="filled-basic" label="Tracking Number" />
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
		</div>
	);
};

export default Orders;
