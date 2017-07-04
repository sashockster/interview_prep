// Write a function that takes in a string. Your function should return the
// most common letter in the array, and a count of how many times it
// appears.
//
// Difficulty: medium.
/*
sort of the array, do a for loop 
compare the index with last indexof store that in the array
 
 for each compare the amount stored in the array with the current difference
  if bigger than whats in the current array then replace with current and
 make the i equal to lastindeof

*/
function most_common_letter(string) {
  var array = string.split("").sort();
  var returnedArray = [array[i],0];
  var i =0;
  while(i<array.length){
  var difference =  array.lastIndexOf(array[i]) - i +1;
    if(difference> returnedArray[1]){
      returnedArray[0] = array[i]
      returnedArray[1] = difference;
    }
  i=i+difference;  
  }
  return returnedArray;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //most_common_letter")
console.log("===============================================")
    console.log(
      'most_common_letter("abca") == ["a", 2]: ' +
      (most_common_letter('abca').toString() == ['a', 2]).toString()
    )
    console.log(
      'most_common_letter("abbab") == ["b", 3]: ' +
      (most_common_letter('abbab').toString() == ['b', 3].toString())
    )
console.log("===============================================")
