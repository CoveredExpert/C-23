class Box{ constructor(x,y ,width,height)
    { var option = { restitution : 0.3 } 
    this.body = Bodies.rectangle(x,y ,width,height,option)
     World.add(world,this.body) 
     this.width = width; 
     this.height = height }
      display(){
           var p = this.body.position 
           fill ("red") 
           strokeWeight(5) 
           stroke ("white")
            rectMode(CENTER) 
            rect (p.x,p.y,this.width,this.height) } }
