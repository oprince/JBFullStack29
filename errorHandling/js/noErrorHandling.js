window.addEventListener('error', function(event) {
    console.log(event)
})

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

let images = document.getElementsByTagName("img");
for(let i = 0; i < images.length; i++){
    images[i].addEventListener("error", (e)=>{
        images[i].src ="images/imageNotFound.png";
    })
}