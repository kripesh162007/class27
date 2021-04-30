class Constraint1{
    constructor(a,b){
        var options={
            bodyA:a,
            bodyB:b,
            stiffness:0.4,
            length:100
        }
        this.constraint=Matter.Constraint.create(options)
        World.add(world,this.constraint)

    }
    display(){
        
line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.y,this.constraint.bodyB.position.x,this.constraint.bodyB.position.y,)

    }

}