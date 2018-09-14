function count(arr){
  let len = arr.length;
  if(len == 0) {return 0;}
  arr.pop();
  return 1 + count(arr);
}

console.log(count([2,8,6,12,3,4]));
