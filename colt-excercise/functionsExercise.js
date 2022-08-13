// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
var twoFer = function (name) {
    if (name === void 0) { name = 'you'; }
    return "one for ".concat(name, ", one for me");
};
console.log(twoFer()); //calling without any function params for the default to execute
console.log(twoFer('Elton')); //passing Elton as a name param to check output
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
var isLeapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    }
    return false;
};
console.log(isLeapYear(1988)); //passing in a leap year to check if it outputs true
console.log(isLeapYear(1989)); //should return false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
