function quickSort(arr){
  if(arr.length < 2) {return arr};
  let pivot = arr[0];
  let less = [];
  let more = [];
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {less.push(arr[i]);}
    else {more.push(arr[i]);}
  }

  return quickSort(less).concat(pivot).concat(quickSort(more));
}


console.log(quickSort([2,8,6,12,3,4]));
