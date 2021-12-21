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
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);  
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