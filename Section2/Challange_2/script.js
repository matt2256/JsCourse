/*
Challange 2
*/

/*


/*
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

var _markHeight = 169;
var _markWeight = 78;

//Johns data
var _johnHeight = 195
var _johnWeight = 92;

var _markBmi = _markWeight / (_markHeight ** 2) * 10000
var _johnBmi = _johnWeight / (_johnHeight ** 2) * 10000

console.log(_markBmi)
console.log(_johnBmi)

var _markHeigherThanJohn = _markBmi > _johnBmi

if (_markBmi > _johnBmi) {
  console.log(`Marks BMI is heigher than Johns. Mark has a BMI of ${_markBmi}. John has a BMI of ${_johnBmi}`);
} else {
  console.log(`Johns Bmi is heigher than Marks. John has a BMI of ${_johnBmi}. Mark has a BMI of ${_markBmi}`)
}


