import React, { useState, useEffect } from 'react';
import isMobile from "utils/isMobile";

const addFolderLocation = (url) => `https://shtor.com.ua/productPhotos/${url}`;
const getFileNameAndExtension = (fullFileName) => {
	const lastDotIndex = fullFileName.lastIndexOf('.');
	const fileName = lastDotIndex !== -1 ? fullFileName.substring(0, lastDotIndex) : fullFileName;
	const fileExtension = lastDotIndex !== -1 ? fullFileName.substring(lastDotIndex + 1) : '';

	return { fileName, fileExtension };
}

const ProductImage = ({ imageName = '', ...props }) => {
	const [imageExists, setImageExists] = useState(true);

	const src = addFolderLocation(imageName);

	// const { fileName, fileExtension } = getFileNameAndExtension(imageName);
	// const mobileSrc = addFolderLocation(`${fileName}_mobile.${fileExtension}`);

	useEffect(() => {
		const checkImage = async () => {
			try {
				const response = await fetch(src);
				if (!response.ok) {
					setImageExists(false);
				}
			} catch (error) {
				setImageExists(false);
			}
		};

		checkImage();
	}, [imageName]);

	// const src = isMobile ? imageExists ? mobileSrc : src : imageExists ? src : mobileSrc

	return <img {...props} src={src} />
};

export default ProductImage;
