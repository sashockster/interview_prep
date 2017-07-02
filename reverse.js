// Write a function that will take a string as input, and return a new
// string with the same letters in reverse order.
//
//
// Difficulty: easy.

function reverse(string) {
//  return string.split("").reverse().join("")
    var revStr = ""
  for(var i =string.length-1;i>=0;i--){
    revStr+=string.charAt(i);
  }
  return revStr;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for reverse")
console.log("===============================================")
    console.log(
      'reverse("abc") == "cba": ' + (reverse("abc") == "cba")
    )
    console.log(
      'reverse("a") == "a": ' + (reverse("a") == "a")
    )
    console.log(
      'reverse("") == "": ' + (reverse("") == "")
    )
console.log("===============================================")