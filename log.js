class log {
    constructor(x,y,hieght,angle){
        var options={
            'restitution': 0.8,
            'friction': 2.0,
            'density': 1.0,
        }

        this.body = Bodies.rectangle(x,y,20,hieght,options);
        this.hieght = hieght;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        rectMode(CENTER)
        fill("blue");
        rect(0,0,20,this.hieght);
        pop();
    }

    
}