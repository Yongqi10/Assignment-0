function isPalindrome(word) {
  // Insert code here;

  if(word.length == 1)
    return true;

  let left = 0;
  let right = word.length - 1;


  while(left <= right)
  {
    // rrorr
    if(word[left] == word[right])
    {
      left++;
      right--;
    }
    else
    {
      return false;
    }

    
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;