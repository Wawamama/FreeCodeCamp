function largestOfFour(arr) {
  let bigArray = [];
  arr.forEach((arr) => {
    let biggestNum = Math.max(...arr);
    bigArray.push(biggestNum);
  })
  return bigArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);