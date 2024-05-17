"use strict";

// console.log(this); // In a browser: window, In Node.js: global
// const obj = {
//     value: 42,
//     method: function() {
//         console.log(this.value);
//     }
// };

// obj.method(); // Output: 42

function standaloneFunction() {
    console.log(this); // Output: undefined
}

standaloneFunction();
