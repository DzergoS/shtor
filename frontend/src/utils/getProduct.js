export const getProductName = (product, lang) => product?.name?.[lang] || product.variations[0].name

export const getProductImageName = (product) =>
	product?.variations?.[0]?.images?.[0] || product?.images?.[0] || product?.seashells?.[0]?.[0]

export const getProductImageNameHover = (product) => product?.variations?.[0]?.images?.[1] || product?.images?.[1]
	|| product?.variations?.[0]?.images?.[0] || product?.images?.[0]
