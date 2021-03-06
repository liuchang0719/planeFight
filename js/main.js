var can, ctx;

var canWidth, canHeight;

var lastTime;//上一帧执行时间
var deltaTime;//两帧之间的时间间隔

var mx, my;

var plane, bullet, enemy;

var score;

window.onload = game;

function game(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameLoop();
}


function init(){
    can = document.getElementById("canvas1");
    ctx = can.getContext('2d');

    canWidth = can.width;
    canHeight = can.height;

    can.addEventListener('mousemove', onMouseMove, false);


    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    plane = new planeObj();
    plane.init();

    bullet = new bulletObj();
    bullet.init();

    enemy = new enemyObj();
    enemy.init();

    score = new scoreObj();
}

function gameLoop(){

    window.requestAnimationFrame(gameLoop);

    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if(deltaTime > 40){
        deltaTime = 40;
    }

    ctx.clearRect(0, 0, canWidth, canHeight);

    plane.draw();
    bulletMonitor();
    bullet.draw();
    enemyMonitor();
    enemy.draw();
    score.draw();

    bulletEnemyCollision();
    planeEnemyCollision();

}

function onMouseMove(e){
    if(!score.gameOver){
        if(e.offsetX || e.layerX){
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;

        }
    }
}