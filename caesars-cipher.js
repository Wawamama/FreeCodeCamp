function rot13(str) {
  let strArray = str.split(' ');
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  let newString = [];
  
  strArray.forEach( (word) => {
    let newLetters = [];
    for (let i = 0; i<word.length; i++) {
      
      if (!alphabet.includes(word[i])) {
        newLetters.push(word[i])
      }
      let index = alphabet.indexOf(word[i])+1;
      let newIndex = index + 12;

       if (newIndex <=25 && alphabet.includes(word[i])) {
         newLetters.push(alphabet[newIndex]);
      } else {
         let iindex = newIndex - 26;
         newLetters.push(alphabet[iindex])
      } // end else   
    } // end for
    
    newString.push(newLetters.join(''))
   }) // end forEach

   return newString.join(' ');
   
}

console.log(rot13("SERR YBIR?"));