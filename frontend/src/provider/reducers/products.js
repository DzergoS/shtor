import { ADD_PRODUCTS } from "provider/actions/products";
import {sortProducts} from "../../utils/sortProducts";

const PRODUCTS_TO_SPREAD_VARIATIONS_FOR_LIST = [
	"намисто з мушлями"
]


const productsReducer = (state, action) => {
	switch (action.type) {
		case ADD_PRODUCTS:
			console.log('action.payload', action.payload)
			return {
				...state,
				allProducts: action.payload,
				productsToShow: Array.isArray(action.payload)
					? action.payload?.map(item => ({...item, link: `/${item._id}`}))
					// ? action.payload?.reduce((accumulator, currentObject) => {
					// 	currentObject.link = `/${currentObject._id}`
					// 	// if (PRODUCTS_TO_SPREAD_VARIATIONS_FOR_LIST.includes(currentObject?.name?.ua || currentObject?.name?.en))
					// 	// 	currentObject.variations.forEach((variation, variationIndex) => {
					// 	// 		accumulator.push({
					// 	// 			...currentObject,
					// 	// 			...variation,
					// 	// 			variations: [],
					// 	// 			variationIndex,
					// 	// 			link: `${currentObject.link}/${variationIndex}`,
					// 	// 			_id,
					// 	// 		});
					// 	// 	});
					// 	// else
					// 	accumulator.push(currentObject);
					// 	return accumulator;
					// }, [])
					: [],
			};
		default:
			return state;
	}
};

export default productsReducer;
