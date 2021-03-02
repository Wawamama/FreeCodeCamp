function chunkArrayInGroups(arr, size) {
  let newArray = [];
  for (let i=0; i<arr.length; i+=size) {
    let chunk = arr.slice(i, i+size);
    newArray.push(chunk);
  }
  return newArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);