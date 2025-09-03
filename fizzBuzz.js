function fizzBuzz() {
  let run = true;
  let arr = [];
  let num = 0;
  while (run) {
    num++;
    num % 3 === 0 ? arr.push("fizz") : num % 5 === 0 ? arr.push("buzz") : arr.push(num);
    console.log(arr);
    num === 100 && (run = false);
  }
}

fizzBuzz();
