/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  var nextNumber = [];
  var firstNum = 1;
  var secondNum = 2;
  nextNumber.push(secondNum);


  for (var i = 1; secondNum < maxFibValue; i++ ) {
    var fn = firstNum; //assigning first num to fn variable
    firstNum = secondNum; //assigning firstNum value to second Num
    secondNum = secondNum + fn; //secondNum will equal itself plus the previous num
    if(secondNum % 2 === 0){ //if the second number is even
      nextNumber.push(secondNum); //push into nextNum array
    }
  }
  for (var j = 0; j < nextNumber.length; j++) {
    sum = nextNumber[j] + sum;
  }
  console.log(sum);
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input

  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};