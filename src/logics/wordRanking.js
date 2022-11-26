export const WordRanking = (message) => {
    message += " "; // adding blank space for last word processing
    let wordFrequency = new Map();
    let word = "";
    let refAsci = "A".charCodeAt(0);

    for (let i = 0; i < message.length; i++) {
        let tempChar = message[i].toUpperCase();
        let asciDiff = tempChar.charCodeAt(0) - refAsci
        if (message[i] === " " || asciDiff < 0 || asciDiff > 25) {
            let value = wordFrequency.get(word);
            if (value) {
                value++;
                wordFrequency.set(word, value);
            } else wordFrequency.set(word, 1);
            word = ""
        } else word += message[i].toUpperCase();
    }

    // sorting by values in descending order and return -> array
    return [...wordFrequency].sort((a, b) => b[1] - a[1]);
}