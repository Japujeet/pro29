class Box{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y,30,30, options);
      
      
     
      World.add(world, this.body);
    }
    display(){
      
      push();
      translate(this.body.position.x, this.body.position.y);
     
      rectMode(CENTER);
      fill(255,100,150)
      rect( 0, 0, 30, 30);
      pop();
    }
}
