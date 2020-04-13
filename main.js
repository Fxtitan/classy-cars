class Vehicle {
  // Setup object
  constructor (name,iGotThisMany = 4,vRoom = 180) {
    //instance properties
    this.name = name;
    this.wheelCount = iGotThisMany;
    this./*my current obj*/maxSpeed = vRoom; 
    this.speed = 0;
    
  }
  accelerate(){
    if(this.speed < this.maxSpeed) {
      this.speed = this.maxSpeed / 3 + this.speed; //increasing speed and reassigning
  }
  }
  }
    

  

let myVehicle = new Vehicle();// calling my constructor func
console.log(myVehicle)

class Car extends Vehicle {
  constructor(name,maxSpeed){
    super(name);
      this.name = name;
      this.maxSpeed = maxSpeed;
    }
    drive() {
      return "Vroom. "
    }
  }

class Ferrari extends Car {
  constructor(name){
  super(name = "Ferrari");
    this.name = name;
    this.maxSpeed = 180;

  }
  drive() {
    return 'Vroom. I\'m a Ferrari!'
  }

  accelerate() {
    if(this.speed < this.maxSpeed){
    this.speed = this.maxSpeed / 2 + this.speed;
    } 
  }
}


module.exports = {
  Vehicle,
  Car,
  Ferrari
}
