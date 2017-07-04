// Write a function that takes in a number and returns true if it is a
// power of 2. Otherwise, return false.
//
// You may want to use the `%` modulo operation. `5 % 2` returns the
// remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
// of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
//
// Difficulty: medium.
/*
check if the number is even,
if it is not then it will return false
if it is even then pass number/2 in is_power...


*/
function is_power_of_two(num) {
  if(num === 1)
    return true;
    
  if(num%2 !== 0 || num === 0 )
    return false;
    
  return is_power_of_two(num/2)
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //is_power_of_two")
console.log("===============================================")
    console.log('is_power_of_two(1) === true: ' + (is_power_of_two(1) === true))
    console.log('is_power_of_two(16) === true: ' + (is_power_of_two(16) === true))
    console.log('is_power_of_two(64) === true: ' + (is_power_of_two(64) === true))
    console.log('is_power_of_two(78) === false: ' + (is_power_of_two(78) === false))
    console.log('is_power_of_two(0) === false: ' + (is_power_of_two(0) === false))
console.log("===============================================")
