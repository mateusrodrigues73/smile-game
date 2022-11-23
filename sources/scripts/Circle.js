export default class Circle {

  constructor (x, y, size, speed, color) {
    this.x = x;
		this.y = y;
		this.size = size;
		this.speed = speed;
		this.color = color;
		this.line = 3
  }

  drawCircle (context) {
    this.circle(
      context,
      this.x,
      this.y,
      this.size,
      this.line,
      this.color,
      this.color);
  } 

  circle (context, x, y, radius, line, color, fill = false) {
		context.lineWidth = line;
		context.strokeStyle = color;
		context.beginPath();
		context.arc(x, y, radius, 0, Math.PI*2);
		context.stroke();
    if (fill) {
			context.fillStyle = fill;
			context.fill();
		}
	}

  colision (circle) {
    return this.size + circle.size + 2 >= Math.sqrt(Math.pow(this.x - circle.x, 2) + Math.pow(this.y - circle.y, 2));
  }
}
