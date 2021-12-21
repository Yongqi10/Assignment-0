function titleCaseEdit(title) {
  // Insert code here;

  str = "";
  str += title[0].toUpperCase();

  let i = 1;

  while(i < title.length)
  {
    if(title[i] == " ")
    {
      // add the  space and change next alphabet to upper case
      str += title[i];
      i++;
      str += title[i].toUpperCase();
      i++;
    }
    else
    {
      // add the alphabet that don't need to change to upper case
      str += title[i];
      i++;
    }

  }

  return str;
}

// Do not edit this line;
module.exports = titleCaseEdit;