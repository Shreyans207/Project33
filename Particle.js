class Particle {
    constructor(x, y, r ){
        var options = {
            restitution:0.0
        }
        this.body = Bodies.circle(x, y, r/2 ,options);     
        this.r = r ;  
        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        
        World.add(world, this.body);
    }
    score(){
        if(this.body.position.y = 740){
            if(this.body.position.x < 300){
            score = score + 500;
            count = count - 1;
        }
    }
        if(this.body.position.y = 740){
            if(this.body.position.x < 300){
            score = score + 500;
            count = count - 1;
        }
    }
        if(this.body.position.y = 740){ 
            if(this.body.position.x > 301 && this.body.position.x < 600){
            score = score + 100;
            count = count - 1;
        }
    }

    if(this.body.position.y = 740){ 
        if(this.body.position.x > 601 && this.body.position.x < 900){
        score = score + 200;
        count = count - 1;
    }
    }
}
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(0, 0, this.r);
        pop();
    }

};

