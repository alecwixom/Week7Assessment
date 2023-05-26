// Part 2: Write Code


// 1) Sum Zero
numbers = [1, 2, 3, -2]

function sumZero(numbers) {
    let sum = new Set()
    for (i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i]

        if (sum.has(-currentNumber)) {
            return true
        }
        sum.add(currentNumber)
    }
    return false
}

console.log('Sum Zero --------');
console.log(sumZero(numbers));

// I believe the runtime to be O(n) for this. And less than 3 seconds.
//------------------------------

// 2) Unique Characters


function uniqueChar (word) {
    const charSet = new Set()

    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (charSet.has(char)) {
            return false
        }
        charSet.add(char)
    }
    return true
}
console.log('UniqueChars------');
console.log(uniqueChar('Monday'));
console.log(uniqueChar('Moonday'));

// I believe this to also be a runtime of O(n). Less than 3 seconds.
//---------------------------------------------

// 3) Pangram Sentence

function pangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    sentence = sentence.toLowerCase()

    for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i]
    if (!sentence.includes(letter)) {
        return false
    }
    }

    return true
}
console.log('Pangram Sentence-----------');
console.log(pangram('The quick brown fox jumps over the lazy dog!'))

// The runtime of this function is also linear or O(n). Less than 3 seconds.

// 4) Longest Word


function longestWord(words) {
    let maxLength = 0
    for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word.length > maxLength) {
        maxLength = word.length
    }
    }
    return maxLength
}
console.log('Longest Word-----------------');
console.log(longestWord(['hi', 'hello']))

// The runtime of this function is O(n) or linear again. Less than 3 seconds.