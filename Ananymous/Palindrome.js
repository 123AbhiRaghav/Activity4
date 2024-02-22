//  This code is to return palindrome in an array using ananymous function
const arr = ["madam","hello","racecar","civic","radar","level"]
const isPalindrome = (str) => {
    return str === str.split("").reverse().join("");
}
const palindrome = arr.filter(isPalindrome);
console.log(palindrome)

//  This code is to return palindrome in an array using IIFE function
