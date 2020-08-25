class Division {
    constructor(x, y, w, h) {
        var op = { isStatic: true }

        this.body = Bodies.rectangle(x,y,w,h,op);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
        }

    display() {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.w,this.h); 
        fill("white");
    }
}