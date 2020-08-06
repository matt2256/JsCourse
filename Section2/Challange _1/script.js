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

    var _MarkMass, _MarkHeight, _JohnMass, _JohnHeight, _MarkBmi, _JohnBmi, _MarkHeigherThanJohn;
     _MarkMass = 79; //kg
     _MarkHeight = 1.80 //centimeters
     _JohnMass = 90 //kg
     _JohnHeight = 2.00 //centimeters

     _MarkBmi = _MarkMass  / (_MarkHeight * _MarkHeight);
     _JohnBmi = _JohnMass / (_JohnHeight * _JohnHeight);

     console.log(_MarkBmi);
     console.log(_JohnBmi);

     _MarkHeigherThanJohn = _MarkBmi > _JohnBmi;

     console.log(_MarkHeigherThanJohn);
     console.log("Is Mark´s BMI higher than John's?: " + _MarkHeigherThanJohn);

