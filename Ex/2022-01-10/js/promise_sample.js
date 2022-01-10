function startPromise(){
    console.log("startPromise");
    let promise = new Promise((resolve, reject) => {  
        setTimeout(function(){ resolve("Promise Success!!!"); }, 5000);
    });
    promise.then((message) => {  
        console.log("Promise.then");
        $("#myDiv").html(message);
    });
}