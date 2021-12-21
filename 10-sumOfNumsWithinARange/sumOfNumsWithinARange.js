function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let s = false;
  let count = 0;
  for(let i = 0; i < nums.length;i++)
  {
    if(nums[i] == start)
    {
      s = true;
      
    }
    if(s)
    {
      count++;
    }
    if(nums[i] == end)
    {
      s = false;
      break;
    }

  }

  
return count;


}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;