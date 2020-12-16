class Chain {
    constructor(point, body) {
        var options = {
            bodyA : body,
            pointB : point,
            length : 150,
            stiffness : 0.5
        }
        this.point = point;
        this.constraint = Matter.Constraint.create(options);
        World.add(world,this.constraint);
        console.log(this.constraint.bodyA);
    }

    display() {
        if(this.constraint.bodyA) {
            strokeWeight(10);
            line(this.constraint.bodyA.position.x, 
                this.constraint.bodyA.position.y,
                this.point.x, this.point.y);
        }
       
    }

    fly() {
        this.constraint.bodyA = null;
    }
}