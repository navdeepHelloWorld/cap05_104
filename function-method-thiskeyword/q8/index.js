
function personInfo(){
    console.log(this.name , this.age)
}

let person={
    name:"Alice",
    age:21
}

 personInfo.call(person)