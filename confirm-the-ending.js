function confirmEnding(str, target) {
  let myRegexp = new RegExp(target + '$');
  if (str.match(myRegexp)) {
      return true;
  } else { 
    return false}
}

confirmEnding("Bastian", "n");