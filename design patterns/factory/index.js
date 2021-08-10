const useFactory = require('./useFactory')

var alex = useFactory('Alex Banks', 100);
var eve = useFactory('Eve Porcello', 100, 'employee', 'This and That');

console.log( alex.toString() )
console.log( eve.toString() )
