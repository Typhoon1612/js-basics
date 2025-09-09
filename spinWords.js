/*
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(string) {
    let words = string.split(/(\s+)/);
    for (let i = 0; i < words.length; i++) {
        let wordLetter = words[i].split("");
        if (wordLetter.length >= 5) {
            words[i] = wordLetter.reverse().join("");
        } else {
            words[i] = wordLetter.join("");
            
        }
    }
    return words.join("");
}

console.log(spinWords("Hello word you are tricky"));