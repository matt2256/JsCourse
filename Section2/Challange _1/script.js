/*
Coding challange 1
*/

/*
Mark and John are trying to compare their BMI, which is calculated using the formula:
BMI=mass/height^2 = mass / (height * height)
(mass is kg, and height is meters)

1. Store marks and johns mass and height in variables
2. Calculate both their BMI
3. Create a boolean variable containing information about wheater mark has a heigher BMI
than john
4. Print a string to the console contaning the variable from step 3
*/

//Marks data
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

console.log(_markHeigherThanJohn)