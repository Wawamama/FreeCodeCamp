function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let avgAlt = 1;
  
  let getOrbitalPeriod = obj => {
    let orbitalPeriod = (2*Math.PI)*(Math.sqrt(Math.pow(obj.avgAlt + earthRadius, 3)/GM));
    orbitalPeriod = Math.round(orbitalPeriod)
    return { name: obj.name, orbitalPeriod: orbitalPeriod}
  }

  // create new array
  let array = [];
  arr.forEach(obj => array.push(getOrbitalPeriod(obj)))
  
  return array;
 
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])