function bulletEnemyCollision(){
    if(!score.gameOver){
        for(var i = 0; i < bullet.num; i++){
            if(bullet.alive[i]){
                for(var j = 0; j < enemy.num; j++){
                    if(enemy.alive[j]){
                        var l = caldistance(bullet.x[i], bullet.y[i], enemy.x[j], enemy.y[j]);
                            if(l < 900){
                                score.planeNum++;
                                score.addScore();
                                bullet.dead(i);
                                enemy.dead(j);
                            }
                        }
                }
            }
        }
    }
}

function planeEnemyCollision(){
    for(var i = 0; i < enemy.num; i++){
        if(enemy.alive[i]){
            var l = caldistance(plane.x, plane.y, enemy.x[i], enemy.y[i]);
            if(l < 900){
                //game over
                score.gameOver = true;
            }
        }
    }
}

function caldistance(x1, y1, x2, y2){
    return Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
}