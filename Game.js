class Game {
    constructor(){
        this.obstacle = [];
        this.player = new Player();
    }
    
    draw(){
        this.player.draw();

        if (keyIsDown(37)) {
            this.player.moveLeft(6);
          }
        
          if (keyIsDown(39)) {
            this.player.moveRight(6);
          }
        //1
        if (frameCount % 160 === 0) {
            this.obstacle.push(new ObstacleDownSlow(145, p5));
        }
        //2
        if (frameCount % 95 === 0){
          this.obstacle.push(new ObstacleUpSlow(241, css));
        }
        //3 
        if (frameCount % 180 === 0) {
          this.obstacle.push(new ObstacleDownSlow(337, js));
        }
        //4
        if (frameCount % 80 === 0){
            this.obstacle.push(new ObstacleUpSlow(433, github));
        }
        //5 
        if (frameCount % 170 === 0) {
          this.obstacle.push(new ObstacleDownVeryFast(529, bootstrap));
        }
        //6
        if (frameCount % 70 === 0){
          this.obstacle.push(new ObstacleUpSlow(625, mongodb));
        }
        //7
        if (frameCount % 170 === 0) {
          this.obstacle.push(new ObstacleDownFast(721, nodejs));
        }
        //8
        if (frameCount % 60 === 0){
          this.obstacle.push(new ObstacleUpFast(817, react));
        }
        
        
        this.obstacle.forEach((obstacle, index) => {
            obstacle.draw();
            if (obstacle.y + obstacle.height <= -100) {
              this.obstacle.splice(index, 1);
            }

            if (this.collisionCheck(obstacle, this.player)) {
              noLoop();
            };
        });
    };



    collisionCheck(obstacle, player){
          if (player.x + player.width <= obstacle.x){
          return false;
          }
          if (obstacle.x + obstacle.width <= player.x) {
            return false;
          }
          if (player.y >= obstacle.y + obstacle.height) {
            return false;
          }
          if (obstacle.y >= player.y + player.height) {
            return false;
          }
          return true;     
    }

};
