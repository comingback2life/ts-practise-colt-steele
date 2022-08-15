let zero: 0 = 0; //zero is of type 0
//zero = 2; //this is not accepted because it should equal to the literal value of 0
let mood: 'Happy' | 'Sad' = 'Happy';
mood = 'Sad'; //aceepts only two literal values

type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday'; //using union types we can combine value

//let today: DayOfWeek = 'weds'; //this complains because this is not an accepted literal
let today: DayOfWeek = 'Wednesday';
