class mango{
    constructor(x, y, radius){
       var options = {
            isStatic: true,
            resitution: 0,
            friction: 1,
        }
        this.image = loadImage("mango.png");
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255, 0, 255)
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}