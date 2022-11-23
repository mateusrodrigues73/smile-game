export default class Message {

  constructor (color, score) {
    this.color = color;
    this.score = score;
    this.text = `YOUR SCORE: `;
    this.size = 20;
    this.family = 'arial';
    this.baseLine = 'base';
    this.style = 'bold';
  }

  printMessage (context, limits) {
    context.font = `${this.style} ${this.size}px ${this.family}`;
    context.textBaseline = this.baseLine;
    context.fillStyle = this.color;
    const textMetric = context.measureText(this.text+this.score);
    context.fillText(
      this.text+this.score, 
      limits.width / 2 - textMetric.width / 2, 
      30
    );
  }
}

