export const getImageIndexInVariation = (variations, variationIndex) => {
	if (variationIndex >= 0 && variationIndex < variations?.length) {
		return variations
			.slice(0, variationIndex)
			.reduce((totalCount, variation) => totalCount + variation.images.length, 0);
	}
	return -1;
};

export const getSeashellIndex = (seashells, variationIndex) => {
	if (variationIndex >= 0 && variationIndex < seashells?.length) {
		return seashells
			.slice(0, variationIndex)
			.reduce((totalCount, seashellArr) => totalCount + seashellArr.length, 0);
	}
	return -1;
};
