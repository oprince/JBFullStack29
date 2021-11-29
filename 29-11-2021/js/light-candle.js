const candles = document.querySelectorAll(".candle");
const days = document.querySelectorAll(".day");

function init() {
  candles.forEach((candle, index) => {
    candle.setAttribute("data-id", "candle-" + index);
  });
}

days.forEach((day, index) => {
  day.addEventListener("click", () => {
    const candle = document.querySelector(`[data-id="candle-${index}"]`);
    candle.classList.toggle("candle-off");
  });
});

init();
