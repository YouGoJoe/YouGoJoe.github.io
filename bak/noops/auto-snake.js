let canvas;
let ctx;
let appWidth;
let appHeight;
const DIRECTIONS = {
  right: 'RIGHT',
  left: 'LEFT',
  up: 'UP',
  down: 'DOWN'
};
let pointSize = 5;
let currX;
let currY;

// called by NOOPBOT on window.onload
function start_app() {
  // size canvas to window
  sizeCanvas();

  // set initial x & y
  currX = Math.ceil(appWidth / 10);
  currY = Math.ceil(appHeight / 10);

  //set up a ticker to refresh page automatically.
  let speed = 50; // how often screen refreshes, in milliseconds.

  let ticker = NOOPBOT_TICK_SETUP(advanceAndDraw, speed);
}

function sizeCanvas() {
  appWidth = window.innerWidth;
  appHeight = window.innerHeight;
  canvas = document.getElementById('canvas');
  ctx = NOOPBOT_SETUP_CANVAS({ canvas: canvas, bgColor: '#ffffff' });
}

function advanceAndDraw() {
  NOOPBOT_FETCH(
    {
      API: 'directbot'
    },
    ({ directions: [{ direction: botDirection }] }) => {
      const direction = DIRECTIONS[botDirection];

      if (direction === DIRECTIONS.right && currX + pointSize < appWidth) {
        currX += pointSize;
      } else if (direction === DIRECTIONS.left && currX - pointSize > 0) {
        currX -= pointSize;
      } else if (direction === DIRECTIONS.down && currY + pointSize < appHeight) {
        currY += pointSize;
      } else if (direction === DIRECTIONS.up && currY - pointSize > 0) {
        currY -= pointSize;
      }
      draw({ x: currX, y: currY });
    }
  );
}

function draw({ x, y }) {
  //get the data!
  NOOPBOT_FETCH(
    {
      API: 'hexbot'
    },
    ({ colors: [{ value }] }) => {
      ctx.fillStyle = value;
      //   ctx.globalAlpha = Math.random();
      ctx.beginPath();
      ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
      ctx.fill();
    }
  );
}

// listen if browser changes size.
window.onresize = function(event) {
  sizeCanvas();
  draw();
};
