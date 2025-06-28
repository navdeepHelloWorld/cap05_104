// function outer() { let a = 10; return function inner() { console.log(++a); }
// }
// let counter=outer();
 
// console.log(12*10+3)

// let counter = (function () {
//     let count = 0;
//     return function () {
//       count++;
//       console.log(count);
//     };
//   })();
//   counter();
//   counter();
//   counter();

// var logs = [];
// function createLogger() {
   
//     return function (log) {
//       logs.push(log);
//       console.log(logs);
//     }
//   }
//   const logData = createLogger();
//   logData("Test");
//   logData("Debug");
//   console.log(logs);
  
  
fetch("https://fakestoreapi.com/products")
.then((res)=>console.log(res))









