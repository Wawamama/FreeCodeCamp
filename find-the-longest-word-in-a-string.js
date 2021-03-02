function findLongestWordLength(str) {
  let arrayString = str.split(' ');
  let arrayLength = [];
  arrayString.forEach((item) => {
    let itemLength = item.length;
    arrayLength.push(itemLength);
  })
  return (Math.max(...arrayLength))

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");