function fetchData(){
   return new Promise((resolve,reject)=>{

let num= Math.floor(Math.random()*2);

    setTimeout(() => {
        if(num==1){
            resolve("promsie resolved")
        }
            reject("promise rejected")
        
    }, 1000);


   })
    
}

async function fetchDataHandler(){
try{
  
       let res =  await fetchData();
       console.log(res)
}catch(err){
    console.log(err, " error fetching data")
}finally{
    console.log(" program end finally ")
}
}

fetchDataHandler()