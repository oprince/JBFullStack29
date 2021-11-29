function buildDiv() {
    let wrapper = document.getElementById("wrapper-for-fade-in");
    let divElement = document.createElement("div");
    divElement.classList.add("class", "fade-in");
    divElement.innerHTML = "Do you like my fade-in effect ??"
    wrapper.appendChild(divElement);
}
function slideText() {
    let wrapper = document.getElementById("wrapper-for-slide-in");
    let pElement = document.createElement("p");
    pElement.classList.add("class", "sliding");
    pElement.innerHTML = "Do you like my slide-in effect ??"
    wrapper.appendChild(pElement);
}
