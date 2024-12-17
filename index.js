function isPalindrome(str) {
    let cleanStr = '';
    for (let char of str.toLowerCase()) {
        if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanStr += char;
        }
    }
    let reversed = '';
    for (let i = cleanStr.length - 1; i >= 0; i--) {
        reversed += cleanStr[i];
    }
    return cleanStr === reversed;
}

// Test cases
console.log(isPalindrome("alla")); // true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("121")); // true
console.log(isPalindrome("hello")); // false