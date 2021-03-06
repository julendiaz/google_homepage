# Google Homepage - The Odin Project #01

![Google-Logo](https://user-images.githubusercontent.com/66780327/114438684-5fec0580-9bc8-11eb-83ff-4c16f9cc67fc.PNG)

Go to the [Live Preview](https://julendiaz.github.io/google_homepage/)

## Table of Contents

- [Brief Introduction](#Brief-Introduction)
- [Goals of the Project](#Goals-of-the-project)
- [Key Features](#Key-Features)
- [Approaches](#Approaches)
  - [Search Bar Box-shadow](#Search-Bar-Box-Shadow)
  - [Footer Flex-box](#Footer-Flex-box)
  - [Switch Toggle Theme](#Switch-Toggle-Theme)
  - [Google Apps Pop Up](#Google-Apps-Pop-Up)
  - [Previous Searches Display](#Previous-Searches-Display)
- [Additional Improvements](#Additional-Improvements)
- [Other Sources](#Other-Sources)
- [Credits](#Credits)

## Brief Introduction

This is the first project from the Odin Curriculum. In this case, we are going to re-create the Google Homepage with plain HTML and CSS.

Before starting to code, I tried to play a little bit with Figma so I could come up with a few tweaks from the original Google Design.

This was the first time working with a developer's environment in Linux. At first I was kind of scared with some of the git commands. Nevertheless, after a few starting bugs, the whole experience was a positive one.

## Goals of the project

- [x] Start thinking about how elements get placed on the page
- [x] How elements get styled and aligned
- [x] Get used to basic Git Commands
- [x] Implement your design with Figma
- [x] Create and Share a Live Preview Simulation of the site

## Key Features

- Type anything you want in the central search bar
- Hover over elements to see the change in style
- Use the footer to navigate through official Google Links
- Google apps plus Profile pic in the center for simple alignment
- Dark Theme Toggle
- Google Apps Display Pop Up
- Previous Searches Display

## Approaches

### Search Bar Box-Shadow

For this feature, I tried different ways of transitioning between shadows and background-colors when hovering the mouse. In the end, I liked the way panels in "The Odin Project". I tried mimicking that effect by putting a darker color when hovering and using a transition of 2 seconds.

```css
#search-nav {
  box-shadow: 0px 4px 31px -8px rgba(80, 80, 80, 0.33);
  transition: 0.2s;
}

#search-nav:hover {
  box-shadow: 0px 4px 31px -8px rgba(10, 10, 10, 0.33);
}
```

### Footer Flex-box

While the grid system is nice for other purposes, I feel now more comfortable with the flex-box method. In this case I just played with the size of the divs and use "space-between" to justify the content. I think it was an easy and light way of separating the different links.

```css
footer {
  background-color: var(--almostgrey);
  position: fixed;
  left: 0;
  bottom: 0;
  height: 53px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: var(--montserrat);
}
```

### Switch Toggle Theme

For implementing the famous Switch Toggle between Light and Dark themes, I wanted to learn how to design and implement the rounded switch button. I haven't really thought about it, but it makes sense that it is based on a checkbox input. It wasn't that difficult to find how to develop it. This is the [source](https://www.w3schools.com/howto/howto_css_switch.asp) I used.

```html
<label class="switch">
  <input type="checkbox" id="toggle" onclick="toggleTheme()" />
  <span class="slider round"></span>
</label>
```

If you happen to question why I added the "onclick" attribute, is because of the approach for using javascript when clicking on the checkbox and toggle themes.

There are a few different ways of implementing the toggle, but I happen to like the one where you just make a copy of the main css and change the color variables into a dark mode.

```css
:root {
  --montserrat: "Montserrat", sans-serif;
  --containerback: #2e2e2e;
  --containerhover: #333333;
  --searchback: rgb(56, 56, 56);
  --footerback: #272727;
  --footertext: #888888;
  --texthover: rgb(168, 168, 168);
}
```

Then, we add an id in the link for the css so we can grab the href with javascript and change it when we check the switch.

```html
<link rel="stylesheet" href="styles.css" id="theme-link" />
```

After we have designed the switch, create a separate dark.css file and identify our stylesheet line, we create a javascript file and run the function we wrote on the "onclick" property for the input.

```javascript
// Select the button
const toggle = document.querySelector("#toggle");
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
```

If you happen to struggle with some of my explanations, don't hesitate to go to this [guide](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#using-separate-stylesheets) or this [article](https://html.form.guide/html-form/html-checkbox-events/).
I think of it as a simple and easy way of implementing the theme toggle. If you happen to know of a better way of doing it, please let me know :)

### Google Apps Pop Up

For this feature, I wanted to try using the Grid System instead of Flex Box. It actually seemed more appropiate because of the way google apps are displayed in the official website. I was sure that there was a way to organize items in a common grid with just a few lines of CSS code.

In the html file, I just added all of the items to be displayed with the use of simple divs and some useful classes such as grid-item or grid-container.

```html
<div class="popup grid-container hide" id="google-apps">
  <div class="grid-item grid-item-1">
    <img src="images/maps.png" alt="Google Maps Logo" />
    <p>Maps</p>
  </div>
  <div class="grid-item grid-item-2">
    <img src="images/youtube.png" alt="Youtube Logo" />
    <p>Youtube</p>
  </div>
  <div class="grid-item grid-item-3">
    <img src="images/play.png" alt="Google Play Logo" id="gplay" />
    <p>Play</p>
  </div>
  <!-- There are 9 of them but just to show you an example -->
</div>
```

As I mentioned earlier, with just a couple of lines of code in CSS, we are able to organize all items with identical sizes.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 85px);
  padding: 20px;
}
```

In the Javascript file, I had to play for a while until getting the result that I wanted. My aim was to be able to hide the display either by clicking outside of the item or clicking on the google apps button again. This is the solution I came with:

```javascript
//Select the google apps div
const btnApps = document.querySelector("#google-drive-container");
//Select the google apps popup
const appsPop = document.querySelector("#google-apps");

// Listen for a click on the google apps button or outside the element
document.addEventListener("mouseup", function (e) {
  if (btnApps.contains(e.target) && !appsPop.classList.contains("hide")) {
    appsPop.classList.add("hide");
  } else if (btnApps.contains(e.target) && appsPop.classList.contains("hide")) {
    appsPop.classList.remove("hide");
  } else if (!appsPop.contains(e.target)) {
    appsPop.classList.add("hide");
  }
});
```

In the end, i really liked the result. Maybe I could think of adding an scroll mode so I can add more than 9 Google items, but more of that in another chapter.

### Previous Searches Display

Okey, I think this was by far the most troublesome feature for now. For some reason, I didn't know if the autocomplete attribute of the search input form worked. That's why I wanted to try and re-create by my own a simple autocomplete for the previous searches like Google has.

Starting with the HTML, I just had to add 5 more divs underneath the already made search-nav. I thought of trying to add with a loop 5 of these elements with javascript but I didn't really know how to do that, so I went for the simpler route.

```html
<div class="previous-search">
  <img id="clock" src="images/clock.png" alt="search icon" />
  <p class="paragraph-search" id="search0">How to learn code</p>
</div>
```

For the CSS there is not much mistery about it. I just tried to add the same styles like the search-nav, with the singularity of leaving the display to "none", in order to trigger it with Javascript.

```css
.previous-search {
  display: none;
  width: 100%;
  height: 50px;
  align-items: center;
  font-weight: 500;
  font-size: 0.85rem;
  color: var(--texthover);
}
```

Finally, in the javascript file I enjoyed playing with different ways of displaying an element regarding the clicks. For getting a cleaner result, I stored the actions of opening and closing the previous searches display in two functions. Another solution for simplification, was to use the template literal to select each of the previous searches in case of a click.

```javascript
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
```

Thanks to a few hours of research, I encountered an article about how to check if the value of an input is empty or not. This way I could close down the display whenever the users starts typing. It was as simple as this:

```javascript
searchInput.addEventListener("input", (evt) => {
  closeSearches();
});
```

## Additional Improvements

These are a few improvements that I would like to work on as I have free time during the next months. I will try to implement some of the new acquired knowledge during The Odin Project.

- [x] Add previous searches box when typing a search
- [x] Dark Theme Toggle
- [x] Pop-up with Javascript for Google Apps
- [x] Change Typography
- [ ] Voice recognition software for searching
- [ ] Build the results page layout
- [ ] Add Spanish and Japanese Versions
- [ ] **Create a Google Clone with React JS and API's**

If you have a cool idea on how to implement a feature, please don't hesitate on contributing on the project or send me a message with the feedback.

## Other Sources

[How to build a great search box](https://medium.com/@samdutton/how-to-build-a-great-search-box-2b9a6d1dce0d)
[Checking if an input is empty](https://zellwk.com/blog/check-empty-input-js/)

## Credits

Developed by Julen Diaz

Follow me on [LinkedIn](https://es.linkedin.com/in/julenfront)
Follow me on [Youtube](https://www.youtube.com/channel/UCUoloquxVnnNLFTD8RwthIQ)
