const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const svgCreator = require('./lib/svgCreator');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: input => input.length <= 3,
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):',
  },
];

inquirer.prompt(questions).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;
  const shapeObj = new { Circle, Triangle, Square }[shape](shapeColor);
  const svgContent = svgCreator(text, textColor, shapeObj);
  fs.writeFileSync('./examples/logo.svg', svgContent);
  console.log('Generated logo.svg');
});
