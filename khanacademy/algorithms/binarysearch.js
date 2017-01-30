var doSearch = function(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;
    
  while (max >= min){
    guess = Math.floor((max+min)/2);
    console.log(guess, array[guess], min, max)
    if (array[guess] === targetValue){
      return guess;
    } else if (array[guess] < targetValue){
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
  
};