// Write a function that takes a string in and returns true if the letter
// "z" appears within three letters **after** an "a". You may assume
// that the string contains only lowercase letters.
//
// Difficulty: medium.

/*
index of a if true
do an additional index of
compare the postion minus a elment
return true if less than three
*/
function nearby_az(string) {
  var aElm = string.indexOf('a')
  if(aElm !== -1){
    var zElm = string.indexOf('z',aElm)
    if(zElm != -1 &&(zElm -aElm <=3))
      return true;
  }
    
    
  return false;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //nearby_az")
console.log("===============================================")
    console.log('nearby_az("baz") === true: ' + (nearby_az('baz') === true))
    console.log('nearby_az("abz") === true: ' + (nearby_az('abz') === true))
    console.log('nearby_az("abcz") === true: ' + (nearby_az('abcz') === true))
    console.log('nearby_az("a") === false: ' + (nearby_az('a') === false))
    console.log('nearby_az("z") === false: ' + (nearby_az('z') === false))
    console.log('nearby_az("za") === false: ' + (nearby_az('za') === false))
console.log("===============================================")