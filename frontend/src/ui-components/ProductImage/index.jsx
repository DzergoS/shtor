import React, { useState, useEffect } from 'react';
import {isMobile} from "../../utils/isMobile";

const addFolderLocation = (url) => `/productPhotos/${url}`;
const getFileNameAndExtension = (fullFileName) => {
	const lastDotIndex = fullFileName.lastIndexOf('.');
	const fileName = lastDotIndex !== -1 ? fullFileName.substring(0, lastDotIndex) : fullFileName;
	const fileExtension = lastDotIndex !== -1 ? fullFileName.substring(lastDotIndex + 1) : '';

	return { fileName, fileExtension };
}

const ProductImage = ({ imageName = '', ...props }) => {
	console.log('imageName', imageName)
	const [imageExists, setImageExists] = useState(true);

	const desktopSrc = addFolderLocation(imageName);

	const { fileName, fileExtension } = getFileNameAndExtension(imageName);
	const mobileSrc = addFolderLocation(`${fileName}_mobile.${fileExtension}`);

	useEffect(() => {
		const checkImage = async () => {
			try {
				const response = await fetch(isMobile ? mobileSrc : desktopSrc, { method: 'HEAD' });
				if (!response.ok) {
					setImageExists(false);
				}
			} catch (error) {
				setImageExists(false);
			}
		};

		checkImage();
	}, [imageName]);

	const src = isMobile ? imageExists ? mobileSrc : desktopSrc : imageExists ? desktopSrc : mobileSrc

	return <img {...props} src={src} />
};

export default ProductImage;
