# Google Homepage - The Odin Project #01

![Google-Logo](https://user-images.githubusercontent.com/66780327/114438684-5fec0580-9bc8-11eb-83ff-4c16f9cc67fc.PNG)

Go to the [Live Preview](https://shifujulen.github.io/google_homepage/)

## Brief Introduction

This is the first project from the Odin Curriculum. In this case, we are going to re-create the Google Homepage with plain HTML and CSS.

Before starting to code, I tried to play a little bit with Figma so I could come up with a few tweaks from the original Google Design.

This was the first time working with a developer's environment in Linux. At first I was kind of scared with some of the git commands. Nevertheless, after a few starting bugs, the whole experience was a positive one.

## Goals of the project

- [x] Start thinking about how elements get placed on the page
- [x] How elements get styled and aligned
- [x] Get used to basic Git Commands
- [x] Implement your own design with Figma
- [x] Create and Share a Live Preview Simulation of the site

## Key Features

- Type anything you want in the central search bar
- Hover over elements to see the change in style
- Use the footer to navigate through official Google Links
- Google apps plus Profile pic in the center for simple alignment
- Dark Theme Toggle

## Approaches

### Search Bar Box-Shadow

For this feature, I tried different ways of transitioning between shadows and background-colors when hovering the mouse. In the end, I really liked the way panels in "The Odin Project". I tried mimicking that effect by putting a darker color when hovering and using a transition of 2 seconds.

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

## Additional Improvements

These are a few improvements that I would like to work on as I have free time during the next months. I will try to implement some of the new acquired knowledge during The Odin Project.

- [ ] Add previous searches box when typing a search
- [x] Dark Theme Toggle
- [ ] Pop-up with Javascript for Google Apps and Profile
- [ ] Voice recognition software for searching
- [ ] Build the results page layout
- [ ] Make it Responsive
- [ ] Add Spanish and Japanese Versions

If you have a cool idea on how to implement a feature, please don't hesitate on contributing on the project or send me a message with the feedback.

## Other Sources

[How to build a great search box](https://medium.com/@samdutton/how-to-build-a-great-search-box-2b9a6d1dce0d)

## Credits

Developed by Julen Diaz

Follow me on [LinkedIn](https://es.linkedin.com/in/julenfront)
Follow me on [Youtube](https://www.youtube.com/channel/UCUoloquxVnnNLFTD8RwthIQ)
