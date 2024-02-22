// This code is to display prime numbers in an array using ananymous function
// const arr = [1,2,3,4,5,6,7,8,9]
// const b = function(...a){
//     for(let i=0; i<a.length; i++){
//         for(let j=2; j<=a[i]-1;j++){
//             if(a[i]%j == 0){
//                 return false
//             }
//         }
//         return a[i] >1;.
//     }
// }
// console.log(arr.filter(b))

// This code is to display prime numbers in an array using IIFE function
(function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function isPrime(n) {
      if (n <= 1) {
        return false;
      }
      for (var i = 2; i < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  
    var primeNumbers = numbers.filter(isPrime);
    console.log(primeNumbers);
  })();