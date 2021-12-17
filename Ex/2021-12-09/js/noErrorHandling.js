function initPage() {
  console.log("initPage");
}

function wrongArgument(param1) {
  try {
    let result = param1.toLowerCase();

    if (param1 < 100) {
      throw SyntaxError("its a number, insert letter!");
    }
  } catch (error) {
    console.log(error);
    document.getElementById("d").innerHTML = error.name;
  }
}

function handleUserInput() {
  try {
    SyntaxError;
    let userInput = document.getElementById("userInput").value;
    let result = JSON.parse(userInput);
    alert("result: " + JSON.stringify(result));
  } catch (error) {
    console.log("its an error!");
  }
}
