class Vector {
  constructor(x,y){
    this.x = x || 0;
    this.y = y || 0;
  }
  static Add(v1, v2){
    return new Vector(v1.x+v2.x,v1.y+v2.y);
  }
  static Sub(v1, v2){
    return new Vector(v1.x-v2.x,v1.y-v2.y);
  }
  static Mult(v1, num){
    return new Vector(v1.x*num,v1.y*num);
  }
  Mag(){
    return Math.sqrt(this.x*this.x+this.y*this.y);
  }
  static Distance(v1,v2){
    return Vector.Sub(v1,v2).Mag();
  }
  static FromAngle(mag, angle){
    return new Vector(Math.cos(angle)*mag,Math.sin(angle)*mag);
  }
  Heading(){
    return Math.atan2(this.y,this.x);
  }
  static Dot(v1, v2){
      return v1.x * v2.x + v1.y * v2.y;
  }
  Normalized(){
      var mag = this.Mag();
      return new Vector(this.x / mag, this.y/mag);
  }
}