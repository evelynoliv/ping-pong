console.log(typeof (null))

// ELEMENTS
let gameStart;
let gameBall;
let gameSystem;
let gamePlayer;
let gameScoreboard;


//KEYBOARD CONTROL
let keyControl;


//ANIMATION CONTROL
let frames;


//POSITIONS
let posBallX, posBallY;
let posPlayerX, posPlayerY;
let posSystemX, posSystemY;


//INITIAL DIRECTIONS
let playerInitialY = 180;
let playerInitialX = 10;
let systemInitialX = 180;
let systemInitialY = 180;
let ballInitialX = 475;
let ballInitialY = 240;


//AREA
let areaX = 0, areaY = 960, areaW = 960, areaH = 500;
let barW = 20, barH = 140;
let ballAreaW = 20, ballAreaH = 20;
let ballW = 20, ballH = 0;


//DIRECTIONS
let ballX, ballY;
let systemY = 0;


//SPEED
let speedBall, speedSystem, speedPlayer;


//CONTROLS

let score = 0;
let keyboard;
match = false

function playerControl() {
  if (match) {
    posPlayerY += speedPlayer * keyControl;
    if (((posPlayerY + barH) >= areaH) || ((posPlayerY) <= 0)) {
      posPlayerY += (speedPlayer * keyControl) * (-1);
    }
    gamePlayer.style.top = posPlayerY + 'px';
  }
}

function systemControl() {
  if (match) {
    if ((posBballY > (areaW / 2)) && (ballX > 0)) {
      if (((posBballY + (ballH / 2)) > ((posSystemY + (barH / 2))) + speedSystem)) {
        if ((posSystemY + barH) <= areaH) {
          posSystemY += speedSystem;
        }
      } else if ((posBallY + (ballH / 2)) < (posSystemY + (barH / 2)) - speedSystem) {

        if (posSystemY >= 0) {
          posSystemY -= speedSystem;
        }
      }
    } else {

      if ((posSystemY + (barH / 2)) < (H / 2)) {
        posSystemY += speedSystem;
      } else if ((posCpuY + (barH / 2)) > (areaH / 2)) {
        posSystemY -= speedSystem;
      }
    }
    gameSystem.style.top = posSystemY + 'px';
  }
}

function ballControl() {
  posBallX += speedBall * ballX
  posBallY += speedBall * ballY

  if ((posBallX <= posPlayerX + barW) && ((posBallY + ballH >= posPlayerY) && (posBallY <= posPlayerY + barH))) {
    ballY = (((posBallY + (ballH / 2)) - (posPlayerY + (barH / 2))) / 64);
    ballX *= -1;

  }
}

