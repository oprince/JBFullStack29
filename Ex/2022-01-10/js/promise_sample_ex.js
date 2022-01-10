function startPromise(){
    console.log("startPromise");
    let promise = new Promise((resolve, reject) => {  

        if ($("#myDiv").html().indexOf("Success") >= 0)
            setTimeout(function(){ reject("Promise Failure :("); }, 1000);
        else
            setTimeout(function(){ resolve("Promise Success!!!"); }, 1000);

    });
    promise.then((message) => {  
        console.log("Promise.then");
        $("#myDiv").html(message);
    }).catch((message) => {  
        console.log("Promise.catch");
        $("#myDiv").html(message);
    });
}