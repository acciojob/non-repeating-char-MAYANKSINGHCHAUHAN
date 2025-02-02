function firstNonRepeatedChar(str) {
    const charCount = {};
    
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null;
}

function findFirstNonRepeated() {
    const textInput = document.getElementById("textInput").value;
    const resultElement = document.getElementById("result");
    const result = firstNonRepeatedChar(textInput);
    resultElement.textContent = result !== null ? result : "No non-repeating character found.";
}
