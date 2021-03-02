function truncateString(str, num) {
  if (str.length>num) {
    let firstRegex = new RegExp('.' +'{'+num+'}')
    let newString = str.match(firstRegex)[0] + '...';
    return newString
  } else {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);