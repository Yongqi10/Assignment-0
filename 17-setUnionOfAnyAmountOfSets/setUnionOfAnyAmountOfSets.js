function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let set = new Set();
  
  for(let i = 0;i< args.length;i++)
  {
    for(let j = 0; j < args[i].size;j++)
    {
      
      set.add(args[i][j]);
    }
    
  }
  
  console.log(set);
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;