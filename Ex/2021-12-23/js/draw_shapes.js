let canvas;
let ctx;
let colors = ["#C418E8", "#E84B18", "#18E823"];
let colorIndex = 0;
let inputVal;

function initPage() {
  console.log("initPage");
  inputVal = document.getElementById("lineBars");
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");
  canvas.addEventListener("click", (event) => {
    let x = event.clientX - canvas.offsetLeft;
    let y = event.clientY - canvas.offsetTop;
    let currentColor = colors[colorIndex];
    ctx.strokeStyle = currentColor;
    colorIndex += 1;
    if (colorIndex >= colors.length) colorIndex = 0;
    ctx.strokeRect(x, y, 10, 10);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 30, y);
    ctx.stroke();
  });

  document.getElementById("lineBars").addEventListener("input", () => {
    if (inputVal.value > 0) {
      drawColoredBars();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });
}

function fillBackground() {
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
  ctx.lineWidth = 5;
  ctx.strokeStyle = "blue";
  ctx.moveTo(100, 50);
  ctx.lineTo(200, 100);
  ctx.stroke();
}

function drawCircle() {
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(95, 50, 20, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawColoredBars() {
  let colors = ["yellow", "#472FC2", "orange", "red", "blue", "green"];
  let lineCount = inputVal.value ? inputVal.value : 3;
  const drawWidth = 150;

  let currentLine = {
    startPoint: { x: 20, y: 0 },
    endPoint: { x: 20, y: 10 + drawWidth },
    color: colors[0],
  };

  for (let i = 0; i < lineCount; i++) {
    drawLine(currentLine);
    currentLine.startPoint.x += drawWidth / lineCount;
    currentLine.endPoint.x += drawWidth / lineCount;
    currentLine.color = colors[i + 1];
  }

  currentLine.startPoint.x = 0;
  currentLine.startPoint.y = 40;
  currentLine.endPoint.x = currentLine.startPoint.x + drawWidth;
  currentLine.endPoint.y = 40;

  for (let i = 0; i < lineCount; i++) {
    drawLine(currentLine);
    currentLine.startPoint.y += drawWidth / lineCount;
    currentLine.endPoint.y += drawWidth / lineCount;
    currentLine.color = colors[i + 1];
  }
}

function drawLine(currentLine) {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle = currentLine.color;
  ctx.moveTo(currentLine.startPoint.x, currentLine.startPoint.y);
  ctx.lineTo(currentLine.endPoint.x, currentLine.endPoint.y);
  ctx.stroke();
}
