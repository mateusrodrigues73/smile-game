import Circle from './Circle.js';

export default class Food extends Circle {

  constructor (x, y, size, speed, color) {
    super(x, y, size, speed, color);
  }
  
  drawFood (context) {
    this.drawCircle(context);
		this.circle(context, this.x, this.y, this.size, 2, 'black');
  }
}
