function initPage(){
    let catachEventsDiv = document.getElementById("catchEventsDiv");
    catachEventsDiv.addEventListener("mousedown", (event)=>{
        console.log("mousedown", event);
    });
    catachEventsDiv.addEventListener("mouseover", (event)=>{
        console.log("mouseover", event);
    });
    catachEventsDiv.addEventListener("mouseout", (event)=>{
        console.log("mouseout", event);
    });
    catachEventsDiv.addEventListener("click", (event)=>{
        console.log("click", event);
        let mouseCoordsDiv = document.getElementById("mouseCoords");
        mouseCoordsDiv.innerHTML = `Mouse coordinates: ${event.x},${event.y}`;
    });
    catachEventsDiv.addEventListener("dblclick", (event)=>{
        console.log("dblclick", event);
    });
    catachEventsDiv.addEventListener("contextmenu", (event)=>{
        console.log("contextmenu", event);
    });
    catachEventsDiv.addEventListener("mouseup", (event)=>{
        console.log("mouseup", event);
    });
}