function startPromise(){
    console.log("startPromise");
    let promise = new Promise((resolve, reject) => {  

        if ($("#myDiv").html().indexOf("Success") >= 0)
            setTimeout(function(){ reject("Promise Failure :("); }, 1000);
        else
            setTimeout(function(){ resolve("Promise Success!!!"); }, 1000);

    });
    let htmlValue;
    promise.then((message) => {  
        console.log("Promise.then");
        htmlValue = message;
    }).catch((message) => {  
        console.log("Promise.catch");
        htmlValue = message;        
    }).finally((message) => {
        console.log("finally");
        $("#myDiv").html(htmlValue);
    })
}