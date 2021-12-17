function initPage() {
  console.log("initPage");
  //    window.addEventListener('error', (event) => {
  //        let errorMessage = `${event.type}: ${event.message}\n`;
  //        console.error(errorMessage);
  //        event.preventDefault();
  //    });
}
function handleImageError(event) {
  console.log(event);
  //this.onerror=null;this.src='images/imagenotfound.gif';
}
// window.onerror = function (msg, url, lineNo, columnNo, error) {
//     var string = msg.toLowerCase();
//     var substring = 'script error';
//     if (string.indexOf(substring) > -1){
//       alert('Script Error: See Browser Console for Detail');
//     } else {
//       var message = [
//         'Message: ' + msg,
//         'URL: ' + url,
//         'Line: ' + lineNo,
//         'Column: ' + columnNo,
//         'Error object: ' + JSON.stringify(error)
//       ].join(' - ');

//       alert(message);
//     }

//     //returning true prevents the firing of the default event handler
//     return false;
// };

function wrongArgument(param1) {
  try {
    let result = param1.toLowerCase();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  // finally (dixT()){
}

function dixT(param1) {
  let letter = param1 * 2;
}

function handleUserInput() {
  try {
    let userInput = document.getElementById("userInput").value;
    let result = JSON.parse(userInput);
    alert("result: " + JSON.stringify(result));
  } catch (error) {
    console.log("its an errodr");
  }
}
