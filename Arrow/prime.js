// This code is to find prime numbes in an array using arrow functions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) 
    return false;
  }
  return num !== 1;
};

const primeNumbers = numbers.filter(isPrime);

console.log(primeNumbers); 