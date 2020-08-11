class Box{
constructor(x,y){
   var options={
       isStatic:true
   }
   this.body=Bodies.rectangle(x,y,140,140,options);
   this.width=180;
   this.height=180;
   this.image=loadImage("sprites/bin.png");
   //World.add(world,this.body);
   
}
display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}

}