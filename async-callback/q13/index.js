let count=0;
let intervalId=setInterval(() => {
    count++
    console.log("loading....")
    if(count>=5){
        clearInterval(intervalId);
        console.log("loaded succesfully");
        
    }
}, 1000);
