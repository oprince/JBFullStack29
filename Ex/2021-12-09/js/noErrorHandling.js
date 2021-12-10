const images = document.querySelectorAll("img");
const image_1 = document.querySelector(".image-1");

image_1.src = "imagefound.gif";

images.forEach((img) => {
  img.addEventListener("error", () => {
    img.src = "images/imagenotfound.gif";
  });
});

function initPage() {
  console.log("initPage");
}

function wrongArgument(param1) {
  let result = param1.toLowerCase();
  console.log(result);
}

function handleUserInput() {
  let userInput = document.getElementById("userInput").value;
  let result = userInput; // removed JSON.parse
  alert("result: " + result); // removed JSON.stringify
}

const undefinedFunction = () => {
  console.log("Hello I am undefined function, and I work now.");
};
