//learning interfaces
// type Point = {
// 	x: number;
// 	y: number;
// };
var anotherPoint = { x: 3, y: 3 };
var Thomas = {
    id: 1122,
    firstName: 'Thomas',
    lastName: 'Thomas',
    nickname: 'Tom',
    sayHi: function (firstName) {
        return 'Hello' + ' ' + firstName;
    }
};
var Jerry = {
    id: 1212,
    firstName: 'Jerry',
    lastName: 'Thomas',
    sayHi: function (firstName) {
        return "Hey! ".concat(firstName);
    }
};
console.table(Jerry);
console.table(Thomas);
