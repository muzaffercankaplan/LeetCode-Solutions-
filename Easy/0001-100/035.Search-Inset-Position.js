// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function (nums, target) {
  let num = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] < target ? num++ : "";
  }
  return num;
};
