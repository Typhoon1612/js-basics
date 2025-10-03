/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

Inputs: "abc", "bc"
Output: true

Inputs: "abc", "d"
Output: false
*/

// Wing Kian Solution
function WingSolution(str, ending) {
  strLetters = str.split("").reverse();
  endingLetters = ending.split("").reverse();

  for (let i = 0; i <= endingLetters.length - 1; i++) {
    if (strLetters[i] !== endingLetters[i]) {
      return false;
    }
  }
  return true;
}

console.log(WingSolution("hello", "lo"));

// Better Solution
function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("hello", "loe"));
