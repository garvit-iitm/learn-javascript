const promiseNumber1 = new Promise(function(resolve, reject){
        // Do async task
        // DB calls, cryptography, network
        setTimeout(function(){
            console.log("Async Task is completed")
            resolve()
        },1000)
    }
)

promiseNumber1.then(function(){
    console.log("Promise Consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})



const ProomiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"garvit", email:"garvit@gmail.com"})
    }, 1000)
})

ProomiseThree.then(function (user) {
    console.log(user);
})


const ProomiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
                resolve({username:"hello ", email:"garvit@gmail.com"})
        }else{
            reject("SomeThing Went Wrong")
        }
 
    }, 1000)
})

ProomiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("all task completed");
    });


//now handling promises using async and await


const PromiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
                resolve({username:"JavaScript", email:"javaScript@gmail.com"})
        }else{
            reject("JavaScript Went Wrong")
        }
 
    }, 1000)
})


async function consumePromiseFive() {
    try {
            const response = await PromiseFive
            console.log(response)    
    } catch (error) {
        console.log(error);      
    }
}

// it is necessay to add catch and try in async and await because the donot handle errors 
// they only get the resolve callback
consumePromiseFive()


fetch('https://jsonplaceholder.typicode.com/users')
. then ( (response) => {
return response. json()

.then( (data) => {
    data.forEach(users => {
        console.log(users.id);
        console.log(users.username)
    });
})
.catch((error) => console. log("Error Fetching users") )

})