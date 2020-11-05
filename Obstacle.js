class ObstacleDownSlow{
    constructor(position, image){
        this.x = position;
        this.y = 0
        this.width = 48;
        this.height = 48;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y += 4;
    }
}


class ObstacleUpSlow{
    constructor(position, image){
        this.x = position;
        this.y = 487;
        this.width = 48;
        this.height = 48;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y -= 4;
    }
}


class ObstacleDownFast{
    constructor(position, image){
        this.x = position;
        this.y = 0
        this.width = 48;
        this.height = 48;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y += 8;
    }
}

class ObstacleUpFast{
    constructor(position, image){
        this.x = position;
        this.y = 487;
        this.width = 48;
        this.height = 48;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y -= 8;
    }
}

class ObstacleDownVeryFast{
    constructor(position, image){
        this.x = position;
        this.y = 0
        this.width = 48;
        this.height = 48;
        this.image = image;
    }

    draw(){
        image(this.image, this.x, this.y);
        this.y += 12;
    }
}