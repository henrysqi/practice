const mergeSort = nums => {
	if (nums.length < 2) {
		return nums;
	}
	let middle = Math.floor(nums.length/2);
	let left = nums.slice(0, middle);
	let right = nums.slice(middle);
	
	let sortedLeft = mergeSort(left);
	let sortedRight = mergeSort(right);
	
	return stitch(sortedLeft, sortedRight);
	
}

const stitch = (left, right) => {
	const result = [];
	while (left.length && right.length) {
		result.push(left[0] < right[0] ? left.shift() : right.shift());
	}
	return [...result, ...left, ...right]
}