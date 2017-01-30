// O(n^2) worst case when u pass in sorted array if pivot is always last element

 const quickSort = nums => {
     if (nums.length <= 1) return nums;

     const pivot = nums[nums.length-1];
     const left = [];
     const right = [];

     for (let i = 0; i < nums.length-1; i++){
         if (nums[i] < pivot){
             left.push(nums[i]);
         } else {
             right.push(nums[i]);
         }
     }

     return [...quickSort(left), pivot, ...quickSort(right)]

 }