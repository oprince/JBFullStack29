
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
    const p = document.getElementById("status")
    let finallyResult;
    console.log(finallyResult);

    try {
        let result = param1.toLowerCase()
        finallyResult = result
        console.log(result);
    } catch (error) {
        finallyResult = error
        console.log(error);
    } finally {
        p.innerHTML = finallyResult
    }
}

function handleUserInput() {
    let userInput = document.getElementById("userInput").value;
    let finallyResult;
    try {
        let result = JSON.parse(userInput);
        finallyResult = result
    } catch (error) {
        finallyResult = error

    }
    alert("result: " + JSON.stringify(finallyResult));

}


