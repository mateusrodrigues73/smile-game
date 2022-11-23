import Enemy from './Enemy.js';
import Smile from './Smile.js';
import Food from './Food.js';
import Message from './Message.js';
import { keyPress, key } from './keyboard.js';

let context;
let canvas;
const frames = 30;
const colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

const totalEnemies = 10;
let enemies = Array.from({length:totalEnemies});
let food = new Food(300, 200, 13, 0, 'yellow');
let message = new Message('darkblue', 0);
const smile = new Smile(300, 100, 20, 6, 'yellow');

let gameOver = false;
let animation;
let limits;

const init = () => {
  console.log('Start');
  canvas = document.querySelector('canvas');
  canvas.width = 600;
  canvas.height = 400;
  context = canvas.getContext('2d');

  limits = {
    width: canvas.width,
		height: canvas.height
  };

  enemies = enemies.map (
    i => new Enemy (
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      10, 
      5, 
      '#' + colors[parseInt(Math.random() * (colors.length - 1))]
      + colors[parseInt(Math.random() * (colors.length - 1))]
      + colors[parseInt(Math.random() * (colors.length - 1))]
    )
  );

  keyPress(window);
	loop();
}

const loop = () => {
  setTimeout(() => {
    context.reset();

    smile.moveSmile(limits, key);
    smile.drawSmile(context);

    food.drawFood(context);

    enemies.forEach(e => {
      e.moveEnemy(limits, 0);
      e.drawCircle(context);
      gameOver = !gameOver ? e.colision(smile) : true;
    });

    if (food.colision(smile)) {
      smile.size++;
      message.score++;
      console.log(`SCORE: ${message.score}`);
      food.x = Math.floor(Math.random() * ((limits.width - 30) - 30 + 1)) + 30;
      food.y = Math.floor(Math.random() * ((limits.height - 30) - 30 + 1)) + 30;
    }

    if (gameOver) {
      message.text = 'GAMEOVER!!! YOUR SCORE WAS: ';
      message.color = 'darkred';
      message.printMessage(context, limits);
      console.error('GAMEOVER');
      cancelAnimationFrame(animation);
    }
    else {
      message.printMessage(context, limits);
      animation = requestAnimationFrame(loop);
    }
  }, 1000 / frames)
}

export { init };
