let m = new Date();
let clockEl = document.getElementById("clock_display");
let dateEl = document.getElementById("date_display");
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function updateTime() {
  let m = new Date();
  minute = m.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  } else {
    minute = `${minute}`;
  }
  hour = m.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  } else {
    hour = `${hour}`;
  }
  clockEl.innerHTML = `${hour}:${minute}`;
  dateEl.innerHTML = `${weekdays[m.getDay()]} ${m.getDate()} ${
    months[m.getMonth()]
  }`;
}
window.addEventListener("load", () => {
  updateTime();
  change = setInterval(() => {
    let m = new Date();
    minute = m.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    } else {
      minute = `${minute}`;
    }
    hour = m.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    } else {
      hour = `${hour}`;
    }
    clockEl.innerHTML = `${hour}:${minute}`;
    dateEl.innerHTML = `${weekdays[m.getDay()]} ${m.getDate()} ${
      months[m.getMonth()]
    }`;
  }, 5000);
});

//
// OPEN WINDOW ON CLICK
//

let zindex = 1;

// let folderIcons = document.getElementsByClassName("folder_icon");
const folderIcons = document.querySelectorAll('.folder_icon');

function openWindow(windowName) {
  zindex += 1;
  if (windowName == "about") {
    document.getElementById("about_window").classList.toggle("visible");
    document.getElementById("about_window").style.zIndex = zindex;
    console.log("about clicked");
  } else if (windowName == "work") {
    document.getElementById("work_window").classList.toggle("visible");
    document.getElementById("work_window").style.zIndex = zindex;
    if (document.getElementById("work_window").classList.contains("visible")) {
      document.getElementById("work_bread").style.transitionDuration = "0.3s";
      folderIcons.forEach(folder => {
        folder.style.transitionDuration = "0.3s";
      });
      console.log("element visible")
    }
    else {
      document.getElementById("work_bread").style.transitionDuration = "0s";
      folderIcons.forEach(folder => {
        folder.style.transitionDuration = "0s";
      });
      console.log("element not visible")
    }
    console.log("work clicked");
  } else if (windowName == "projects") {
    document.getElementById("projects_window").classList.toggle("visible");
    document.getElementById("projects_window").style.zIndex = zindex;
    console.log("projects clicked");
  } else if (windowName == "downloadCV") {
    document.getElementById("downloadCV_window").classList.toggle("visible");
    document.getElementById("downloadCV_window").style.zIndex = zindex;
    console.log("downloadCV clicked");
  } else if (windowName == "contacts") {
    document.getElementById("contacts_window").classList.toggle("visible");
    document.getElementById("contacts_window").style.zIndex = zindex;
    console.log("contacts clicked");
  }
}

let onTop = -1;
const windows = [about_window, work_window, contacts_window];

const bring_on_top = (num) => {
  if (onTop != num) {
    zindex += 1;
    onTop = num;
    windows[num].style.zIndex = zindex;
  }
};

let aboutGeneral = document.getElementById("about_general");
let aboutInterests = document.getElementById("about_interests");
let aboutSkills = document.getElementById("about_skills");

const tabsAccess = [aboutGeneral, aboutInterests, aboutSkills];
const tabs = document.querySelectorAll(".nav_horizontal-item");
function openTab(number) {
  for (let el in tabsAccess) {
    el != number
      ? tabsAccess[el].classList.remove("display_block")
      : tabsAccess[el].classList.add("display_block");
    el == number
      ? tabs[el].classList.add("active")
      : tabs[el].classList.remove("active");
  }
}

let notparkour_f = document.getElementById("notparkour_folder");
let asrm_f = document.getElementById("asrm_folder");
let crayoladraw_f = document.getElementById("crayoladraw_folder");
let cair_f = document.getElementById("cair_folder");
let cosimo_f = document.getElementById("cosimo_folder");
let posters_f = document.getElementById("posters_folder");
let digitalart_f = document.getElementById("digitalart_folder");

let general = document.getElementById("work_general_content");
let notparkour = document.getElementById("notparkour_content");
let asrm = document.getElementById("asrm_content");
let crayoladraw = document.getElementById("crayoladraw_content");
let cair = document.getElementById("cair_content");
let cosimo = document.getElementById("cosimo_content");
let posters = document.getElementById("posters_content");
let digitalart = document.getElementById("digitalart_content");

const sectionAccess = [
  notparkour_f,
  asrm_f,
  crayoladraw_f,
  cair_f,
  cosimo_f,
  posters_f,
  digitalart_f,
];
const contentAccess = [
  general,
  notparkour,
  asrm,
  crayoladraw,
  cair,
  cosimo,
  posters,
  digitalart,
];
const contentAccessLol = [
  "general",
  "notparkour",
  "asrm",
  "crayoladraw",
  "cair",
  "cosimo",
  "posters",
  "digitalart",
];

const contentBreadcrumbs = {
  general: "",
  notparkour: " -> UX/UI -> Not Parkour",
  asrm: " -> UX/UI -> ASRM",
  crayoladraw: " -> UX/UI -> Crayola Draw",
  cair: " -> Logo Design -> CAIR",
  cosimo: " -> Logo Design -> Cosimo",
  posters: " -> Illustations -> Posters",
  digitalart: " -> Illustrations -> Digital Art",
};

const sections = document.querySelectorAll(".folder");
const content = document.querySelectorAll(".work_content");

function openSection(sectionName) {
  const bread = document.getElementById("inside_bread");
  bread.textContent = contentBreadcrumbs[sectionName];
  // sectionName.classList.add("button");
  for (let el in contentAccess) {
    contentAccessLol[el] != sectionName
      ? contentAccess[el].classList.remove("display_block")
      : contentAccess[el].classList.add("display_block");
    console.log("content clicked");
  }
}

// function openSection(sectionName) {
//   if (sectionName == 'notparkour') {

//   }
//   else if (sectionName == 'asrm') {

//   }
//   else if (sectionName == 'crayoladraw') {

//   }
//   else if (sectionName == 'cair') {

//   }
//   else if (sectionName == 'cosimo') {

//   }
//   else if (sectionName == 'posters') {

//   }
//   else if (sectionName == 'digitalart') {

//   }
// }

const audio = new Audio("click_sound.mp3");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if(!audio.paused) { /* Check if it's not paused */
        audio.pause();  /* To pause the audio */
        audio.currentTime = 0;  /* To reset the time back to 0 */
    }
    else {
        audio.play();  /* To make it play again */
    }
  });
});

const audioDisplay = document.getElementById("volume_display");
const audioIcon = document.getElementById("volume_icon");

function volumeToggle() {
  if (audioDisplay.classList.contains("soundOn")) {
    audioIcon.src = "/images/volume_icon_off.png";
    audioDisplay.classList.remove("soundOn");
    audio.volume = 0;
    console.log("sound is off");
  }
  else {
    audioIcon.src = "/images/volume_icon.png";
    audioDisplay.classList.add("soundOn");
    audio.volume = 1;
    console.log("sound is on");
  }
}

const interestsAbout = document.querySelectorAll(".about_spans");

function spanHover() {
  interestsAbout.forEach(span => {

    span.addEventListener("mouseover", () => {
      span.style.letterSpacing = "2px";
      span.style.transitionDuration = "0.3s";
      span.style.fontStyle="italic";
      span.style.color="var(--neongreen)";
    });
  });
}

function spanHoverNot() {
  interestsAbout.forEach(span => {

    span.addEventListener("mouseout", () => {
      span.style.letterSpacing = "0px";
      span.style.transitionDuration = "0s";
      span.style.fontStyle="normal";
      span.style.color="black";
    });
  });
}

var starSpan = document.createElement("span");
starSpan.innerHTML = "star";
starSpan.classList.add("material-symbols-outlined");

function rateSkills(score) {
  if (score==1) {
    document.getElementById("skills_score").appendChild(starSpan);
    // for (let i = 0; i <= score; i++) {
    //   document.getElementById("skills_score").appendChild(starSpan);
    //   console.log("1 star");
    // }
  }
  else if (score==2) {
    starSpan.innerHTML = "star star";
    document.getElementById("skills_score").appendChild(starSpan);
  }
  else if (score==3) {
    starSpan.innerHTML = "star star star";
    document.getElementById("skills_score").appendChild(starSpan);
  }
  else if (score==4) {
    starSpan.innerHTML = "star star star star";
    document.getElementById("skills_score").appendChild(starSpan);
  }
  else if (score==5) {
    starSpan.innerHTML = "star star star star star";
    document.getElementById("skills_score").appendChild(starSpan);
  }
}