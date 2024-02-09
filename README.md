# SVGLogoCraft


## Overview
 SVGLogoCraft is a Node.js command-line application designed to empower freelance web developers with the ability to generate simple, customizable logos for their projects. Without needing to invest in graphic design services, users can specify their desired text (up to three characters), text color, shape (from a choice of circle, triangle, or square), and shape color to create a personalized logo. The logo is saved as an SVG file, enabling easy integration into web projects or further customization. This repository contains all necessary files, including the application code, example generated SVG files, and comprehensive unit tests for each shape using Jest. Follow the README for setup instructions and watch the walkthrough video to see SVGLogoCraft in action, demonstrating its utility in streamlining the creation of project logos.


## Table of Contents
1. [Overview](#overview)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Features](#features)
7. [Technologies Used](#technologies-used)
8. [Screenshot](#screenshot)
9. [Deployed Application](#deployed-application)
10. [License](#license)
11. [Collaborators](#collaborators)
12. [Code Attribution](#code-attribution)
13. [External Resources](#external-resources)
14. [Credits](#credits)


## User Story
AS a freelance web developer,
I WANT to generate a simple logo for my projects,
SO THAT I don't have to pay a graphic designer.

## Acceptance Criteria
GIVEN a command-line application that accepts user input,
- WHEN I am prompted for text, THEN I can enter up to three characters.
- WHEN I am prompted for the text color, THEN I can enter a color keyword or a hexadecimal number.
- WHEN I am prompted for a shape, THEN I am presented with a list of shapes to choose from: circle, triangle, and square.
- WHEN I am prompted for the shape's color, THEN I can enter a color keyword or a hexadecimal number.
- WHEN I have entered input for all the prompts, THEN an SVG file is created named `logo.svg`.

## Installation
To install SVG Logo Maker, clone the repository and run `npm install` to install the necessary dependencies.

```bash
git clone https://github.com/Kykesh/SVGLogoCraft.git
cd SVGLogoCraft
npm install
```

## Usage
To use the application, navigate to the project directory and run:

```bash
node index.js
```

Follow the prompts to customize your logo.

## Features
- Customizable text, text color, shape, and shape color.
- Easy-to-use command-line interface.
- Generates SVG files for easy integration into web projects.

## Technologies Used
- Node.js
- Inquirer for collecting input
- Jest for unit testing

## Screenshot
![SVG Logo Maker Screenshot](path/to/screenshot.png)

## Deployed Application
This application is a command-line tool and does not have a deployed version.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Collaborators
- Kyle Huff

## Code Attribution
- Inquirer.js (https://github.com/SBoudrias/Inquirer.js)
- Jest (https://jestjs.io/)

## External Resources
- SVG Basics (https://developer.mozilla.org/en-US/docs/Web/SVG)
- Node.js Documentation (https://nodejs.org/en/docs/)

## Credits
Developed by Kyle Huff. Special thanks to all external libraries and resources listed above.

