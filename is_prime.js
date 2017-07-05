// Write a function that takes in an integer (greater than one) and
// returns true if it is prime; otherwise return false.
//
// You may want to use the `%` modulo operation. `5 % 2` returns the
// remainder when dividing 5 by 2; therefore, `5 % 2 == 1`. In the case
// of `6 % 2`, since 2 evenly divides 6 with no remainder, `6 % 2 == 0`.
// More generally, if `m` and `n` are integers, `m % n == 0` if and only
// if `n` divides `m` evenly.
//
// You would not be expected to already know about modulo for the
// challenge.
//
// Difficulty: medium.
/*
To check if prime see if there is a remainder for 2,3,5

*/
function is_prime(number) {
  var array = [2,3,5]
  for(var i = 0; array[i] < number; i++)
  { 
    if(number%array[i] === 0)
      return false;
  }
  return true;
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //is_prime")
console.log("===============================================")
    console.log('is_prime(2) === true: ' + (is_prime(2) === true))
    console.log('is_prime(3) === true: ' + (is_prime(3) === true))
    console.log('is_prime(4) === false: ' + (is_prime(4) === false))
    console.log('is_prime(9) === false: ' + (is_prime(9) === false))
console.log("===============================================")