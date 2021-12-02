const candleDays = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שביעי','שמיני'];
let nextCandleIndex = 0;
let dayCandles = new Array();

class Candle {
    constructor() {
    }
    static toString() {
        return this.description;
    }
    createDiv(){
        let div = document.createElement("div");
        div.classList.add("candle");
        let image = document.createElement("img");
        image.src = "images/transparent_candle_small.png";
        let p = document.createElement("p");
        p.setAttribute("dir","rtl");
        p.innerHTML = this.toString();
        div.appendChild(image);
        div.appendChild(p);
        return div;
    }
    static description = "Candle base class static description";
  }
  
  class Shamash extends Candle {
    constructor() {
      super();
      this.label =  'שמש';
    }
    show(){
        let div = super.createDiv();
        div.classList.add("shamash");
        let gridCells = document.querySelectorAll(".col-lg-4");       
        gridCells[0].appendChild(div);
    }
    toString() {
      //console.log(Shamash.name + ".toString()");
      //console.log("Shamash Candle.description " + Candle.description);
      //console.log("Shamash Candle.toString() " + Candle.toString());
      return this.label;
    }
}

class DayCandle extends Candle {
    static instanceIndex = 0;
    constructor() {
        super();
        this.dayIndex =  DayCandle.instanceIndex;
        DayCandle.instanceIndex++;
    }
    toString() {
        return candleDays[this.dayIndex];
    }
    show(){
        let div = super.createDiv();
        div.addEventListener("click", ()=>{
            console.log("click");
        });
        let gridCells = document.querySelectorAll(".col-lg-1");
        gridCells[nextCandleIndex].appendChild(div);
        nextCandleIndex++;
    }
}

function initPage(){
    //console.log(Candle.description);
    for (var i = 0; i < 8; i++)
        dayCandles.push(new DayCandle());
    let shamash = new Shamash();
    shamash.show();
}

function lightCandle(){
    if (nextCandleIndex < candleDays.length)
        dayCandles[nextCandleIndex].show();

        disableButton()
       
        

}

function disableButton(){

  if (nextCandleIndex == candleDays.length)

  {document.getElementById('newCandle').disabled=true;}


}






function eraseCandle(){


  let erase=document.getElementsByClassName('container');

  erase.classList.remove("col-lg-1");


  }





