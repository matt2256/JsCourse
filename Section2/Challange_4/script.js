/*
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
*/

/*
Test data:
§ Data 1: Test for bill values 275, 40 and 430
 */

var _billValue = 40;
var _tipProcentage;

if (_billValue >= 50 && _billValue <= 300) {
  _tipProcentage = (15 * _billValue) / 100
  console.log(`The bill was ${_billValue}, the tip was ${_tipProcentage}. The value is: ${_billValue + _tipProcentage}`)
} else if (_billValue >= 300) {
  _tipProcentage = (20 * _billValue) / 100
  console.log(`The bill was ${_billValue}, the tip was ${_tipProcentage}. The value is: ${_billValue + _tipProcentage}`)
} else {
  console.log(`The bill was under 50`)
}