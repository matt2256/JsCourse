/*
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

2. Use the function to calculate the average for both teams

3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"

4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2

5. Ignore draws this time
*/

/*
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49

§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

//Data set 1 
var _dolphinesAvgData1 = calcAverage(44, 23, 71)
var _koalasAvgData1 = calcAverage(65, 54, 49)

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3
}

console.log(_dolphinesAvgData1, _koalasAvgData1)

function checkWinner(avgDolph, avgKoalas) {
  if (avgDolph >= 2 * avgKoalas) {
    console.log(`Dolphines wins`)
  } else if (avgKoalas >= 2 * avgDolph) {
    console.log(`Koalas wins`)
  } else {
    console.log(`It has been a draw`)
  }
}

checkWinner(_dolphinesAvgData1, _koalasAvgData1)
checkWinner(511, 102)
checkWinner(102, 9291)


