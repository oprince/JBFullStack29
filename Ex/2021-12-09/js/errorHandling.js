const statusEl = document.getElementById("status");
const images = document.querySelectorAll("img");
const userInput = document.getElementById("user-input");

let result;

function initPage() {
  console.log("initPage");
}

function wrongArgument(param1) {
  try {
    if (typeof param1 === "string") {
      result = param1.toLowerCase();
    } else {
      result = throwCustomError(
        param1,
        "number",
        "Argument expected string but got number."
      );
    }
  } catch (error) {
    result = "error: " + error;
  } finally {
    statusEl.innerHTML = result;
  }
}

function handleUserInput() {
  let result;
  try {
    let userInput = document.getElementById("userInput").value;
    result = JSON.parse(userInput);
    alert("result: " + JSON.stringify(result));
  } catch (error) {
    result = "error: " + error;
  } finally {
    userInput.innerHTML = result;
  }
}

function throwCustomError(param, type, errorMsg) {
  if (typeof param === type) {
    throw errorMsg;
  }
}
