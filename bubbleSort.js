/* "Without using any built-in sort function, write a program that sorts a list of numbers in ascending order.

For example, try sorting these lists:

[7, 2, 9, 1, 5]

[3, 8, 6, 0, 4, 2]" */

/*** 
Three types of Sorting:
Bubble Sort 🫧 → Repeatedly swaps adjacent elements.

Selection Sort 🎯 → Repeatedly selects the smallest element and puts it in place.

Insertion Sort 📝 → Builds the sorted list one element at a time by inserting in the right place.
 ***/

var list1 = [7, 2, 9, 1, 4, 0, 40, 70, 200];
var list2 = [3, 1, 6, 0, 4, 2, 200, 3000];
var list3 = list1.concat(list2);

var set1 = [...new Set(list3)];

function BubbleSort(arry) {
  let arryLength = arry.length;
  for (let i = 0; i < arryLength - 1; i++) {
    for (let j = 0; j < arryLength - i - 1; j++) {
      if (arry[j] > arry[j + 1]) {
        let tempNum = arry[j];
        arry[j] = arry[j + 1];
        arry[j + 1] = tempNum;
      }
    }
  }
  return arry;
}

console.log(list3);
console.log(set1);
console.log(BubbleSort(set1));
