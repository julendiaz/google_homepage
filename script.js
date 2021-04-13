// Toggle Theme
// Select the button
console.log("hello world")

const toggle = document.querySelector("#toggle")
// Select the stylesheet
const theme = document.querySelector("#theme-link");

// Listen for a click on the checkbox
function toggleTheme() {
    if (toggle.checked) {
        theme.href = "dark.css";
    } else {
        theme.href = "styles.css";
    }
}


