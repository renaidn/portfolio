
const about_window = document.getElementById("about_window");
const control = document.querySelector(".window_control");
const changePos = () => {
  about_window.style.left =
    curleft + window.event.pageX - posX > 0
      ? `${curleft + window.event.pageX - posX}px`
      : 0;
  about_window.style.top =
    curtop + window.event.pageY - posY > 0
      ? `${curtop + window.event.pageY - posY}px`
      : 0;
};

let posX;
let posY;
let curleft = 160;
let curtop = 80;
let condition = false;

control.addEventListener("mousedown", () => {
  posX = window.event.clientX;
  posY = window.event.clientY;
  condition = true;
  document.addEventListener("mousemove", changePos);
});
control.addEventListener("mouseup", () => {
  curleft = curleft + window.event.pageX - posX;
  curtop = curtop + window.event.pageY - posY;
  condition = false;
  document.removeEventListener("mousemove", changePos);
});
document.addEventListener("mouseup", () => {
  if (condition) {
    curleft =
      curleft + window.event.pageX - posX > 0
        ? curleft + window.event.pageX - posX
        : 0;
    curtop = curtop + window.event.pageY - posY;
    condition = false;
  }
  document.removeEventListener("mousemove", changePos);
});
