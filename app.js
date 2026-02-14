const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
let deg = 6;

function clockHandler() {
  let d = new Date();
  let h = d.getHours() * 30;
  let m = d.getMinutes();
  let s = d.getSeconds();
  hour.style.transform = `rotateZ(${h + m * 0.5}deg)`;
  min.style.transform = `rotateZ(${m * deg}deg)`;
  sec.style.transform = `rotateZ(${s * deg}deg)`;
}
clockHandler();
setInterval(clockHandler, 1000);
