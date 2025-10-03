function solution(number) {
  if (number <= 0 || number > 3999 || !Number.isInteger(number))
    return "Must be a number";
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];


  
  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
      let numberValue = Math.floor(number / romanNumerals[i].value)
    for (let j = 0; j < numberValue; j++) {
      if (number >= romanNumerals[i].value) {
        if(numberValue <= 3){
        result += romanNumerals[i].numeral;
          }else{
            result += romanNumerals[i+1].numeral;
          }
        number -= romanNumerals[i].value;
      }
    }
  }
  return result;
}

console.log(solution(412));