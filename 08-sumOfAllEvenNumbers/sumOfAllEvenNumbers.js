// should be count not sum
function sumOfAllEvenNumbers(nums) {
  // Insert code here;
  let total = 0;

  for(let i = 0; i < nums.length;i++)
  {
    if(nums[i] % 2 == 0)
    {
      total++;
    }
  }
  return total;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;