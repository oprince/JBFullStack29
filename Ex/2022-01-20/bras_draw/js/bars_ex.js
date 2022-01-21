let colors = [
    "blue",
    "green",
    "red",
    "pink",
    "gray",
    "black",
    "white",
];
let ctx;
function initialPage() {
    let canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    console.log("initPage");
}
class Line {
    constructor(x1, y1, x2, y2, color) {
        this.startPoint = { x: x1, y: y1 };
        this.endPoint = { x: x2, y: y2 };
        this.color = color;
    }
}
const getBarValue = () => {
    let numOfBars = Number(document.getElementById("bars").value);
    return numOfBars;
};
const getX = () => {
    return 280 / getBarValue();
};
function drawBar(line) {
    ctx.beginPath();
    ctx.lineWidth = 6;
    ctx.strokeStyle = line.color;
    ctx.moveTo(line.startPoint.x, line.startPoint.y);
    ctx.lineTo(line.endPoint.x, line.endPoint.y);
    ctx.stroke();
}
function drawColoredBars() {
    let line = new Line(20, 5, 20, 280, colors[0]);
    for (let i = 0; i < getBarValue(); i++) {
        drawBar(line);
        line.startPoint.x += getX();
        line.endPoint.x += getX();
        line.color = colors[i + 2];
    }
    line = new Line(5, 40, 280, 40, colors[3]);
    for (let i = 0; i < getBarValue(); i++) {
        drawBar(line);
        line.startPoint.y += getX();
        line.endPoint.y += getX();
        line.color = colors[i + 1];
    }
}
function rotateBars() {
    let line = new Line(5, 60, 60, 5, colors[2]);
    for (let i = 0; i < getBarValue(); i++) {
        drawBar(line);
        line.startPoint.y += getX() + 50;
        line.endPoint.x += getX() + 50;
        line.color = colors[i + 1];
    }
    line = new Line(200, 0, 400, 200, colors[2]);
    for (let i = 0; i < getBarValue(); i++) {
        drawBar(line);
        line.startPoint.x -= getX() + 30;
        line.endPoint.y += getX() + 60;
        line.endPoint.x += 40;
        line.color = colors[i + 1];
    }
}
