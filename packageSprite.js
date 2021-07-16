class package1{

    constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
    
    this.body=Bodies.circle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    
    Matter.body.translate(packageBody, {x:-20,y:0})
    World.add(world,thisBody)
    if(keyCode === DOWN_ARROW) {
        Matter.body.setStatic(packageBody,false);
    }
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER)
        fill("brown")
        rect(pos.x,pos.y,this.width,this.height)
        }

    }
    