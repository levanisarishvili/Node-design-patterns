var PersonBuilder = require('./personBuilder')

// Employees
var sue = new PersonBuilder('Sue')
  .makeEmployee()
  .makeManager(60)
  .build()

var bill = new PersonBuilder('Bill')
  .makeEmployee()
  .makePartTime()
  .build()
var phil = new PersonBuilder('Phil')
  .makeEmployee()
  .build()

// Shoppers
var charles = new PersonBuilder('Charles')
  .withMoney(1000)
  .withList(['jeans', 'sunglasses'])
  .build()

var tabbitha = new PersonBuilder('Tabbitha')
  .withMoney(500)
  .build()


console.log(JSON.stringify(sue, null, 4))
console.log(JSON.stringify(charles, null, 4))
