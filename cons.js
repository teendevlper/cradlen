class string{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.05,
            length: 200
        }
    this.pointB = pointB
    this.string = Constraint.create(options);
    World.add(world, this.string);  
    }
display(){

  var pointA = this.string.bodyA.position;
  var pointB = this.pointB;
  stroke("black");
  strokeWeight(1);
  line(pointA.x,pointA.y,pointB.x,pointB.y);

}



}