# Google Homepage - The Odin Project #01

![Google-Logo](https://user-images.githubusercontent.com/66780327/112620395-c3381280-8e28-11eb-872e-19d1cf31583a.png)

## Brief Introduction 

This is the first project from the Odin Curriculum. In this case, we are going to re-create the Google Homepage with plain HTML and CSS. 

Before starting to code, I tried to play a little bit with Figma so I could come up with a few tweaks from the original Google Design. 

This was the first time working with a developer's environment in Linux. At first I was kind of scared with some of the git commands. Nevertheless, after a few starting bugs, the whole experience was a positive one. 

## Goals of the project

- [X] Start thinking about how elements get placed on the page
- [X] How elements get styled and aligned 
- [X] Get used to basic Git Commands
- [X] Implement your own design with Figma
- [ ] Create and Share a Live Preview Simulation of the site 

## Features 

- Type anything you want in the central search bar
- Hover over elements to see the change in style
- Use the footer to navigate through official Google Links 
- Blops on the background for visual aesthetics 
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
