function bouncer(arr) {
  const newArray = arr.filter((item) => {
    if (item !== 'false'|'null'|''|'undefined'|'NaN') {
      return item;
    }
  })
  return newArray;
}

bouncer([7, "ate", "", false, 9]);
console.log(bouncer([7, "ate", "", false, 9]));