let isPlus = false;
let dayCandles = new Array();

class Candle {
  constructor() {}
  static toString() {
    return this.description;
  }
  createDiv() {
    let div = document.createElement("div");
    div.classList.add("candle");
    let image = document.createElement("img");
    image.src = "images/transparent_candle_small.png";
    let p = document.createElement("p");
    p.setAttribute("dir", "rtl");
    p.innerHTML = this.toString();
    div.appendChild(image);
    div.appendChild(p);
    div.setAttribute("data-id", this.dayIndex++);
    return div;
  }
  static description = "Candle base class static description";
}

class Shamash extends Candle {
  constructor() {
    super();
    this.label = "שמש";
  }
  show() {
    let div = super.createDiv();
    div.classList.add("candle");
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
  static nextCandleIndex = 0;
  static candleDays = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שביעי",
    "שמיני",
  ];
  constructor() {
    super();
    this.dayIndex = DayCandle.instanceIndex++;
  }
  toString() {
    return DayCandle.candleDays[this.dayIndex];
  }
  show() {
    this.div = super.createDiv();
    let gridCells = document.querySelectorAll(".col-lg-1");
    gridCells[DayCandle.nextCandleIndex].appendChild(this.div);
    DayCandle.nextCandleIndex++;
  }
  unshow() {
    this.div.remove();
    DayCandle.nextCandleIndex--;
  }
}

function initPage() {
  for (var i = 0; i < 8; i++) dayCandles.push(new DayCandle(i));
  let shamash = new Shamash();
  shamash.show();

  const sevivon = document.querySelector("#sevivon");
  sevivon.style.transform = `rotateY(50deg)`;
}

function lightCandle() {
  if (DayCandle.nextCandleIndex < DayCandle.candleDays.length) {
    dayCandles[DayCandle.nextCandleIndex]?.show();
  } else {
    document.getElementById("light-candle").disabled = true;
  }
}

function offCandle() {
  if (
    DayCandle.nextCandleIndex <= DayCandle.candleDays.length &&
    DayCandle.nextCandleIndex > 0
  )
    dayCandles[DayCandle.nextCandleIndex - 1].unshow();
}

class SpinningTop extends Candle {
  constructor() {
    super();
    this.direction = "forwards";
  }
}

function toggleSpinning() {
  isPlus = !isPlus;
  let spinningTop = new SpinningTop();
  const sevivon = document.querySelector("#sevivon");
  sevivon.style.transform = `rotateY(45deg)`;
  sevivon.animate(
    [{ transform: `rotateY(45deg)` }, { transform: `rotateY(360deg)` }],
    {
      duration: 1000,
      iterations: Infinity,
      easing: "linear",
      fill: isPlus
        ? spinningTop.direction
        : (spinningTop.direction = "backwards"),
    }
  );
  sevivon.style.border = isPlus ? "5px solid red" : "5px solid yellow";
  console.log(spinningTop.direction);
}
