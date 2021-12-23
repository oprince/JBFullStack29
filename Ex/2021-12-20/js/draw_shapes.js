function initPage(){
    console.log("initPage");
}

function fillBackground(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "yellow";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'yellow';
    ctx.strokeRect(10, 10, canvas.width-20, canvas.height-20);

    //radial gradiant
    var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 150);
    grd.addColorStop(0, "yellow");
    grd.addColorStop(1, "yellow");
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

function drawCircle(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(95, 50, 20, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawInRectangle(){
    let userRectNum = {
        rectNum: document.getElementById("rectNum").value,
      };
      let rectObj = document.getElementById("rectNum").value = rectObj.rectNum;
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    let rectColor=["red", "green","blue","orange"];
    let rect= {
        x:20,
        y:10,
        color: rectColor[0],
        width:140,
        height:140,
    };
 
    for (let i=0; i<3; i++){
        ctx.strokeStyle = rect.color;
        ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
        rect.width-=10;
        rect.height-=10;
        rect.x+=5;
        rect.y+=5;
        rect.color= rectColor[i+1];
    }

}