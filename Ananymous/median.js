// This code is to find median of two sorted arrays using ananymous function
const median = (a1, a2) => {
    let x = a1.concat(a2);
    x.sort(function (a,b) {
      return a - b;
    });
    let len = x.length;
    
    return len%2 === 0 ? (x[Math.floor(len/2)-1] + x[Math.ceil(len/2)])/2 : x[Math.floor(len/2)];
  
  }
  
  let a = [0,2,3,5,9];
  let b = [1,4];
  console.log(median(a,b));

// This code is to find median of two sorted arrays using IIFE function
const findMedian = (nums1, nums2) => {
    (() => {
        const mergedArray = [...nums1, ...nums2]
        mergedArray.sort((a, b) => a - b);
 
        const median = mergedArray[mergedArray.length / 2];
        console.log(median);
      })();
    };
    const nums1 = [1, 3, 5, 7];
    const nums2 = [2, 4, 6, 8];
    
    findMedian(nums1, nums2);