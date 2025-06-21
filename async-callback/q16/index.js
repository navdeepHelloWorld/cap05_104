function fetchUserData(callback){
    console.log("fetching user data")
    setTimeout(() => {
       callback("user data received")   
        }, 1000);
}
function fetchUserPosts(callback){
    console.log("fetching user post ");
    setTimeout(() => {
       callback("user post received")
    }, 1500);
}
fetchUserData((userData)=>{
         console.log(userData);
         
         fetchUserPosts((userPost)=>{
            console.log(userPost);
            console.log("All data loaded successfully!")
         })
})
