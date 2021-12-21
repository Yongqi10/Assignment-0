class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;

    let left = 0;
    let right = nums.length -1; 

    while(left <= right)
    {
      let middle = parseInt((right + left) / 2);
      if(target == nums[middle])
      {
        return true;
      }
      else if(target < nums[middle])
      {
        right = middle -1;
      }
      else
      {
        left = middle +1;
      }
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;