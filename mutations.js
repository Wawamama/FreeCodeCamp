function mutation(arr) {
  //put everything in lowercase
  let lowerArray = [];
  for (let i=0; i<arr.length; i++) {
    lowerArray.push(arr[i].toLowerCase());
  }
  // transform every word into array
  let word1 = lowerArray[0].split('');
  let word2 = lowerArray[1].split('');
  
  //check if every item of word2 exists in word1
  const similar = word2.every((letter) => {
      let found = word1.includes(letter);
      return found;
  })
  return(similar);
}

mutation(["hello", "hElle"]);