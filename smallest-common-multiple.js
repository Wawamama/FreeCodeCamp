function smallestCommons(arr) {
  let sortedArr = arr.sort((a, b) => a-b);
  let smallestNum = sortedArr[0];
  let biggestNum = sortedArr[1];
  
  // find the greater common multipe
  let gdm = 1;
  for (let i = biggestNum; i>=smallestNum; i--) {
    gdm *= i;
  }

  // make array of all numbers we need to divide with
  const range = Array(biggestNum - smallestNum +1)
    .fill(0)
    .map((item,i) => item += i + smallestNum);

  
  // for every multiple of biggestnum, we check if it is  also divisible by every number in range
  for (let i=biggestNum; i<gdm; i+=biggestNum) {
    const multiple = range.every(number => i%number === 0)
    if (multiple) return i;
  }
  }





smallestCommons([2, 10]);