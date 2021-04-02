/*
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method

3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
*/

/*
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

const Mark = {
  fullname: 'Mark Miller',
  weight: 78,
  height: 169,

  calcBMI : function(){
    return this.weight / (this.height ** 2) * 10000
  }

}

const John = {
  fullName: 'John Smith',
  weight: 92,
  height: 195,

  calcBMI : function(){
    return this.weight / (this.height ** 2) * 10000
  }
}

if(Mark.calcBMI() >= John.calcBMI()){
    console.log(`${Mark.fullname}´s BMI (${Mark.calcBMI()}) is heigher than ${John.fullName}´s BMI (${John.calcBMI()}) `)
  } else if (John.calcBMI() >= Mark.calcBMI()) {
    console.log(`${John.fullName}´s BMI (${John.calcBMI()}) is heigher than ${Mark.fullname}´s BMI (${Mark.calcBMI()})`)
  } else {
    console.log(`They have the same BMI`)
}

console.log(Mark.calcBMI())
console.log(John.calcBMI())

