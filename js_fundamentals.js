// -- EXERCISE ONE --

// 1.1
// 10
// 1.2
// 1
// 1.3
// number
// 1.4
// true
// 1.5
// infinity
// 1.6
// NaN
// 1.7
// false
// 1.8
// number
// 1.9
// 42
// 1.10
// Brendan Eich
// 1.11
// var  firstName = "Brendan";
// var lastName = "Eich";
// console.log(firstName + " " + lastName);
// Brendan Eich
// 1.12
// var phoneNumber = "08798976";
// console.log(phoneNumber.length);
// 8
// 1.13
// true
// 1.14
// var fName;
// if (fName) console.log(`First Name is ${fName}`);
// nothing
// 1.15
// var name = "";
// if (name) console.log(`First Name is ${name}`);
// nothing

// -- EXERCISE TWO --

/*
var score = 10

switch(score) {
  case 10:
    console.log('Distinction');
    break;
  case 9:
    console.log('Merit');
    break;
  case 8:
    console.log('Pass');
    break;
  default:
    console.log('Fail');
}

// -- EXERCISE THREE --

var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];

for (coffee in coffees) {
  console.log(coffees[coffee].type, 'costs',coffees[coffee].price,'each');
}
*/


var currentPlayer = 'o';
var grid = [['o',null,'x'], [null, 'x', 'o'], ['o', 'x', 'o']];

if ((grid[0][0]===currentPlayer&&grid[0][1]===currentPlayer&&grid[0][2]===currentPlayer)||
    (grid[0][0]===currentPlayer&&grid[1][1]===currentPlayer&&grid[2][2]===currentPlayer)||
    (grid[0][0]===currentPlayer&&grid[1][0]===currentPlayer&&grid[2][0]===currentPlayer)||
    (grid[1][0]===currentPlayer&&grid[1][1]===currentPlayer&&grid[1][2]===currentPlayer)||
    (grid[0][2]===currentPlayer&&grid[1][1]===currentPlayer&&grid[2][0]===currentPlayer)||
    (grid[0][1]===currentPlayer&&grid[1][1]===currentPlayer&&grid[2][1]===currentPlayer)||
    (grid[0][2]===currentPlayer&&grid[1][2]===currentPlayer&&grid[2][2]===currentPlayer)||
    (grid[2][0]===currentPlayer&&grid[2][1]===currentPlayer&&grid[2][2]===currentPlayer)) {
      console.log('A WINNER IS', currentPlayer.toUpperCase()) //this is a reference to some retro game but brain is fried and can't remember which...
  }else {
    console.log('NO WINNER');
  }
