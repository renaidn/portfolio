const createList = (name, arr) => {
  const semantic_item = document.createElement("li");
  semantic_item.classList.add("nav_text-group");
  const nav_list = document.createElement("ul");
  for (let element in arr) {
    nav_list.appendChild(createListItem(arr[element]));
  }
  const nav_name = document.createElement("p");
  nav_name.classList.add("nav_text-head");
  nav_name.textContent = name;
  semantic_item.appendChild(nav_name);
  semantic_item.appendChild(nav_list);
  return semantic_item;
};

const name_to_section = {
  "NOT Parkour": "notparkour",
  ASRM: "asrm",
  CrayolaDraw: "crayoladraw",
  CAIR: "cair",
  Cosimo: "cosimo",
  // Posters: "posters",
  // "Digital Art": "digitalart",
};

const createListItem = (name) => {
  const list_item = document.createElement("li");
  list_item.addEventListener("click", () => {
    openSection(name_to_section[name]);
  });
  list_item.classList.add("nav_text-el");
  const item_span = document.createElement("span");
  item_span.classList.add("material-symbols-outlined");
  item_span.innerHTML = "south_east";
  const item_name = document.createElement("i");
  item_name.classList.add("fa-regular");
  item_name.classList.add("fa-alien-8bit");
  item_name.innerHTML = name;
  list_item.appendChild(item_span);
  list_item.appendChild(item_name);
  return list_item;
};

let nav_elements = {
  // Favorites: ["Recents", "Downloads"],
  "UX/UI": ["NOT Parkour", "ASRM", "CrayolaDraw"],
  "Logo Design": ["CAIR", "Cosimo"],
  // Illustrations: ["Posters", "Digital Art"],
};
window.onload = () => {
  const nav_list = document.querySelector(".nav_text");
  for (const [key, value] of Object.entries(nav_elements)) {
    nav_list.appendChild(createList(key, value));
  }
};
/* <div class="nav_text-group">
  <p class="nav_text-head">Favorites</p>
  <p class="nav_text-el">
    <span class="material-symbols-outlined"> layers </span>
    <i class="fa-regular fa-alien-8bit"></i>Recents
  </p>
  <p class="nav_text-el">
    <span class="material-symbols-outlined"> layers </span>
    <i class="fa-light fa-lungs"></i>Downloads
  </p>
</div>; */

{
  /* <div class="nav_text-group">
              <p class="nav_text-head">Favorites</p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span
                ><i class="fa-regular fa-alien-8bit"></i>Recents
              </p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span
                ><i class="fa-light fa-lungs"></i>Downloads
              </p>
            </div>
            <div class="nav_text-group">
              <p class="nav_text-head">UX/UI</p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span>
                <i class="fa-regular fa-alien-8bit"></i>NOT Parkour
              </p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span
                ><i class="fa-light fa-lungs"></i>ASRM
              </p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span
                ><i class="fa-light fa-pen-swirl"></i>CrayolaDraw
              </p>
            </div>
            <div class="nav_text-group">
              <p class="nav_text-head">Logo Design</p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span
                ><i class="fa-regular fa-alien-8bit"></i>CAIR
              </p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span
                ><i class="fa-light fa-lungs"></i>Cosimo
              </p>
            </div>
            <div class="nav_text-group">
              <p class="nav_text-head">Illustrations</p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span
                ><i class="fa-regular fa-alien-8bit"></i>Posters
              </p>
              <p class="nav_text-el">
                <span class="material-symbols-outlined"> layers </span
                ><i class="fa-light fa-lungs"></i>Digital Art
              </p>
            </div>  */
}

// <!-- <div class="window_nav">
// <div class="window_control">
// <div id="close_window-btn"></div>
// <div id="min_window-btn"></div>
// </div>
// <div class="nav_text">
// <div class="nav_text-group">
//     <p class="nav_text-head">Favorites</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-regular fa-alien-8bit"></i>Recents</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-light fa-lungs"></i>Downloads</p>
// </div>
// <div class="nav_text-group">
//     <p class="nav_text-head">UX/UI</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-regular fa-alien-8bit"></i>NOT Parkour</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-light fa-lungs"></i>ASPM</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-light fa-pen-swirl"></i>CrayolaDraw</p>
// </div>
// <div class="nav_text-group">
//     <p class="nav_text-head">Logo Design</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-regular fa-alien-8bit"></i>CAIR</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-light fa-lungs"></i>Cosimo</p>
// </div>
// <div class="nav_text-group">
//     <p class="nav_text-head">Illustrations</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-regular fa-alien-8bit"></i>Posters</p>
//     <p class="nav_text-el"><span class="material-symbols-outlined">
//         layers
//         </span><i class="fa-light fa-lungs"></i>Digital Art</p>
// </div>
// </div>
// </div>
// <div class="window_link">
// <p id="page_root">page_root</p>
// </div> -->
