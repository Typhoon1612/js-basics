/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

function isDivisible(n, x, y) {
  let divisibleData = [
    { number: x, divisible: Boolean(n % x === 0) },
    { number: y, divisible: Boolean(n % y === 0) },
  ];

  let falseNumber = divisibleData.filter(item => item.divisible === false);

  if (falseNumber.length !== 0) {
    if (falseNumber.length >= 2) {
      return `false because ${n} is neither divisible by ${falseNumber[0].number} nor ${falseNumber[1].number}`;
    } else {
      return `false because ${n} is not divisible by ${falseNumber[0].number}`;
    }
  } else {
    return `true because ${n} is divisible by ${x} and ${y}`;
  }
}

console.log(isDivisible(8, 3, 4));

// What codewars want
// function isDivisible(n, x, y) {
//   return n % x === 0 && n % y === 0;
// }
