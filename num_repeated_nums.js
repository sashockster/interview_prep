// Write a function that takes in a string and returns the number of
// letters that appear more than once in the string. You may assume
// the string contains only lowercase letters. Count the number of
// letters that repeat, not the number of times they repeat in the
// string.
//
// Difficulty: hard.
/*
create a for loop that will look at each element in the array and if they match then add to the var increment
*/

function num_repeats(string) {
  var amount = 0;
  var array = string.split("").sort();
  var i =0;
  while( i<array.length){
    var diffenece = 1;
    if(array.indexOf(array[i])!=array.lastIndexOf(array[i])){
      diffenece = array.lastIndexOf(array[i]) -i +1;
      amount++;
    }
    i+=diffenece;
  }
  return amount;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.
console.log("\nTests for //num_repeats")
console.log("===============================================")
    console.log('num_repeats("abdbc") == 1: ' + (num_repeats('abdbc') == 1))
    // one character is repeated
    console.log('num_repeats("aaa") == 1: ' + (num_repeats('aaa') == 1))
    console.log('num_repeats("abab") == 2: ' + (num_repeats('abab') == 2))
    console.log('num_repeats("cadac") == 2: ' + (num_repeats('cadac') == 2))
    console.log('num_repeats("abcde") == 0: ' + (num_repeats('abcde') == 0))
console.log("===============================================")
