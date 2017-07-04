// Write a function that takes in a string and an array of indices in the
// string. Produce a new string, which contains letters from the input
// string in the order specified by the indices of the array of indices.
//
// Difficulty: medium.
//make the string into an array
//then store each char with using the position as an element
function scramble_string(string, positions) {
  var scrambled = "";
  var array = string.split("");
  for(var i =0; i<array.length; i++){
    scrambled +=array[positions[i]]
  }
  return scrambled;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //scramble_string")
console.log("===============================================")
    console.log(
      'scramble_string("abcd", [3, 1, 2, 0]) == "dbca": ' +
      (scramble_string("abcd", [3, 1, 2, 0]) == "dbca")
    )
    console.log(
      'scramble_string("markov", [5, 3, 1, 4, 2, 0]) == "vkaorm"): ' +
      (scramble_string("markov", [5, 3, 1, 4, 2, 0]) == "vkaorm")
    )
console.log("===============================================")
