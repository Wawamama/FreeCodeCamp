function steamrollArray(arr) {
  
  let nestedArr = [];
  // create function that checks if argument is an array and return the element if it is not
  const recursArray = arg => {
    if (!Array.isArray(arg)) {
       nestedArr.push(arg);
    } else {
      arg.forEach(element => recursArray(element));
    }
  }

  // call the recursArray function for each element
  for (let i = 0; i<arr.length; i++) {
    recursArray(arr[i]);
  }
  
  return nestedArr;

}

steamrollArray([1, [2], [3, [[4]]]]);