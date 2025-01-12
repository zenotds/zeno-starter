# Zeno's Starter DevKit
JS + SCSS Build Pipeline for Wordpress themes with Timber

This is a simple frontend starter setup used in static template development such as Wordpress themes or other CMS related templating situations.
The point of this environment is watching and building scripts and styles leveraging a more modern approach with ES Modules and SASS.


## Basic Structure

Structure the theme as you see fit. Just keep the structure for these 2 folders:

- assets -> compiled files
  - js -> compiled scripts
  - css -> compiled styles

- dev -> source files
  - js -> source scripts
  - scss -> source styles


## Instructions

1. Run `npm install` to install all dependencies
2. Run `npm run watch` to watch for changes and build assets
3. Run `npm run build` to build assets


## Build notes

- Fonts (woff, woff2, ttf, eot) are ignored and not processed so keep dependant files relative to the /assets/ folder
- Images are processed with inlineImage plugin. See documentation.


## Notes

- Avoid images in css, there are better ways :P
- The starter comes with some useful JS packages such as Bootstrap, Swiper, Plyr, etc.
- I usually base my themes on Bootstrap and just compile the styles i need to.
- Feel free to edit whatever you want as you see fit.

## Changelog

v1.0 - First release, Only JS, Webpack bundler. Basic dependencies. Some custom scripts

v1.5 - JS and SCSS parsing with Webpack and PostCSS. More useful dependencies.

v2.0 - New bundler: esbuild, faster and lighter!

v3.0 - Tailored for WP. 
- integrated with Tailwind (not mandatory)
- moved all scripts at root level
- better hoverintent
- TODO, tailwind structure is a bit iffy

v3.5 - Better Tailwind integration
- can use either TW or BS or a mix of both
- write version to style.css on build
- fixed tailwind recursion, now it's all integrated in the base styles.scss
- all comments in the script made in italian (sorry about that)
- streamlined scss folder structure
- TODO, will have to deal with SASS @import deprecation at some point, that sucks..