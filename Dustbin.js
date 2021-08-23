class Dustbin {
    constructor(x,y,width,height){
        var options = {
            iStatic:true,
            'restitution':0,
            'friction':1,
            'density':0.1    
        }
//this.image=loadImage("dustbin.png")
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height;

World.add(world,this.body)
    }
display(){
    rline1=createSprite(width/2,height-50,200,20)
    line1.shapeColor=color("red")
    
    line2=createSprite(510,610,20,100)
    line2.shapeColor=color("red")
    
    line3=createSprite(310,610,20,100)
    line3.shapeColor=color("red");
}
}