"use strict";

const ball = document.querySelector(".ball");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");

let deg = 0;
let rotateBallInterval;
function rotateBall() {
  deg++;
  rotateBallInterval = requestAnimationFrame(rotateBall);
  ball.style.transform = `rotate(${deg}deg)`;
}
let isAnimated = false;
start.addEventListener("click", function () {
  if (isAnimated) {
    isAnimated = false;
    cancelAnimationFrame(rotateBallInterval);
    start.textContent = 'Start';
  } else {
    isAnimated = true;
    rotateBallInterval = requestAnimationFrame(rotateBall);
    start.textContent = 'Stop';
  }
});
reset.addEventListener('click', function() {
  deg = 0;
  isAnimated = false;
  ball.style.transform = `rotate(${deg}deg)`;
  cancelAnimationFrame(rotateBallInterval);
  start.textContent = 'Start';
})
