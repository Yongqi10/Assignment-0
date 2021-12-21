function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let total = 1;
  for(let i = 0; i< args.length;i++)
  {
    total *=args[i];
  }
  return total;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;