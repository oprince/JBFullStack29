let canvas;
let ctx;
let colors = ["#C418E8", "#E84B18", "#18E823"];
let colorIndex = 0;
//Olga
function initPage(){
    console.log("initPage");
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("click", (event)=>{
        let x = event.clientX - canvas.offsetLeft;
        let y = event.clientY - canvas.offsetTop;
        let currentColor = colors[colorIndex];
        ctx.strokeStyle = currentColor;
        colorIndex += 1;
        if (colorIndex >= colors.length)
            colorIndex = 0;
        ctx.strokeRect(x, y, 10, 10); 
        ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x + 30,y);
        ctx.stroke();        
    });
}

function fillBackground(){
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
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue';
    ctx.moveTo(100,50);
    ctx.lineTo(200,100);
    ctx.stroke();    
}

function drawCircle(){
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(95, 50, 20, 0, 2 * Math.PI);
    ctx.stroke();
}