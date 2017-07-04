// Write a function that takes an array of numbers. If a pair of numbers
// in the array sums to zero, return the positions of those two numbers.
// If no pair of numbers sums to zero, return `null`.
//
// Difficulty: medium.
/*
we can do a for loop that checks each element
each check will do an indexof for the negative version of the element
if true return elements

*/
function two_sum(nums) {
  for(var i =0; i<nums.length;i++){
    if(nums.indexOf(-nums[i]) !== -1){
          reverse = nums.indexOf(-nums[i]);
            return [i, reverse];
    }
  }
  return null;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //two_sum")
console.log("===============================================")
    console.log(
      'two_sum([1, 3, 5, -3]) == [1, 3]: ' + (two_sum([1, 3, 5, -3]).toString() == [1, 3].toString())
    )
    console.log(
      'two_sum([1, 3, 5]) == nil: ' + (two_sum([1, 3, 5]) == null)
    )
console.log("===============================================")
