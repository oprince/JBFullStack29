function initPage(){
    console.log("initPage");
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
    ctx.fillStyle = "yellow";
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
}
function drawRectangle(rect){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.lineWidth = 3;
    ctx.strokeStyle = rect.color;
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
}
function drawRects(){
    let colors = ["#184CE8", "#1FD1C5", "#A9B3D8", "#3C4874"];
    let currRect = {
        x: 150, 
        y: 10,
        width: 130,
        height: 130,
        color: colors[0]
    }
    let minimalRect = {
        width: 10,
        height: 10
    }
    let rectsCount = 3
    let sizeGap = (currRect.width - minimalRect.width) / rectsCount;
    for (let i = 0; i < rectsCount; i++){
        drawRectangle(currRect);
        currRect.width -= sizeGap;
        currRect.height -= sizeGap;
        currRect.x += sizeGap/2;
        currRect.y += sizeGap/2;
        currRect.color = colors[i+1];
    }
}

function drawLine(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';
    ctx.moveTo(100,50);
    ctx.lineTo(200,100);
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