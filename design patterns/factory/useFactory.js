const Employee = require('./Employee')
const Shopper = require('./Shopper')


const useFactory = (name, money = 0, type, employer) => {
  if(type === 'employee') {
    return new Employee(name, money, employer)
  } else {
    return new Shopper(name, money)
  }
}

module.exports = useFactory