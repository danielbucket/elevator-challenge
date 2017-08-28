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

  traverseCount(p) {
    let step1 = this.defaultFloor + p.currentFloor
    let step2 = p.currentFloor - p.dropOffFloor
    let step3 = step1 + step2

    return step3
  }

  goToFloor(person) {
    this.passengers.push(person)
    this.destination.push(person.dropOffFloor)
    this.currentFloor = person.dropOffFloor
    this.floorsTraveresed = this.traverseCount(person)
  }
}


export class Person {
  constructor(name, currentFloor, dropOffFloor) {
    this.name         = name,
    this.currentFloor = currentFloor,
    this.dropOffFloor = dropOffFloor
  }
}
