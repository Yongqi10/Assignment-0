function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let set = new Set(args[0]);
  
  for(let i = 1;i< args.length;i++)
  {
    for(let elem of args[i])
    {
      set.add(elem);
    }
    
  }
  
  return set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;