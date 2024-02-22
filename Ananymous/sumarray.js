// This code to find sum of all numbers in an array using ananymous function
const arr = [1,2,3,4,5,6,7,8,9]
const sum = function(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i]
    }
    return total
}
const result = sum(arr)
console.log(result)

// This code to find sum of all numbers in an array using IIFE function
(function(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total += arr[i]
    }
    console.log(total)
}) ([1,2,3,4,5,6,7,8,9])