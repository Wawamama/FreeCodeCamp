function titleCase(str) {
  let fuckinRegex = /^\w|(?<=\s)\w/g;
  let lowerString = str.toLowerCase();
  let newString = lowerString.replace(fuckinRegex, function(word) {
    return word.toUpperCase();
  } )
  return (newString);
}
titleCase("I'm a liTTle tea pot");
console.log(titleCase("I'm a liTTle tea pot"));