class Paper{
    constructor(x,y,width,height){
        var options={
            'isStatic':false,
            'restitution':0.1,
           'friction':3,
            'density':1
        }
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
        
       
        this.image=loadImage("sprites/paperim.png");
       
    }
   display(){
       imageMode(CENTER);
       rectMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
   }

    }
   