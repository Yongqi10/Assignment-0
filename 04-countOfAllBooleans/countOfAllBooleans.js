function countOfAllBooleans(arr) {
  // Insert code here;

  let count = 0;
  let i = 0;


  while(i < arr.length)
  {
    if(typeof(arr[i]) == "boolean")
    {
      count++;
    }
    i++;
    
  }

  return count;

}

// Do not edit this line;
module.exports = countOfAllBooleans;