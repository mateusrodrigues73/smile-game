import Circle from './Circle.js';

export default class Enemy extends Circle {

  constructor (x, y, size, speed, color) {
    super(x, y, size, speed, color);
    this.line = 1;
  }

  moveEnemy (limits) {
    this.y += this.speed;
    this.enemyLimits(limits);
  }

  enemyLimits (limits) {
    const colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    if (this.y - this.size > limits.height) {
      this.y = 0 - this.size * 2;
      this.x = Math.random() * limits.width;
      this.color = 
        '#' + colors[parseInt(Math.random() * (colors.length - 1))]
        + colors[parseInt(Math.random() * (colors.length - 1))]
        + colors[parseInt(Math.random() * (colors.length - 1))];
    }
  }
}
