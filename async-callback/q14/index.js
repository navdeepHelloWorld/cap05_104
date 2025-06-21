console.log("Begin");

 setTimeout(() => {
     console.log("Timeout Task");
     }, 0);

  Promise.resolve()
  .then(() => {
     console.log("Promise Task"); 
    });
     
 console.log("End");
 
//  // the output order follow the given sequence becase "begin" and "end" 
//  //will print first becase of their synchronous nature where as 
//  settimeout and promise are async programs so they will went to 
//  web API and follow the event loop. also promise is microtask so it will
//  have higher priority as our settimeout is set to 0ms. that why promise
//   loges first and then settimeout