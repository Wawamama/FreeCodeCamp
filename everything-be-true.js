function truthCheck(collection, pre) {
  
  // create a function that checks if a value is truthy
  const checkTruthy = value => { 
    if (value) return true;
    return false;
  }

  // create a function that check if a property exists and is truthy within an object
  const checkProperty = (obj, property) => { 
    if (obj.hasOwnProperty(property) && checkTruthy(obj[property]))  return true;
    return false;
  }

  // check if every object in the array 'collection' meets the conditions of checkProperty
  if (collection.every(obj => checkProperty(obj, pre))) {
    return true
  } else {
    return false
  }
}

truthCheck([{"user": "Tinky-Winky", "sex": "mole"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": ""}, {"user": "Po", "sex": "female"}], "sex");