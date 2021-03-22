function telephoneCheck(str) {
  // I tried to create one regex but had trouble with a closing parenthesis being passed when there's no opening one. So I decided to use two different regex.

  const withParenthesis = /\(([0-9]{3})\)\s?([0-9]{3})(-|\s)?([0-9]{4}$)/g; //for parenthesis format
  const withoutParenthesis = /(?<!\()([0-9]{3})(\s|-)([0-9]{3})(-|\s)([0-9]{4}$)/g;
  // for other format
  const allInOne = /^[0-9]{10}$/g; // for 5556667777 format
  const hasCountryCode = /^-?[0-9]+(?=\s|\()/; // will check if a country code is used
  
  // if no country code :
  if (!hasCountryCode.test(str)) {
      if (withParenthesis.test(str) || withoutParenthesis.test(str) || allInOne.test(str)) {
          return true
      }
    }

  // if country code : we verify if it's the good one (1) :
  if (hasCountryCode.test(str) && str.match(hasCountryCode)[0]==1) { 
    if (withParenthesis.test(str) || withoutParenthesis.test(str) || allInOne.test(str)) {
         return true
      }
  }  

  // default if no condition is met :
  return false
}

console.log(telephoneCheck("555-555-5555"));