var enemyObj = function(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.enemyType = [];
    this.enemy1 = new Image();
    this.enemy2 = new Image();
    this.enemy3 = new Image();
    this.spd = [];
}

enemyObj.prototype.num = 6;

enemyObj.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.spd[i] = Math.random() * 0.2 + 0.1;
        this.enemyType[i] = 0;
        this.enemy1.src = "./src/enemy1.png";
        this.enemy2.src = "./src/enemy2.png";
        this.enemy3.src = "./src/enemy3.png";

    }
}

enemyObj.prototype.draw = function(){
    for(var i = 0; i < this.num; i++){
        if(this.alive[i]){
            if(this.enemyType[i] == 0){
                var pic = this.enemy1;
            }else if(this.enemyType[i] == 1){
                var pic = this.enemy2;
            }else{
                var pic = this.enemy3;
            }
            this.y[i] += deltaTime * this.spd[i];
            ctx.drawImage(pic, this.x[i] - pic.width * 0.5, this.y[i] - 50);
        }
        if(this.y[i] > 590){
            this.alive[i] = false;
        }
    }
}
function enemyMonitor(){
    var num = 0;
    for(var i = 0; i < enemy.num; i++){
        if(enemy.alive[i]){
            num++;
        }
        if(num < 6){
            sendenemy();
            return;
        }
    }
}

function sendenemy(){
    for(var i = 0; i < enemy.num; i++){
        if(!enemy.alive[i]){
            enemy.born(i);
            return;
        }
    }
}

enemyObj.prototype.born = function(i){
        this.alive[i] = true;
        this.x[i] = Math.random() * 800;//[0,1)
        this.y[i] = 0;
        var ran = Math.floor(Math.random() * 3);
        this.enemyType[i] = ran;
}
enemyObj.prototype.dead = function(i){
    this.alive[i] = false;
}


