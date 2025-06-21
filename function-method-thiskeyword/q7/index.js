 function multiplyNumber(a,b){
    return a*b
 };
  
 let a=3;
 let b=8;
 let result = multiplyNumber.apply({},[a,b]);
 console.log(result)
