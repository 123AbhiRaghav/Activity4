//This code is to rotate an array k times using ananymous function
const rotateArray = (nums, k) => {
    const reverse = (arr, start, end) => {
      while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    };
  
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);

    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
  
    return nums;
  };
  
  const nums = [1, 2, 3, 4, 5];
  const rotatedArray = rotateArray(nums, 2);
  
  console.log(rotatedArray);

//This code is to rotate an array k times using IIFE function
var Array = [1, 2, 3, 4, 5];
var N = Array.length;
var K = 2;
(function (a, n, k)
{
    k = k % n;
  
    for (let i = 0; i < n; i++) {
        if (i < k) {
  
           
            console.log(a[n + i - k] + " ");
        }
        else {
  
            
            console.log((a[i - k]) + " ");
        }
    }
   
})
(Array, N, K);