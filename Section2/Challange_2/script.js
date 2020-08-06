/*
Challange 2
*/

/*
John
1. 89
2. 120
3. 103

Mike
1. 116
2. 94
3. 123

Mary
1. 97
2. 134
3. 105
*/

/*
1. Calculate the avager score for each team
2. Decide which teams wins in avager (highest score), and print the winner
3. Then change the score to show different winners. Rember to take in account a draw
*/

var _JohnAvg, _MikAvg, _MaryAvg;
//_JohnAvg = (89 + 120 + 103) / 3;
//_MaryAvg = (97 + 134 + 105) / 3;
//_MikAvg = (116 + 94 + 123) / 3;
_MikAvg = (116 + 94 + 123) / 3;
_JohnAvg = (89 + 120 + 103) / 3;
_MaryAvg = (97 + 134 + 105) / 3;


if (_JohnAvg > _MikAvg && _JohnAvg > _MaryAvg) { //john
    console.log("John has the highest avager");
} else if ( _MikAvg >_JohnAvg && _MikAvg > _MaryAvg) { //Mike
    console.log("Mike has the higest avager");
} else if (_MaryAvg > _JohnAvg && _MaryAvg > _MikAvg){ //Mary
    console.log("Mary has the highest avager");
} else if (_JohnAvg === _MikAvg && _JohnAvg >_MaryAvg) {
    console.log("John and Mike has a draw");
} else if (_JohnAvg > _MikAvg && _JohnAvg === _MaryAvg){
    console.log("John and Mary has a draw");
} else if (_MikAvg === _JohnAvg && _MikAvg >_MaryAvg) {
    console.log("Mike and John has a draw");
} else if (_MikAvg > _JohnAvg && _MikAvg === _MaryAvg){
    console.log("Mike and Mary has a draw")
} else if (_MaryAvg === _JohnAvg && _MaryAvg > _MikAvg) {
    console.log("Mary and John has a draw");
} else if (_MaryAvg > _JohnAvg && _MaryAvg === _MikAvg){
    console.log("Mike and Mary has a draw")
} 