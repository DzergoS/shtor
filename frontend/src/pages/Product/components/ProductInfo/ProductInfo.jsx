import React, {useEffect, useState} from 'react';
import './ProductInfo.css';
import {useParams} from "react-router-dom";
import useAPI from "provider/useAPI";
import Sliders from "./Sliders/Sliders";
import {translations} from "info";
import capitalizeFirstLetter from "utils/capitalizeFirstLetter";
import CustomRadio from "ui-components/CustomRadio";
import {ADD_PRODUCT} from "provider/actions/cart";

const ProductInfo = ({
     product, currentOptions, setCurrentOptions,
     currentVariationIndex, setCurrentVariationIndex, productText,
}) => {
    const {state: { lang }, dispatch} = useAPI()

    const [slider, setSlider] = useState(null)

    const images = [
        ...(product?.variations?.flatMap(variant => variant?.images) || []),
        ...(product?.images || []),
    ];

    const { group, size, color, variations } = product || {};

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

    const productSizes = !isSizeInVariations ? size : getVariationsProperty('size');
    const productColors = !isColorInVariations ? color : getVariationsProperty('color')
    const productMaterials = !isMaterialInVariations ? [] : getVariationsProperty('material')
    const productAttachments = !isAttachmentInVariations ? [] : getVariationsProperty('attachment')
    const productFeatures = !isFeatureInVariations ? [] : getVariationsProperty('feature')

    const getImageIndexInVariation = (variationIndex) => {
        if (variationIndex >= 0 && variationIndex < variations.length) {
            return variations
                .slice(0, variationIndex)
                .reduce((totalCount, variation) => totalCount + variation.images.length, 0);
        }
        return -1;
    };

    const pickVariation = (variationIndex) => {
        if (slider) {
            setCurrentVariationIndex(variationIndex)

            if (isImagesInVariations) {
                const slideIndex = getImageIndexInVariation(variationIndex)
                slider.slickGoTo(slideIndex);
            }
        }
    };

    const {
        size: currentSize,
        color: currentColor,
        feature: currentFeature,
        material: currentMaterial,
        attachment: currentAttachment,
    } = currentOptions;

    const { title, description, price } = productText || {};
    const setCurrentOption = (key, value) => setCurrentOptions((prevOptions) => ({
        ...prevOptions,
        [key]: value,
    }))

    const addToCart = () => {
        const { variations, ...productData } = product;

        let pickedProduct = {...productData}
        if (variations?.length) pickedProduct = { ...productData, ...variations[currentVariationIndex] }
        if (!isSizeInVariations && currentSize) pickedProduct.size = currentSize
        if (!isColorInVariations && currentColor) pickedProduct.color = currentColor
        if (!isMaterialInVariations && currentMaterial) pickedProduct.material = currentMaterial

        dispatch({
            type: ADD_PRODUCT,
            payload: pickedProduct
        })
    }

    const showVariations = productSizes?.length > 1 || productColors?.length > 1
        || productMaterials?.length > 1 || productAttachments?.length > 1
        || productFeatures?.length > 1

    const renderVariationOptions = (variations, currentVariation, setCurrentOption, isInVariations, name) => {
        if (!variations || variations.length <= 1) return null;

        return (
            <ul className={`variation ${name}`}>
                {variations.map((variation, index) => {
                    const value = typeof variation === 'object' ? variation[0] : variation
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
                                        : value
                                }
                                onChange={(e) => {
                                    if (isInVariations) pickVariation(index)
                                    setCurrentOption(e.target.value);
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
        );
    };

    return (
        <div className="product-info">
            {
                product
                    ? <>
                        <div className="slider-container">
                            {images?.length
                                ? <Sliders
                                    slider={slider}
                                    setSlider={setSlider}
                                    sliderImages={images}
                                    initialSlide={getImageIndexInVariation(currentVariationIndex)}
                                    setCurrentVariationIndex={
                                        isPricesInVariations && isImagesInVariations
                                        && !isAttachmentInVariations && !isMaterialInVariations
                                        && !isFeatureInVariations && !isSizeInVariations
                                        && !isColorInVariations
                                            ? setCurrentVariationIndex
                                            : () => {}
                                }
                                /> : ""}
                        </div>
                        <div className="info-right">
                            <h2 className="product-title">{group}/{title}</h2>
                            <div className="tabs-description">
                                <div className="tab-buttons">
                                    <button className="tab-button active">
                                        {translations.product.description[lang]}
                                    </button>
                                    <a className="tab-button" href="/care" target="_blank">
                                        {translations.infoPages.care.title[lang]}
                                    </a>
                                </div>
                                <div className="tab-content">
                                        <ul>
                                            {description?.map(string => (
                                                <li key={string}>{string}</li>
                                            ))}
                                            <li>
                                                {translations.product.size.title[lang]}: {currentSize} {translations.product.size.cm[lang]}
                                            </li>
                                        </ul>
                                </div>
                            </div>

                            {showVariations
                                ? <div className="tabs-variations">
                                    {productMaterials?.length > 1 && isSizeInVariations
                                        ? ""
                                        : renderVariationOptions(productSizes, currentSize, (v) => setCurrentOption('size', v), isSizeInVariations, 'size')}
                                    {renderVariationOptions(productColors, currentColor, (v) => setCurrentOption('color', v), isColorInVariations, 'color')}
                                    {renderVariationOptions(productMaterials, currentMaterial, (v) => setCurrentOption('material', v), isMaterialInVariations, 'materials')}
                                    {renderVariationOptions(productAttachments, currentAttachment, (v) => setCurrentOption('attachment', v), isAttachmentInVariations, 'attachment')}
                                    {renderVariationOptions(productFeatures, currentFeature, (v) => setCurrentOption('feature', v), isFeatureInVariations, 'feature')}
                                </div>
                                : ""}
                            <p className="price">{translations.product.currency[lang]}{price}</p>
                            <button className="add-to-cart" onClick={addToCart}>{translations.product.addToCart[lang]}</button>
                        </div>
                    </>
                    : ""
            }
        </div>
    );
};

export default ProductInfo;
