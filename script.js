// Selectors
const toggle = document.querySelector("#toggle");
const theme = document.querySelector("#theme-link");
const btnApps = document.querySelector("#google-drive-container");
const appsPop = document.querySelector("#google-apps");

// Listen for a click on the checkbox
function toggleTheme() {
    if (toggle.checked) {
        theme.href = "dark.css";
    } else {
        theme.href = "css/styles.css";
    }
};

// Listen for a click on the google apps button or outside the element
document.addEventListener("mouseup", function(e) {
    if(btnApps.contains(e.target) && !appsPop.classList.contains("hide")) {
        appsPop.classList.add("hide");
    } else if (btnApps.contains(e.target) && appsPop.classList.contains("hide")) {
        appsPop.classList.remove("hide");
    } else if (!appsPop.contains(e.target)) {
        appsPop.classList.add("hide");
    } 
});



