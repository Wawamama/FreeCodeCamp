function getIndexToIns(arr, num) {
  // sort the array first
  let sortedArray = arr.sort((a,b) => a - b);

  // find the first element 'true' to >= num
  let index = sortedArray.find((index) => {
    return (index >= num);
  });
  // find its index
  let returnValue = sortedArray.indexOf(index);
  
  // return the index if there's a match.
  // if nothing is found, the indexOf will be -1
  if (returnValue >= 0 && returnValue <= arr.length) {
    return returnValue;
  } else if (returnValue > arr.length) {
      return 0;
  } else if (returnValue <0){
      return sortedArray.length;
  }
}

getIndexToIns([2, 5, 10], 15);