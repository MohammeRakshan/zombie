class Stone{

    constructor(x,y,r)
    {
   
    
    
    this.body = Bodies.circle(x,y,r)
    this.r=r
    World.add(world,this.body)
    
    }
    show() {
      var pos = this.body.position
     push()
     ellipseMode(CENTER)
     noStroke()
     ellipse(pos.x,pos.y,this.r,this.r)
     pop()
    }
    
    }
    