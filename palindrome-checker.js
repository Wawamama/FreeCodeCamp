function palindrome(str) {
  let regex = /\W/g;
  let string = str.replace(regex, '').toUpperCase();
  string = string.replace('_', '');
  console.log(string)

  let checkArray = [];
  for (let i=0; i<string.length; i++) {
      if (string[i] == string[string.length-i-1]) {
        checkArray.push('yes')
      } else {
        checkArray.push('no')
      }
  }
  
  if (!checkArray.includes('no')) return true;
  return false;
}



palindrome("_eye");