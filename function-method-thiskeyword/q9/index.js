 function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
 }

 let obj={
     name: "Alice",
      hobbies: ["reading", "traveling"]
  }

     let cloneObj=deepClone(obj);
     cloneObj.hobbies.push("coding");
 console.log("origial object", obj);
 console.log("copied object with modification ", cloneObj)
     


