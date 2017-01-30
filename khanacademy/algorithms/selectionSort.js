function selectionSort(arr){
  let min = 0;

  for (let i = 0; i < arr.length; i++){
    for (let j = i+1; j < arr.length; j++){
      if (arr[i] > arr[j]){
        min = arr[j];
        arr[j] = arr[i];
        arr[i] = min;
      }
    }
  }
  return arr;
}