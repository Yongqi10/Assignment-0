function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  let sum  = min + max;
  
  return sum;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;