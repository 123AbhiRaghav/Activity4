// Convert a given string to title caps in an array using ananymous function 
let str = function() {
    let arr = "hello team how are you";
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
}
str()

// Convert a given string to title caps in an array using IIFE function
(function(str){
    let sen = str.toLowerCase().split(" ");
    for(let i=0; i<sen.length; i++){
        sen[i] = sen[i][0].toUpperCase() + sen[i].slice(1);
    }
    console.log(sen.join(" "));
}) ("hello team how are you")
