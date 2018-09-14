function max(arr){
  let max = arr.pop();
  if (arr.length == 0) {return max;}
  while(arr.length > 0) {
    let current = arr.pop();
  	if (current > max) {
    	max = current;
  	}
  }
 return max;
}


console.log(max([2,8,16,12,3,4]));
