function frequencyCounter(word) {
  // Insert code here;
  // const map = new Map();

  // for(let i = 0; i < word.length;i++)
  // {
  //   if(map.get(word[i]) == "undefined")
  //   {
  //     map.set(word[i],1);
  //   }
  //   else
  //   {
  //     map.set(word[i],map.get(word[i])+1);
  //   }
  // }




  let obj = new Object();

  for(let i = 0; i < word.length;i++)
  {
    
    if(word[i] in obj)
    {
      obj[word[i]]++;
    }
    else
    {
      obj[word[i]] = 1;
    }
  }


  return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;