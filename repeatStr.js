function repeatStr (n, s) {
  var n = Math.abs(n);
  let result = "";
  for (let i = n; i > 0; i--) {
    result += s;
  }
  return result;
};

//print(repeatStr(6, "Yi Xin"));
console.log(repeatStr(-60, "Yi Xin "));