// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var getTotal = function (product) {
    var total = 0;
    for (var _i = 0, product_1 = product; _i < product_1.length; _i++) {
        var p = product_1[_i];
        total += p.price;
    }
    return total;
};
console.log(getTotal([
    { name: 'Single', price: 23 },
    { name: 'Another One', price: 10 },
]));
