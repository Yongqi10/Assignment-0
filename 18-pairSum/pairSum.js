const { markdown } = require("mocha/lib/reporters");

function pairSum(nums, target) {
  // Insert code here;
  try {
    if(nums.length <= 1) throw "The size need to be 2 or more"
  } 
  catch (error) {
    throw new Error("The size need to be 2 or more");
    
  }
  let map = new Map();

  for(let i = 0;i < nums.length;i++)
  {
    let comp = target - nums[i];
    if(map.has(comp))
    {
      return true;
    }
    else
    {
      map.set(nums[i], i);
    }
    
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;