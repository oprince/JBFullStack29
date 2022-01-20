colors = ["blue", "green", "red", "pink", "gray", "black", "white"];

function initialPage() {
  let canvas = document.getElementById("myCanvas");

  ctx = canvas.getContext("2d");
  console.log("initPage");
}


let line = [];

class Hline {
        height: number;
        width: number;
        color: 
        
      }
function drawBar() {
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = line.color;
  ctx.moveTo(line.startPoint.x, line.startPoint.y);
  ctx.lineTo(line.endPoint.x, line.endPoint.y);
  ctx.stroke();
}

function drawColoredBars() {
  let numOfBars = document.getElementById("bars").value;
  let theX = 280 / numOfBars;
  line = {
    startPoint: {
      x: 20,
      y: 5,
    },

    endPoint: { x: 20, y: 280 },
    color: colors[0],
  };

  for (let i = 0; i < numOfBars; i++) {
    drawBar();
    line.startPoint.x += theX;
    line.endPoint.x += theX;

    line.color = colors[i + 2];
  }

  line = {
    startPoint: {
      x: 5,
      y: 40,
    },

    endPoint: { x: 280, y: 40 },
    color: colors[3],
  };

  for (let i = 0; i < numOfBars; i++) {
    drawBar();

    line.startPoint.y += theX;
    line.endPoint.y += theX;
    line.color = colors[i + 1];
  }
}

function rotateBars() {
  numOfBars = document.getElementById("bars").value;
  theX = 280 / numOfBars;
  line = {
    startPoint: {
      x: 5,
      y: 60,
    },

    endPoint: { x: 60, y: 5 },
    color: colors[2],
  };
  for (let i = 0; i < numOfBars; i++) {
    drawBar();
    line.startPoint.y += theX + 50;
    line.endPoint.x += theX + 50;
    line.color = colors[i + 1];
  }

  line = {
    startPoint: {
      x: 200,
      y: 0,
    },

    endPoint: { x: 400, y: 200 },
    color: colors[2],
  };
  for (let i = 0; i < numOfBars; i++) {
    drawBar();
    line.startPoint.x -= theX + 30;
    line.endPoint.y += theX + 60;
    line.endPoint.x += 40;
    line.color = colors[i + 1];
  }
}
