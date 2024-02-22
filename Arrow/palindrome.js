// This code is to return palindrome number in an array using arrow function
const isPalindrome = (str) => {
    const cleanedStr = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  };

  const strings = ['racecar', 'madam', 'malayalam', 'world'];
  const palindromes = strings.filter(isPalindrome);
  console.log(palindromes);