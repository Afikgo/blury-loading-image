const load = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let num = 0;

let int = setInterval(blurring, 30);
function blurring() {
  num++;

  if (num > 99) {
    clearInterval(int);
  }
  load.innerText = `${num}%`;
  load.style.opacity = scale(num, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(num, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
