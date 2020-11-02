class ObstacleDownSlow{
    constructor(position, image){
        this.x = position;
        this.y = 0
        this.width = 100;
        this.height = 70;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y += 10;
    }
}


class ObstacleUpSlow{
    constructor(position, image){
        this.x = position;
        this.y = 487;
        this.width = 100;
        this.height = 70;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y -= 5;
    }
}


class ObstacleDownFast{
    constructor(position, image){
        this.x = position;
        this.y = 0
        this.width = 100;
        this.height = 70;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y += 10;
    }
}

class ObstacleUpFast{
    constructor(position, image){
        this.x = position;
        this.y = 487;
        this.width = 100;
        this.height = 70;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y -= 5;
    }
}