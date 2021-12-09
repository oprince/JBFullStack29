function initPage() {
    console.log("initPage");
}

function wrongArgument(param1) {
    try {
        let result = param1.toLowerCase();
        console.log(result);

    } catch (error) {
        console.error = error
    }
    finally {
        const p = document.getElementById("status");
        typeof param1 === "string" ? p.innerHTML = param1 : p.innerHTML = console.error;
    }
}

function handleUserInput() {
    let userInput = document.getElementById("userInput").value;
    let result = JSON.parse(userInput);
    alert("result: " + JSON.stringify(result));
}

function imageValidityCheck() {
    const imageSrc = document.getElementById("imgID");
    imageSrc.onerror = imageSrc.src = "images/imagenotfound.gif"
}
function checkImages() {
    const imagesArray = document.getElementsByTagName("img").length

    console.log(imagesArray);
}
