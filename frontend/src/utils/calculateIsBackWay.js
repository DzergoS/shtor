export const calculateIsBackWay = (oldIndex, newIndex, arrayLength) => {
	// Check if the new index is smaller than the old index
	let isBackWay = newIndex < oldIndex;

	// Check if it wraps around from the last index to the first index
	isBackWay |= (oldIndex === arrayLength - 1 && newIndex === 0);

	// Check if it wraps around from the first index to the last index
	isBackWay |= (oldIndex === 0 && newIndex === arrayLength - 1);

	return isBackWay;
}
