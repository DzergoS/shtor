import { Fragment, useEffect, useState } from "react";
import '../../pages/Product/components/ProductInfo/ProductInfo.css';
import { Box, Button, Modal, Typography } from "@mui/material";
import { useCart } from "react-use-cart";
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import { CloseSharp } from '@mui/icons-material';
import { FormControl, FormLabel, Radio, RadioGroup, Sheet } from "@mui/joy";
import { radioClasses } from '@mui/joy/Radio';

export default function CartPopup({ ProductImg, open, handleClose, productTitle, productItem }) {

    const {
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const [openToast, setOpenToast] = useState(false);
    const [selectedImg, setSelectedImg] = useState(ProductImg);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#4a4949',
        p: 3,
    };

    useEffect(() => {
        if (open === true)
            setOpenToast({ visible: true, message: 'added to cart', color: 'success' })
    }, [open])

    return (
        <>

            {openToast.visible && <Snackbar
                variant="soft"
                color="success"
                open={openToast.visible}
                autoHideDuration={1000}
                onClose={() => setOpenToast({ ...openToast, visible: false })}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
                endDecorator={
                    <Button
                        onClick={() => setOpenToast(false)}
                        size="sm"
                        variant="soft"
                        color="success"
                    >
                        Dismiss
                    </Button>
                }
            >
                {productTitle} added to cart.
            </Snackbar>}

            <Modal
                open={open}
                onClose={() => { handleClose(); removeItem(productItem.id) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography style={{ "cursor": "pointer" }} onClick={() => handleClose()} fontSize={20} marginBottom={0.2} textAlign={"right"} color={"#fff"}>
                        <CloseSharp size={30} />
                    </Typography>

                    <Typography fontFamily={"Lexend"} fontSize={14} marginBottom={2} color={"#fff"}>
                        {productItem.name}
                    </Typography>


                    <div className="slider-container">
                        <div className="slider">
                            <div className="slide">
                                <img src={selectedImg} alt="product" style={{ background: "#000", objectFit: 'contain' }} height={300} width={'100%'} />
                            </div>
                        </div>
                    </div>

                    {items.filter(res => res.id === productItem.id).map((item, key) => (
                        <Fragment key={key}>
                            {productItem.variations && <Box paddingTop={1}>
                                <Typography color={"#fff"} marginBottom={1.5} marginTop={2} fontSize={14} fontWeight={300}>Your {productTitle}</Typography>

                                <RadioGroup
                                    aria-label="platform"
                                    defaultValue="/img/frstProduct.jpg"
                                    overlay
                                    onChange={(e) => {
                                        setSelectedImg(e.target.value)
                                        updateItemQuantity(item.id, item.quantity, item.quantity, e.target.value)
                                    }}
                                    name="platform"
                                    sx={{
                                        flexDirection: 'row',
                                        gap: 1,
                                        overflowX: "scroll",
                                        overflowY: "hidden",
                                        borderRadius: 0,
                                        [`& .${radioClasses.checked}`]: {
                                            [`& .${radioClasses.action}`]: {
                                                inset: -1,
                                            },
                                        },
                                        [`& .${radioClasses.radio}`]: {
                                            display: 'contents',
                                        },
                                    }}
                                >
                                    {productItem?.variations?.map((value, key) => (
                                        <Sheet
                                            key={key}
                                            variant="plain"
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Radio id={value} value={value} checkedIcon={<Box height={"2px"} position={'absolute'} bgcolor={"#fff"} left={0} bottom={0} right={0} zIndex={99}></Box>} />
                                            <img src={value} alt="" style={{ background: "#000", objectFit: 'contain' }} height={60} width={60} />
                                        </Sheet>
                                    ))}
                                </RadioGroup>
                            </Box>}

                            <Box marginBottom={2}>
                                <Box display={"flex"} paddingTop={2}>
                                    <Box display={"flex"} width={"100%"}>
                                        <button onClick={() => {
                                            if (item.quantity === 1) return
                                            updateItemQuantity(item.id, item.quantity - 1, item.quantity * item.price)
                                        }}>
                                            <Typography fontFamily={"Lexend"} fontSize={16} color={"#fff"}>-</Typography>
                                        </button>

                                        <Typography fontFamily={"Lexend"} fontWeight={"300"} paddingX={3} color={"#fff"}>
                                            {item.quantity}
                                        </Typography>

                                        <button onClick={() => updateItemQuantity(item.id, item.quantity + 1, item.quantity * item.price)}>
                                            <Typography fontFamily={"Lexend"} fontSize={16} color={"#fff"}>
                                                +
                                            </Typography>
                                        </button>
                                    </Box>

                                    <Typography fontFamily={"Lexend"} fontWeight={"300"} marginY={"auto"} fontSize={16} color={"#fff"}>${item.price}</Typography>
                                </Box>

                                {productItem?.type && <Box paddingTop={1.5} paddingX={1}>
                                    <FormControl>
                                        <RadioGroup defaultValue="orbit" size="sm" name="radio-buttons-group">
                                            {
                                                productItem?.type?.map((res, key) => (
                                                    <Radio key={key} value={res} label={res} variant="outlined" color="neutral" />
                                                ))
                                            }

                                        </RadioGroup>
                                    </FormControl>
                                </Box>}

                                <button style={{ marginTop: "24px" }} disabled={items.filter(res => res.id === productItem.id)} onClick={() => {
                                    setOpenToast(true);
                                    handleClose();
                                }} className="add-cart button-container-white">{items.filter(res => res.id === productItem.id) ? 'Added to Cart' : 'Add to cart'}</button>

                                <Box marginY={1} />

                                <button onClick={() => {
                                    removeItem(productItem.id)
                                    handleClose();
                                }} className="add-cart button-container-danger">Remove</button>
                            </Box>
                        </Fragment>
                    ))
                    }
                </Box>
            </Modal>

        </>
    )
}