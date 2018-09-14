function sum(arr) {
  let len = arr.length;
  if (len == 0) {return 0;}
  return arr.pop() + sum(arr);
}

console.log(sum([2,8,6,12,3,4]));
