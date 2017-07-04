// Write a function that takes an array of numbers in. Your function should
// return the third greatest number in the array. You may assume that
// the array has at least three numbers in it.
//
// Difficulty: medium.
//we can do a sort of the array
//make the largest number the last number of the array
// for loop decrement until 3

function third_greatest(nums) {
  nums = nums.sort()
  var thirdLargest = nums[nums.length-1];
  for(var i = nums.length-1,  j =1;j<=3;j++, i--){
      if(thirdLargest>nums[i])
          thirdLargest = nums[i];
  }
  return thirdLargest;
  
}

// These are tests to check that your code is working. After writing
// your solution, they should all print true.

console.log("\nTests for //third_greatest")
console.log("===============================================")
    console.log(
      'third_greatest([5, 3, 7]) == 3: ' +
      (third_greatest([5, 3, 7]) == 3)
    )
    console.log(
      'third_greatest([5, 3, 7, 4]) == 4: ' +
      (third_greatest([5, 3, 7, 4]) == 4)
    )
    console.log(
      'third_greatest([2, 3, 7, 4]) == 3: ' +
      (third_greatest([2, 3, 7, 4]) == 3)
    )
console.log("===============================================")
