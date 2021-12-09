function initPage(){
    console.log("initPage");
}

function wrongArgument(param1){
    let result = param1.toLowerCase();
    console.log(result);
}

function handleUserInput(){
    let userInput = document.getElementById("userInput").value;
    let result = JSON.parse(userInput);
    alert("result: " + JSON.stringify(result));
}

function picerror(){
    //let imageelement = document.getElementById("errorpic") ;    
    //imageelement.src=
    document.getElementById("errorpic").src = "images/imagenotfound.gif"
}