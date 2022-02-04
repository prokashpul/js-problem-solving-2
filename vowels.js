function getVowel(words) {
    let word = words.toLowerCase();
    let count = 0;
    let vowel = ["a", "e", "i", "o", "u"]
    for (const letter of word) {
        if (vowel.indexOf(letter) != -1) {
            console.log(letter)
            count++;
        }
    }
    return count;
}

const string = "I love bangladesh";
console.log(getVowel(string));