function addTogether() {
  // function to check if smth is a number
  const isNumber = number => typeof(number) === 'number';

  // case with only one argument :
  if (!arguments[1]) {
    if (!isNumber(arguments[0])) {
      return undefined;   
    }
    // return function 
    const addSecond = (secondNum) => {
      if (!isNumber(secondNum)) {
        return undefined;
      } else {
        return secondNum + arguments[0];
      }  
    }
    return addSecond;
  }

  // case with 2 arguments
  if (!isNumber(arguments[0]) || !isNumber(arguments[1])) {
    return undefined;
  }
  return arguments[0] + arguments[1];
}

addTogether(3);