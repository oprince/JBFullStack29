localStorage.setItem("day", "2");
let hebrewDays = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
function buildDiv(){    
    let wrapper = document.getElementById("wrapper-for-fade-in");
    let divElement = document.createElement("div");
    divElement.classList.add("class", "fade-in");
    divElement.innerHTML = "Do you like my fade-in effect ??"
    wrapper.appendChild(divElement);
}
function slideText(){
    let wrapper = document.getElementById("wrapper-for-slide-in");
    let pElement = document.createElement("p");
    pElement.classList.add("class", "sliding");
    pElement.innerHTML = "Do you like my slide-in effect ??"
    wrapper.appendChild(pElement);
}

document.getElementById("addCandle").addEventListener("click", ()=>{
    let day = parseInt(localStorage.getItem("day"));
    let candlesArr = document.getElementsByClassName("candle");

    if(!localStorage.getItem("day"))
        localStorage.setItem("day", "2");
    
        for(let i = 1; i<=candlesArr.length; i++){
        if(day == i){
            
            candlesArr[i].classList.remove("candle-off");
            let p = document.createElement("p");
            p.innerHTML = hebrewDays[i];
            candlesArr[i].appendChild(p);

            day++;
            localStorage.setItem("day", JSON.stringify(day));
            return;
        }

        }
});