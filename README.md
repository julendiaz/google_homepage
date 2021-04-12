# Google Homepage - The Odin Project #01

![Google-Logo](https://user-images.githubusercontent.com/66780327/114438684-5fec0580-9bc8-11eb-83ff-4c16f9cc67fc.PNG)

Go to the [Live Preview](https://shifujulen.github.io/google_homepage/)

## Brief Introduction 

This is the first project from the Odin Curriculum. In this case, we are going to re-create the Google Homepage with plain HTML and CSS. 

Before starting to code, I tried to play a little bit with Figma so I could come up with a few tweaks from the original Google Design. 

This was the first time working with a developer's environment in Linux. At first I was kind of scared with some of the git commands. Nevertheless, after a few starting bugs, the whole experience was a positive one. 

## Goals of the project

- [X] Start thinking about how elements get placed on the page
- [X] How elements get styled and aligned 
- [X] Get used to basic Git Commands
- [X] Implement your own design with Figma
- [X] Create and Share a Live Preview Simulation of the site 

## Key Features 

- Type anything you want in the central search bar
- Hover over elements to see the change in style
- Use the footer to navigate through official Google Links 
- Google apps plus Profile pic in the center for simple alignment

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
## Additional Improvements

These are a few improvements that I would like to work on as I have free time during the next months. I will try to implement some of the new acquired knowledge during The Odin Project. 

- [ ] Add previous searches box when typing a search
- [ ] Dark Theme Toggle
- [ ] Pop-up with Javascript for Google Apps and Profile
- [ ] Voice recognition software for searching
- [ ] Build the results page layout

If you have a cool idea on how to implement a feature, please don't hesitate on contributing on the project or send me a message with the feedback.

## Credits

Developed by Julen Diaz

Follow me on [LinkedIn](https://es.linkedin.com/in/julenfront) 
Follow me on [Youtube](https://www.youtube.com/channel/UCUoloquxVnnNLFTD8RwthIQ) 
