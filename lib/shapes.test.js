const { Circle, Triangle, Square } = require('./shapes');

describe('Shape rendering', () => {
    test('Circle renders correctly', () => {
      const circle = new Circle('blue');
      expect(circle.render()).toContain('fill="blue"');
    });
  
    test('Triangle renders correctly', () => {
      const triangle = new Triangle('red');
      
      expect(triangle.render()).toContain('fill="red"');
      
      expect(triangle.render()).toContain('points="150, 18 244, 182 56, 182"');
    });
  
    test('Square renders correctly', () => {
      const square = new Square('green');
      
      expect(square.render()).toContain('fill="green"');
     
      expect(square.render()).toContain('width="160"');
      
      expect(square.render()).toContain('height="160"');
    });
  });
