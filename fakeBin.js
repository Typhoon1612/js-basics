/*** 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string 
***/

function fakeBin(x) {
    var n = x.split("").map(Number);
    for (let i = 0; i < n.length; i++){
        if (n[i] < 5) {
            n[i] = 0;
        } else {
            n[i] = 1;
        }
    }
    return n.toString().replaceAll(",", "");
}

console.log(fakeBin("1234501920356384827423"));