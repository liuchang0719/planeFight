var planeObj = function(){
    this.x;
    this.y;
    this.pic = new Image();
}

planeObj.prototype.init = function(){
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;

    this.pic.src = "./src/myPlane.png";
}

planeObj.prototype.draw = function(){
    var pic = this.pic;
    this.x = mx;
    this.y = my;

    ctx.save();
    ctx.translate(this.x, this.y)
    ctx.drawImage(pic, - pic.width * 0.5, - pic.height * 0.5);
    ctx.restore();
}