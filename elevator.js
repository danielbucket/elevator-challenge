export class Elevator {
  constructor() {
    this.defaultFloor       = 0,
    this.currentFloor       = null,
    this.destination        = [],
    this.passengers         = [],
    this.dropOffFloor       = 0,
    this.floorsTraveresed   = 0,
    this.stops              = 0
  }

  reset() {

  }

  goToFloor(person) {
    this.passengers.push(person)
    this.destination.push(person.dropOffFloor)
    this.currentFloor = person.dropOffFloor
    this.floorsTraveresed = this.floorsTraveresed + (this.defaultFloor + person.currentFloor) + (person.currentFloor - person.dropOffFloor)


    // this.stops = this.stops + 


  }

}


export class Person {
  constructor(name, currentFloor, dropOffFloor) {
    this.name         = name,
    this.currentFloor = currentFloor,
    this.dropOffFloor = dropOffFloor
  }
}
