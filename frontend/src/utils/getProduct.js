export const name = (product, lang) => {
	return product?.name?.[lang] || product.variations[0].name
}
