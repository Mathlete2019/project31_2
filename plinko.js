class Plinko {
    constructor(x,y,r) {
        var op = { isStatic: true }

        this.r = r;

        this.body = Bodies.circle(x,y,r,op);
        World.add(world, this.body);
    }

    display() {
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.r,);
        fill("white");
    }
}