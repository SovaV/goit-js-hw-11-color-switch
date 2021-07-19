const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector("body"),
};
function changeColors() {
  const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  setInterval(function () {
    // var bodybgarrayno = Math.floor(Math.random() * colors.length);
    var selectedcolor = colors[randomIntegerFromInterval];
    refs.body.style.backgroundColor = selectedcolor;
  }, 1000);
}
refs.startBtn.addEventListener("click", changeColors);

// function changeColors() {
//   const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548",
//   ];
//   setInterval(function () {
//     var bodybgarrayno = Math.floor(Math.random() * colors.length);
//     var selectedcolor = colors[bodybgarrayno];
//     refs.body.style.backgroundColor = selectedcolor;
//   }, 1000);
// }
// refs.startBtn.addEventListener("click", changeColors);
