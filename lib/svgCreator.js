function svgCreator(text, textColor, shapeObj) {
    return `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeObj.render()}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
    `;
  }
  
  module.exports = svgCreator;
  