/*
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100

2. And now let's use arrays! So create an array 'bills' containing the test data
below

3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before

4. Bonus: Create an array 'total' containing the total values, so the bill + tip
*/

/*
Test data: 125, 555 and 44
*/




var _billValue = [125, 555, 44];
var _tipProcentage;


function calcTip(_billValue){
if (_billValue >= 50 && _billValue <= 300) {
  _tipProcentage = (15 * _billValue) / 100
  return `The bill was ${_billValue}, the tip was ${_tipProcentage}. The value is: ${_billValue + _tipProcentage}`
} else if (_billValue >= 300) {
  _tipProcentage = (20 * _billValue) / 100
  return `The bill was ${_billValue}, the tip was ${_tipProcentage}. The value is: ${_billValue + _tipProcentage}`
} else {
  return `The bill was under 50`
}
}

var _tip = [calcTip(_billValue[0]), calcTip(_billValue[1]), calcTip(_billValue[2])];

console.log(_tip)