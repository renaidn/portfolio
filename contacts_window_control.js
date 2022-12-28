const contacts_window = document.getElementById("contacts_window");
const contacts_window_control = document.querySelector(".contacts_window_control");

const contactsindowChangePos = () => {
  contacts_window.style.left =
    contactsCurleft + window.event.pageX - contactsPosX > 0
      ? `${contactsCurleft + window.event.pageX - contactsPosX}px`
      : 0;
  contacts_window.style.top =
    contactsCurtop + window.event.pageY - contactsPosY > 0
      ? `${contactsCurtop + window.event.pageY - contactsPosY}px`
      : 0;
};

let contactsPosX;
let contactsPosY;
let contactsCurleft = 880;
let contactsCurtop = 458;
let contactsCondition = false;

contacts_window_control.addEventListener("mousedown", () => {
  contactsPosX = window.event.clientX;
  contactsPosY = window.event.clientY;
  contactsCondition = true;
  document.addEventListener("mousemove", contactsindowChangePos);
});
contacts_window_control.addEventListener("mouseup", () => {
  contactsCurleft = contactsCurleft + window.event.pageX - contactsPosX;
  contactsCurtop = contactsCurtop + window.event.pageY - contactsPosY;
  contactsCondition = false;
  document.removeEventListener("mousemove", contactsindowChangePos);
});
document.addEventListener("mouseup", () => {
  if (contactsCondition) {
    contactsCurleft =
      contactsCurleft + window.event.pageX - contactsPosX > 0
        ? contactsCurleft + window.event.pageX - contactsPosX
        : 0;
    contactsCurtop = contactsCurtop + window.event.pageY - contactsPosY;
    contactsCondition = false;
  }
  document.removeEventListener("mousemove", contactsindowChangePos);
});
