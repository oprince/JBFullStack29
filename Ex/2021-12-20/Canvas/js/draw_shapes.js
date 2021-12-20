function initPage() {
  console.log("initPage");
}

function fillBackground() {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "orange";
  //ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "blue";
  ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

  //radial gradiant
  var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 150);
  grd.addColorStop(0, "orange");
  grd.addColorStop(1, "red");
  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawLine() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.moveTo(100, 50);
  ctx.lineTo(200, 100);
  ctx.stroke();
}

function drawCircle() {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(95, 50, 20, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawRectangle() {
  let colors = ["#472FC2", "yellow", "#472FC2", "yellow", "#472FC2", "yellow"];
  const rectProps = {
    x: 20,
    y: 10,
    width: 140,
    height: 140,
    color: colors[1],
  };

  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  for (let i = 0; i < getInputValue(); i++) {
    // ctx.fillStyle = rectProps.color;
    ctx.strokeStyle = colors[i];
    ctx.fillRect(rectProps.x, rectProps.y, rectProps.width, rectProps.height);
    ctx.strokeRect(rectProps.x, rectProps.y, rectProps.width, rectProps.height);
    rectProps.x += 10;
    rectProps.y += 10;
    rectProps.width -= 20;
    rectProps.height -= 20;
    console.log(getInputValue());
  }
}

function drawWithMouseOnClick() {
  let x = 0;
  let y = 0;
  width = 10;
  height = 10;
  let color = "red";
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = color;
  canvas.addEventListener("click", function (event) {
    x = event.clientX - 5 - canvas.offsetLeft;
    y = event.clientY - 5 - canvas.offsetTop;
    ctx.fillRect(x, y, width, height);
    ctx.strokeRect(x, y, width, height);
  });
}

drawWithMouseOnClick();

function getInputValue() {
  const inputVal = document.getElementById("rect-number").value;
  if (inputVal) {
    return inputVal;
  } else {
    return 0;
  }
}
