class MySolution {
  countDownSum(num) {
    // Insert code here;
    if(num < 1)
    {
      return 0;
    }
    let total = 0;
    total = this.countDownSum(num-1);
    total +=num;
    return total;
  }

}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;