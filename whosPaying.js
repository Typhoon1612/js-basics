function whosPaying(names) {
    var nameLen = names.length;
    var max = (nameLen - 1);
    var min = 0;
    id = Math.floor(Math.random() * (max - min + 1)) + min;

    return names[id] + " is going to buy lunch today!"; 
}

var nameList = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(nameList)); 