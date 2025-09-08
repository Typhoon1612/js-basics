function fibonacciGenerator(n) {
    let arr = [0]
    for (let i = -1; i < n - 2; i++){
        let num = arr.length === 1 ? arr[0] + 1 : arr[i] + arr[i + 1];
        arr.push(num);
    }
    return arr;
}

console.log(fibonacciGenerator(20));
