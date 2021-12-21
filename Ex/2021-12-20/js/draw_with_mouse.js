let line = null;

function initPage(){
    console.log("initPage");
    let canvas = document.getElementById("myCanvas");
    let lineTypeElement = document.getElementById("lineType");
    canvas.addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(event);
        if (line == null){
            line = {
                type: lineTypeElement.value,
                start: {
                    x: event.clientX - canvas.offsetLeft,
                    y: event.clientY - canvas.offsetTop
                }
            }
        }else{
            switch (line["type"]){
                case "Straight":
                    line.end = {
                        x: event.clientX - canvas.offsetLeft,
                        y: event.clientY - canvas.offsetTop                        
                    }
                    drawLine();
                    line = null;
                    break;
            }    
        }
    });    
}

function showLineFields(){
    let lineTypeElement = document.getElementById("lineType");
    switch(lineTypeElement.value){
        case "Arc":
            console.log("Arc was selected");
            break;
        default:
            break;
    }
}
function cleanCanvas(){

}
function fillBackground(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "orange";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'blue';
    ctx.strokeRect(10, 10, canvas.width-20, canvas.height-20);

    //radial gradiant
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 150);
    grd.addColorStop(0, "orange");
    grd.addColorStop(1, "red");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
}

function drawLine(){
    console.log("drawLine " + JSON.stringify(line));
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'blue';
    ctx.moveTo(line.start.x, line.start.y);
    ctx.lineTo(line.end.x, line.end.y);
    ctx.stroke();    
}

function drawCircle(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(95, 50, 20, 0, 2 * Math.PI);
    ctx.stroke();
}