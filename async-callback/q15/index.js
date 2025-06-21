
function task1(){
    console.log("task1 completed")
};

function task2(callback){
   console.log("task2 completed");
   callback()
}

task2(task1)