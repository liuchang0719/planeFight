var bulletObj = function(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.pic = new Image();
    this.bulletTimer;
}

bulletObj.prototype.num = 20;

bulletObj.prototype.init = function(){
    for (var i = 0; i < this.num; i++){
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.pic.src = "./src/bullet.png";
        this.bulletTimer = 0;
    }
}

bulletObj.prototype.draw = function(){
    for(var i = 0; i < this.num; i++){
        if(this.alive[i]){
            this.y[i] -= deltaTime * 0.5;
            var pic = this.pic;
            ctx.drawImage(pic, this.x[i] - pic.width * 0.5, this.y[i] - 50);
        }
        if(this.y[i] < 10){
            this.alive[i] = false;
        }
    }
}

function bulletMonitor(){
    var num = 0;
    for(var i = 0; i < bullet.num; i++){
        if(bullet.alive[i]){
            num++;
        }
        if(num < 15){
            sendBullet();
            return;
        }
    }
}

function sendBullet(){
    for(var i = 0; i < bullet.num; i++){
        if(!bullet.alive[i]){
            bullet.born(i);
            return;
        }
    }
}

bulletObj.prototype.born = function(i){
    this.bulletTimer += deltaTime;
    if(this.bulletTimer > 200){
        this.bulletTimer = 0;
        this.alive[i] = true;
        this.x[i] = mx;
        this.y[i] = my;
    }
}

bulletObj.prototype.dead = function(i){
    this.alive[i] = false;
}


