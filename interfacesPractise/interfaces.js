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
var shoes = {
    name: 'Blue Sweat Shoes',
    price: 100,
    applyDiscount: function (discount) {
        var newPrice = this.price * (1 - discount);
        this.price = newPrice;
        return newPrice;
    }
};
console.log(shoes.applyDiscount(0.4));
