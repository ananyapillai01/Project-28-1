class launcher{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB: anchor,
            stiffness: 0.004,
            length: 1
        }
        // this.bodyA = body
        // this.pointB = anchor
        this.body = Constraint.create(options);
        World.add(world, this.body)
    }


    attach(body)
{
    this.body.bodyA = body;
}
fly()
{
    this.body.bodyA = null;
}
display()
{
    if(this.body.bodyA){
        var pointA = this.body.bodyA.position;
        var pointB = this.body.pointB;
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}
