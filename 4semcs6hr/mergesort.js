const mergeSort = nums => {
    if (nums.length < 2) {
        return nums
    }
    const middle = Math.floor(nums.length/2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
    const results = [];

    while (left.length && right.length){
        if (left[0] <= right[0]){
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    // while (left.length) {
    //     results.push(left.shift());
    // }
    // while (right.length) {
    //     results.push(right.shift());
    // }
    // return results;

    // return results.concat(left, right);

    return [...results, ...left, ...right];
}