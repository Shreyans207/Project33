class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 5 , options);
        this.r = 10;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill("white");
        ellipseMode(CENTER);
        ellipse(0,0,10);
        pop();
    }
};