// This code is to return duplicates in an array using ananymous function
// const array = [1, 2, 3, 4, 5, 1, 2, 3];

// const duplicates = array.filter((element, index) => {
//   return array.indexOf(element) !== index;
// });

// console.log(duplicates);

// This code is to return duplicates in an array using IIFE function
(function() {
    const arr = [1, 2, 3, 4, 5];
    const rotateArray = (arr, k) => {
      k %= arr.length
      const rotatedArr = [];

      for (let i = 0; i < arr.length; i++) {
        rotatedArr[(i + k) % arr.length] = arr[i];
      }

      for (let i = 0; i < arr.length; i++) {
        arr[i] = rotatedArr[i];
      }
    };
  
    rotateArray(arr, 2);
    console.log(arr);
  })();