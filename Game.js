class Game {
    constructor(){
        this.obstacle = [];
        this.player = new Player();
    }

    draw(){
        if (frameCount % 60 === 0) {
            this.obstacle.push(new ObstacleDownSlow(300, p5));
            this.obstacle.push(new ObstacleDownFast(700, js));
        }

        if (frameCount % 180 === 0){
            this.obstacle.push(new ObstacleUpFast(500, css));
            this.obstacle.push(new ObstacleUpSlow(900, bootstrap));
        }
        
        this.obstacle.forEach((obstacle, index) => {
            obstacle.draw();
            if (obstacle.y + obstacle.height <= -100) {
              this.obstacle.splice(index, 1);
            }
        });

        if (keyIsDown(37)) {
            this.player.moveLeft(10);
        }

        if (keyIsDown(39)) {
            this.player.moveRight(10);
        }

        this.player.draw();

        if (this.player.collisionCheck(this.obstacle)) {
            noLoop();
        }
    }

    collisionCheck(obstacle, player) {
        //   player.left + player.width (players.rightSide)
        //  if player's right side is to the left of the obstacle's left
        if (player.x + player.width < obstacle.x) {
          return false;
        }
    
        //  obstacle's left and obstacle width (obstacle.rightSide)
        // if obstacle's right side is to the left of player's left
        if (obstacle.x + obstacle.width < player.x) {
          return false;
        }
    
        // player.topSide > obstacle.TopSide + obstacle.height (obstacle.Bottom)
        // player top side is below obstacle's bottom side
        if (player.y > obstacle.y + obstacle.height) {
          return false;
        }
    
        //  obstacle.topSide > player.topSide + player.height (player.bottomSide)
        //  obstacle top side is below the player's bottom side
        if (obstacle.y > player.y + player.height) {
          return false;
        }
        return true;
      };

}