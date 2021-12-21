function fizzBuzz(start, end) {
  // Insert code here;
  let arr = [];
  while(start <= end)
  {
    if(start % 3 == 0 && start % 5 == 0)
    {
      arr.push("FizzBuzz");
    }
    else if(start % 3 == 0)
    {
      arr.push("Fizz");
    }
    else if(start % 5 == 0)
    {
      arr.push("Buzz");
    }
    else{
      arr.push(start);
    }
    start++;
  }
  return arr;

}

// Do not edit this line;
module.exports = fizzBuzz;