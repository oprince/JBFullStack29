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
        static candleDays = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שביעי','שמיני'];
        static nextCandleIndex = 0;
        static dayCandles = new Array();

        constructor(dayIndex) {
          super();
          this.dayIndex =  dayIndex;
        }
        toString() {
          return DayCandle.candleDays[this.dayIndex];
        }
        show(){
            let div = super.createDiv();
            div.classList.add("dayCandle");
            let span = document.createElement("span");
            span.classList = "glyphicon glyphicon-remove-sign";
            span.addEventListener("click", ()=>{
              div.remove();
            });
            div.appendChild(span);
            let gridCells = document.querySelectorAll(".col-lg-1");
            gridCells[DayCandle.nextCandleIndex].appendChild(div);
            DayCandle.nextCandleIndex++;
        }
}

function initPage(){
    //console.log(Candle.description);
    for (var i = 0; i < 8; i++)
        DayCandle.dayCandles.push(new DayCandle(i));
    let shamash = new Shamash();
    shamash.show();
}

function lightCandle(){
    if (DayCandle.nextCandleIndex < DayCandle.candleDays.length)
        DayCandle.dayCandles[DayCandle.nextCandleIndex].show();
    else
    document.getElementById("lightOn").attributes.removeNamedItem("href");
}

