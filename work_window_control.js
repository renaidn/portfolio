const work_window = document.getElementById("work_window");
const work_window_control = document.querySelector(".work_window_control");

const wokrWindowChangePos = () => {
  work_window.style.left =
    workCurleft + window.event.pageX - workPosX > 0
      ? `${workCurleft + window.event.pageX - workPosX}px`
      : 0;
  work_window.style.top =
    workCurtop + window.event.pageY - workPosY > 0
      ? `${workCurtop + window.event.pageY - workPosY}px`
      : 0;
};

let workPosX;
let workPosY;
let workCurleft = 160;
let workCurtop = 80;
let workCondition = false;

work_window_control.addEventListener("mousedown", () => {
  workPosX = window.event.clientX;
  workPosY = window.event.clientY;
  workCondition = true;
  document.addEventListener("mousemove", wokrWindowChangePos);
});
work_window_control.addEventListener("mouseup", () => {
  workCurleft = workCurleft + window.event.pageX - workPosX;
  workCurtop = workCurtop + window.event.pageY - workPosY;
  workCondition = false;
  document.removeEventListener("mousemove", wokrWindowChangePos);
});
document.addEventListener("mouseup", () => {
  if (workCondition) {
    workCurleft =
      workCurleft + window.event.pageX - workPosX > 0
        ? workCurleft + window.event.pageX - workPosX
        : 0;
    workCurtop = workCurtop + window.event.pageY - workPosY;
    workCondition = false;
  }
  document.removeEventListener("mousemove", wokrWindowChangePos);
});
