let rectangles = [];
class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas = null;
        this.ctx = null;
    }
    draw() {
        if (this.ctx == null) {
            this.canvas = document.getElementById("myCanvas");
            this.ctx = this.canvas.getContext("2d");
        }
    }
}
class FilledRectangle extends Rectangle {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
    }
    draw() {
        super.draw();
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
function initPage() {
    console.log("initPage");
    let colors = ["#184CE8", "#1FD1C5", "#A9B3D8", "#3C4874"];
    let rectsCount = 3;
    let maxWidth = 120;
    let minWidth = 20;
    let startX = 150;
    let startY = 20;
    let sizeGap = (maxWidth - minWidth) / rectsCount;
    for (let i = 0; i < rectsCount; i++) {
        rectangles.push(new FilledRectangle(startX + (i * sizeGap) / 2, startY + (i * sizeGap) / 2, maxWidth - i * sizeGap, maxWidth - i * sizeGap, colors[i]));
    }
}
function drawRects() {
    let queue = true;
    if (queue) {
        //Draw queue order
        while (rectangles.length > 0) {
            rectangles.shift().draw();
        }
    }
    else {
        //Draw stack order
        while (rectangles.length > 0) {
            rectangles.pop().draw();
        }
    }
}
