// const score = 95;

// const promise = new Promise((resolve, reject) => {
//     if (score >= 100) {
//         resolve("You won!");
//     } else {
//         reject("You lost!");
//     }
// });

// promise.then((res) => console.log(res)).catch((e) => console.log("Error:", e));
// console.log(promise)



// Create a promise representing an asynchronous operation
// const asyncOperation = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation
//     setTimeout(() => {
//         const success = Math.random() < 0.5; // Simulate success or failure randomly
//         if (success) {
//             resolve("Operation completed successfully!"); // Resolve the promise
//         } else {
//             reject(new Error("Operation failed!")); // Reject the promise
//         }
//     }, 1000); // Simulate a delay of 1 second
// });

// // Check the state of the promise immediately after creation
// console.log("Promise state immediately after creation:", asyncOperation);

// // Attach handlers to the promise
// asyncOperation
//     .then((result) => {
//         console.log("Promise fulfilled with result:", result);
//     })
//     .catch((error) => {
//         console.log("Promise rejected with error:", error);
//     });

// // Check the state of the promise after attaching handlers
// console.log("Promise state after attaching handlers:", asyncOperation);




const timeount = ((t) => {
    return new Promise ((resolve , reject) => {
        setTimeout (() => {
            resolve(`completed in ${t} sec`)
        },t)
    }) 
 });
 // resolving a normal promise 
 timeount(200).then((result) => console.log(result));
 // promise.all
  Promise.all([timeount(4000) , timeount(100)]).then ((result) => {
      console.log(result);
  })
 