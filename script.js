// Selectors for Google Apps
const toggle = document.querySelector("#toggle");
const theme = document.querySelector("#theme-link");
const btnApps = document.querySelector("#google-drive-container");
const appsPop = document.querySelector("#google-apps");
// Selectors for Search Nav Bar
const searchNav = document.querySelector("#search-nav");
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#btn-search");
const luckyBtn = document.querySelector("#btn-lucky");
const previousSearches = document.getElementsByClassName("previous-search");
const lupaImg = document.querySelector("#lupa");
const clockImg = [...document.querySelectorAll(".clock")];

// Listen for a click on the checkbox
function toggleTheme() {
  document.documentElement.classList.toggle("dark-theme");
  lupaImg.classList.toggle("invert");
  for (let i = 0; i < clockImg.length; i++) {
    clockImg[i].classList.toggle("invert");
  }
}

// Listen for a click on the google apps button or outside the element
document.addEventListener("click", function (e) {
  if (btnApps.contains(e.target) && !appsPop.classList.contains("hide")) {
    appsPop.classList.add("hide");
  } else if (btnApps.contains(e.target) && appsPop.classList.contains("hide")) {
    appsPop.classList.remove("hide");
  } else if (!appsPop.contains(e.target)) {
    appsPop.classList.add("hide");
  }
});

const openSearches = function () {
  searchNav.style.height = "300px";
  searchBtn.style.display = "none";
  luckyBtn.style.display = "none";
  for (let i = 0; i < previousSearches.length; i++) {
    previousSearches[i].style.display = "flex";
  }
};

const closeSearches = function () {
  searchNav.style.height = "3.3em";
  searchBtn.style.display = "block";
  luckyBtn.style.display = "block";
  for (let i = 0; i < previousSearches.length; i++) {
    previousSearches[i].style.display = "none";
  }
};
// Listen for clicks in order to display or not previous searches
document.addEventListener("click", function (e) {
  if (searchInput.contains(e.target)) {
    openSearches();
  } else if (!searchNav.contains(e.target)) {
    closeSearches();
  }
  // Fill the input with the selected previous search
  for (let j = 0; j < previousSearches.length; j++) {
    if (previousSearches[j].contains(e.target)) {
      searchInput.value = document.getElementById(`search${j}`).textContent;
      closeSearches();
    }
  }
});

// Listen when the user types something in the input
searchInput.addEventListener("input", (evt) => {
  closeSearches();
});
