import Circle from './Circle.js';

export default class Smile extends Circle {

  constructor(x, y, size, speed, color) {
		super(x, y, size, speed, color)
		this.status = 'ArrowDown';
	}

  drawSmile (context) {
    context.fillStyle = '#fff';
    this.drawCircle(context);

    this.circle(
      context,
      this.x - this.size / 2.5,
			this.y - this.size / 4,
			this.size * .1, 
      1, 
      'black', 
      'black'
    );
    this.circle(
      context,
			this.x + this.size / 2.5,
			this.y - this.size / 4,
			this.size * .1, 
      1, 
      'black', 
      'black'
    );

    context.beginPath();
		context.lineWidth = 2;
		context.arc(this.x, this.y + this.size / 4, this.size / 2, 0, Math.PI)
		context.strokeStyle = "#000";
		context.stroke();

		this.circle(context, this.x, this.y, this.size, 2, 'black');
  }

  moveSmile (limits, key) {
    let movements = {
      'ArrowDown': {
        x: this.x, 
        y: this.y + this.speed
      }, 
      'ArrowUp': {
        x: this.x, 
        y: this.y - this.speed
      },
      'ArrowLeft': {
        x: this.x - this.speed, 
        y: this.y
      },
			'ArrowRight': {
        x: this.x + this.speed, 
        y: this.y
      }
    }

    this.status = movements[key] ? key : this.status;
    this.x = movements[this.status].x;
    this.y = movements[this.status].y;
    this.limits(limits);
  }

  limits (limits) {
    this.x = this.x + this.size > limits.width ? limits.width - this.size : this.x;
		this.x = this.x - this.size < 0 ? 0 + this.size : this.x;
		this.y = this.y + this.size > limits.height ? limits.height - this.size : this.y;
		this.y = this.y - this.size < 0 ? 0 + this.size : this.y;
  }
}
