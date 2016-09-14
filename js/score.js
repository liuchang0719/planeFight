var scoreObj = function(){
    this.planeNum = 0;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
}

scoreObj.prototype.reset = function(){
    this.planeNum = 0;
}

scoreObj.prototype.addScore = function(){
    this.score += this.planeNum * 100;
    this.planeNum = 0;
}

scoreObj.prototype.draw = function(){
    ctx.save();
    ctx.shadowBlur = "10";
    ctx.shadowColor = "black";
    ctx.fillStyle = "black";
    ctx.font = "25px Verdana";
    ctx.fillText("score " + this.score, canWidth * 0.5 - 50, 40);

    if(this.gameOver){
        this.alpha += deltaTime * 0.0005;
        if(this.alpha > 1){
            this.alpha = 1;
        }
        ctx.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
        ctx.fillText("GAME OVER", canWidth * 0.5 - 60, canHeight * 0.5);
    }
    ctx.restore();
}