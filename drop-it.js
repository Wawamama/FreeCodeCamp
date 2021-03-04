function dropElements(arr, func) {
  let found = arr.find(func);
  if (!found) return [];
  return arr.splice(arr.indexOf(found), arr.length);
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >=3; }));