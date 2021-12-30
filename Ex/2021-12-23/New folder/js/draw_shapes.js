let canvas;
let ctx;
let inputVal;
let colors = [];
let colorIndex = 0;

function buildColorsArray(ittarations) {
    let array = [];
    for (let i = 0; i < ittarations; i++) {
        let r = Math.floor(Math.random() * 250) + 1;
        let g = Math.floor(Math.random() * 250) + 1;
        let b = Math.floor(Math.random() * 250) + 1;

        let color = `rgb(${r},${g},${b})`

        array.push(color)
    }
    return array;

}

function initPage() {
    console.log("initPage");
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    canvas.addEventListener("click", (event) => {
        let x = event.clientX - canvas.offsetLeft;
        let y = event.clientY - canvas.offsetTop;
        let currentColor = colors[colorIndex];
        ctx.strokeStyle = currentColor;
        colorIndex += 1;
        if (colorIndex >= colors.length)
            colorIndex = 0;
        ctx.strokeRect(x, y, 10, 10);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 30, y);
        ctx.stroke();
    });
}

function fillBackground() {
    ctx.fillStyle = "orange";
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'blue';
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
    ctx.strokeStyle = 'blue';
    ctx.moveTo(100, 50);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawCircle() {
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(95, 50, 20, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawLines() {
    canvas.width = canvas.width;
    inputVal = document.getElementById("inputID").value;
    colors = buildColorsArray(inputVal)
    let x = 0;
    let y = 0;
    for (let i = 0; i < colors.length; i++) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = colors[i];
        ctx.beginPath();
        ctx.moveTo(x, ((canvas.height / (colors.length)) / 2 + (canvas.height / (colors.length) * i)));
        ctx.lineTo(canvas.width, ((canvas.height / (colors.length)) / 2 + (canvas.height / (colors.length) * i)));
        console.log("horizontal :", ((canvas.height / (colors.length)) / 2 + (canvas.height / (colors.length) * i)));

        ctx.stroke();


    }
    for (let i = 0; i < colors.length; i++) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = colors[i];
        ctx.beginPath();
        ctx.moveTo(((canvas.width / (colors.length)) / 2 + (canvas.width / (colors.length) * i)), y);
        ctx.lineTo(((canvas.width / (colors.length)) / 2 + (canvas.width / (colors.length) * i)), canvas.height);
        console.log("vertical :", (canvas.width / (colors.length)) + (canvas.width / (colors.length) * i) / 2);
        ctx.stroke();

    }


}

