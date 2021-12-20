function initPage(){
    let catachEventsDiv = document.getElementById("catchEventsDiv");
    catachEventsDiv.addEventListener("mousedown", (event)=>{
        console.log(event);
    });
}