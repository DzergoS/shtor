import React, {useEffect, useMemo, useState} from 'react';
import './ProductInfo.css';
import {useParams} from "react-router-dom";
import useAPI from "provider/useAPI";
import Sliders from "../Sliders/Sliders";
import {translations} from "info";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";
import CustomRadio from "ui-components/CustomRadio";
import {ADD_PRODUCT} from "provider/actions/cart";
import CheckIcon from '@mui/icons-material/Check';
import {Button} from "@mui/material";
import VariationsItem from "./VariationsItem";
import {isProductToSetVariationBySliding} from "./filters";
import {getImageIndexInVariation, getSeashellIndex} from "../../../../utils/getImageIndexInVariation";
import Description from "./Description/Description";
import CartPickerPopUp from "../CartPickerPopUp/CartPickerPopUp";

const ProductInfo = ({
     product, currentOptions, setCurrentOptions,
     currentVariationIndex, setCurrentVariationIndex, productText,
}) => {
    const {state: { lang }, dispatch} = useAPI()
    const [slider, setSlider] = useState(null)
    const [popUpSlider, setPopUpSlider] = useState();
    const [showPicker, setShowPicker] = useState(false);

    const initialSlide = getImageIndexInVariation(currentVariationIndex) === -1 ? 0 : getImageIndexInVariation(currentVariationIndex)
    console.log('initialSlide', initialSlide)
    const [currentSlide, setCurrentSlide] = useState(initialSlide)

    const images = useMemo(() => ([
        ...(product?.variations?.flatMap(variant => variant?.images) || []),
        ...(product?.images || []),
        ...(product?.seashells?.flatMap(array => array) || []),
    ]), [product]);

    const { group, size, color, seashells, variations } = product || {};

    const getVariationsProperty = (property, fallbackProperty) => product
        ? variations?.[0]?.[property]
            ? variations.map(variation => variation[property])
            : fallbackProperty
        : [];

    const isSizeInVariations = variations?.[0]?.size?.length
    const isColorInVariations = variations?.[0]?.color?.length
    const isMaterialInVariations = variations?.[0]?.material
    const isAttachmentInVariations = variations?.[0]?.attachment
    const isFeatureInVariations = variations?.[0]?.feature
    const isImagesInVariations = variations?.[0]?.images?.length
    const isPricesInVariations = variations?.[0]?.price?.ua
    const isSeashellsInProduct = seashells?.[0]?.[0]?.length

    const productSizes = !isSizeInVariations ? size : getVariationsProperty('size', []);
    const productColors = !isColorInVariations ? color : getVariationsProperty('color', [])
    const productMaterials = !isMaterialInVariations ? [] : getVariationsProperty('material')
    const productAttachments = !isAttachmentInVariations ? [] : getVariationsProperty('attachment')
    const productFeatures = !isFeatureInVariations ? [] : getVariationsProperty('feature')
    const productSeashells = !isSeashellsInProduct ? [] : product.seashells

    const {
        size: currentSize,
        color: currentColor,
        image: currentImage,
        seashell: currentSeashell,
        feature: currentFeature,
        material: currentMaterial,
        attachment: currentAttachment,
    } = currentOptions;

    const { title, description, price } = productText || {};
    const setCurrentOption = (key, value) => setCurrentOptions((prevOptions) => ({
        ...prevOptions,
        [key]: value,
    }))

    const [isAddingAnimation, setIsAddingAnimation] = useState(false);
    const addToCart = (quantity) => {
        setIsAddingAnimation(true)
        setTimeout(() => {
            setIsAddingAnimation(false)
            setShowPicker(false)
        }, 500)
        const { variations, ...productData } = product;

        let pickedProduct = {...productData}
        if (variations?.length) pickedProduct = { ...productData, ...variations[currentVariationIndex], _product_id:  productData?._id}
        if (!isSizeInVariations && currentSize) pickedProduct.size = currentSize
        if (!isColorInVariations && currentColor) pickedProduct.color = currentColor
        if (!isMaterialInVariations && currentMaterial) pickedProduct.material = currentMaterial
        if (!isAttachmentInVariations && currentAttachment) pickedProduct.attachment = currentAttachment
        if (!isSeashellsInProduct && currentImage) pickedProduct.image = currentImage
        if (isSeashellsInProduct && currentSeashell) pickedProduct.seashell = currentSeashell

        dispatch({
            type: ADD_PRODUCT,
            payload: {...pickedProduct, quantity}
        })
    }

    const showVariations = productSizes?.length > 1 || productColors?.length > 1 || productAttachments?.length > 1

    const pickVariation = (variationIndex, key) => {
        if (slider) {
            if (key !== 'seashell') setCurrentVariationIndex(variationIndex)
            if (isImagesInVariations || (isSeashellsInProduct && key === 'seashell')) {
                const slideIndex = isSeashellsInProduct ? getSeashellIndex(seashells, variationIndex) : getImageIndexInVariation(variations, variationIndex)
                slider.slickGoTo(slideIndex);
                popUpSlider.slickGoTo(slideIndex);
            }
        }
    };

    const showImagePicker = product?.name?.en?.toLowerCase() === 'seashell pendant' || product?.name?.en?.toLowerCase() === 'seashell set'
    const productTitle = useMemo(() => `${group}/${title}`, [product, lang])


    return (
        <div className="product-info">
            {product
                ? <>
                    <Sliders
                        slider={slider}
                        setSlider={setSlider}
                        slides={images}
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        initialSlide={initialSlide}
                        setCurrentVariationIndex={isProductToSetVariationBySliding(product) ? setCurrentVariationIndex : () => {}}
                    />
                    <div className="info-right">
                        <h2 className="product-title">{productTitle}</h2>
                        <Description description={description} currentSize={currentSize}/>

                        {showVariations
                            ? <div className="tabs-variations">
                                <VariationsItem
                                    variations={productSizes}
                                    currentVariation={currentSize}
                                    setCurrentOption={setCurrentOption}
                                    isInVariations={isSizeInVariations}
                                    name="size"
                                    pickVariation={pickVariation}
                                />
                                <VariationsItem
                                    variations={productColors}
                                    currentVariation={currentColor}
                                    setCurrentOption={setCurrentOption}
                                    isInVariations={isColorInVariations}
                                    name="color"
                                    pickVariation={pickVariation}
                                />
                                <VariationsItem
                                    variations={productAttachments}
                                    currentVariation={currentAttachment}
                                    setCurrentOption={setCurrentOption}
                                    isInVariations={isAttachmentInVariations}
                                    name="attachment"
                                    pickVariation={pickVariation}
                                />
                            </div>
                            : ""}
                        <p className="price">{translations.product.currency[lang]}{price}</p>
                        <Button className="add-to-cart" onClick={() => setShowPicker(true)}>
                            <CheckIcon/>
                            <span>{translations.product.addToCart[lang]}</span>
                        </Button>
                    </div>
                    <CartPickerPopUp
                        popUpSlider={popUpSlider}
                        setPopUpSlider={setPopUpSlider}
                        isAddingAnimation={isAddingAnimation}
                        addToCart={addToCart}
                        product={product}
                        price={price}
                        productTitle={productTitle}
                        currentOptions={currentOptions}
                        initialSlide={initialSlide}
                        showPicker={showPicker}
                        images={isSeashellsInProduct ? product?.seashells?.map(item => item?.[0]) : images}
                        setShowPicker={setShowPicker}
                        setCurrentVariationIndex={setCurrentVariationIndex}
                        currentVariationIndex={currentVariationIndex}
                        currentSlide={currentSlide}
                        setCurrentSlide={setCurrentSlide}
                        variationContainer={
                            showVariations
                                ? <div className="tabs-variations">
                                    <VariationsItem
                                        variations={productSizes}
                                        currentVariation={currentSize}
                                        setCurrentOption={setCurrentOption}
                                        isInVariations={isSizeInVariations}
                                        name="size"
                                        pickVariation={pickVariation}
                                    />
                                    <VariationsItem
                                        variations={productColors}
                                        currentVariation={currentColor}
                                        setCurrentOption={setCurrentOption}
                                        isInVariations={isColorInVariations}
                                        name="color"
                                        pickVariation={pickVariation}
                                    />
                                    <VariationsItem
                                        variations={productAttachments}
                                        currentVariation={currentAttachment}
                                        setCurrentOption={setCurrentOption}
                                        isInVariations={isAttachmentInVariations}
                                        name="attachment"
                                        pickVariation={pickVariation}
                                    />
                                </div>
                                : ""}
                    />
                </>
                : ""}
        </div>
    );
};

export default ProductInfo;
