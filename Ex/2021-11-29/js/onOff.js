let arr = document.getElementsByClassName("candle");
let incremation = 0;
console.log(arr);


function onOff(index) {
    const boolean = arr[index].classList.contains("candle-off")
    console.log(boolean);
    boolean === true ? arr[index].classList.remove("candle-off") : arr[index].classList.add("candle-off");
    let buttonText = event.target.innerText
    console.log(buttonText);
    if (buttonText === "הדלק") {
        event.target.innerText = "כבה"
    }
    else {
        event.target.innerText = "הדלק"
    }
}

function onOffSingleButton() {
    if (incremation === 8) {
        incremation = 0
    }
    const boolean = arr[incremation].classList.contains("candle-off")
    boolean === true ? arr[incremation].classList.remove("candle-off") : arr[incremation].classList.add("candle-off");
    incremation++


}