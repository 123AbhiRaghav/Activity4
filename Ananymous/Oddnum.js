//  This code is using ananymous function to find odd numbers
let arr = [0,1,2,3,4,5,6,7,8,9]
let odd = function() {
    let odd = arr.filter(num => num%2 == 1);
    console.log(odd)
}
return odd()

// This code is using IIFE function to find odd numbers
let arr1 = [0,1,2,3,4,5,6,7,8,9];
(function() {
    let arr = []
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]%2 == 1){
            arr.push(arr1[i])
        }
    }
    console.log(arr)
}) ();