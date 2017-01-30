function bubbleSort(n){
  let solved = false;
  while (!solved){
  	solved = true;
    for (let i = 0; i < n.length-1; i++){
    	if (n[i] > n[i+1]){
    		let temp = n[i+1];
    		n[i+1] = n[i];
    		n[i] = temp;
    		solved = false;
    	}
    }
  }
  return n
}