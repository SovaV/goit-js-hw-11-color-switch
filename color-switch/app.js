const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let timeoutId = null;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};
function strChangeColors() {
  const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  timeoutId = setInterval(function () {
    const bodyBg = randomIntegerFromInterval(0, colors.length - 1);
    // const selectedColor = colors[bodyBg];
    refs.body.style.backgroundColor = colors[bodyBg];
  }, 1000);
  if (refs.startBtn) {
    refs.startBtn.disabled = true;
  }
}

function stopChangeColors() {
  refs.body.style = null;
  clearInterval(timeoutId);
  if (refs.stopBtn) {
    refs.startBtn.disabled = false;
  }
}
refs.stopBtn.addEventListener("click", stopChangeColors);
refs.startBtn.addEventListener("click", strChangeColors);
