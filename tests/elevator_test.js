require('babel-core/register')({
  ignore: /node_modules\/(?!ProjectB)/
});

const assert = require('chai').assert;
const { Elevator, Person }  = require('../elevator')

describe('Elevator', function() {
  let elevator  = new Elevator()

  beforeEach(function() {
    elevator.reset()
  });

  it('01: should be a function', () => {
    assert.isFunction(Elevator)
  })

  it('02: should instantiate a new elevator', () => {
    assert.isObject(elevator)
  })

  it('03: should have a default of 0', () => {
    assert.equal(elevator.defaultFloor, 0)
  })

  it('04: shoould be an array', () => {
    assert.deepEqual(elevator.destination, [])
  })

  it('05: should be a function', () => {
    assert.isFunction(elevator.goToFloor)
  })

  it('06: should bring a rider to a floor above their current floor', () => {
    let mockUser = new Person('Brittany', 2, 5)

    elevator.goToFloor(mockUser)

    assert.equal(elevator.currentFloor, 5)
  });

  it.only('07: should bring a rider to a floor below their current floor', () => {
    let mockUser = new Person('Chad', 8, 3)

    elevator.goToFloor(mockUser)

    assert.equal(elevator.currentFloor, 3)
    assert.equal(elevator.floorsTraveresed, 13)
    // assert.equal(elevator.stops, 2)
  })


  it('10: ', () => {
    let mockUser = new Person('Brad', 8, 2)




  })
})

describe('Person', () => {

  it('00: should be a function', () => {

    assert.isFunction(Person)
  })

  it('01: should be instantiate Person', () => {
    const person = new Person()

    assert.isObject(person)
  })
})
