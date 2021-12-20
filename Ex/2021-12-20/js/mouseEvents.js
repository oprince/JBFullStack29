function initPage() {
  let catachEventsDiv = document.getElementById("catchEventsDiv");
  catachEventsDiv.addEventListener("mousedown", (event) => {
    console.log(event);
  });
  clickBtn();
  doubleClickBtn();
  mouseUp();
  mouseOver();
  mouseOut();
  mouseMove();
  showCoordinates();
}

function clickBtn() {
  document
    .getElementById("btn")
    .addEventListener("click", (event) => console.log({ click: event }));
}

function doubleClickBtn() {
  document
    .getElementById("btn")
    .addEventListener("dblclick", (event) => console.log({ dblclick: event }));
}

function contextMenu() {
  document
    .getElementById("catchEventsDiv")
    .addEventListener("contextmenu", (event) => {
      event.preventDefault();
      console.log({ contextMenu: event });
    });
}

function mouseUp() {
  document
    .getElementById("catchEventsDiv")
    .addEventListener("mouseup", (event) => {
      console.log({ mouseUp: event });
    });
}

function mouseOver() {
  document
    .getElementById("catchEventsDiv")
    .addEventListener("mouseover", (event) => {
      console.log({ mouseOver: event });
    });
}

function mouseOut() {
  document
    .getElementById("catchEventsDiv")
    .addEventListener("mouseout", (event) => {
      console.log({ mouseOut: event });
    });
}

function mouseMove() {
  document
    .getElementById("catchEventsDiv")
    .addEventListener("mousemove", (event) => {
      console.log({ mouseMove: event });
    });
}

function showCoordinates() {
  document
    .getElementById("showCoordinates")
    .addEventListener("mousemove", (event) => {
      document.getElementById("x-coord").innerText = `X: ${event.clientX}`;
      document.getElementById("y-coord").innerText = `Y: ${event.clientY}`;
    });
}
