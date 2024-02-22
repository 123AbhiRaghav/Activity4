// This code is to convert str to title caps using arrow function
let str = ("hello team how are you");
let def= (str)=>{
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
 }
 console.log(def(str));

