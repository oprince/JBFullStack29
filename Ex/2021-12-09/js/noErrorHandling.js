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