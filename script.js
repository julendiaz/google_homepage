// Toggle Theme
// Select the button
const toggle = document.querySelector("#toggle");
// Select the stylesheet
const theme = document.querySelector("#theme-link");

//Google apps
//Select the google apps div
const btnApps = document.querySelector("#google-drive-container");
//Select the google apps popup
const appsPop = document.querySelector("#google-apps");

// Listen for a click on the checkbox
function toggleTheme() {
    if (toggle.checked) {
        theme.href = "..css/dark.css";
    } else {
        theme.href = "..css/styles.css";
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



