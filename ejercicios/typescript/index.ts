// Boolean
let muted: Boolean = true;
muted = false;

// Numbers
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// Arrays
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"]

let peopleAndNumbers: Array< string | number > = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);

// Enum
//  enum Color {

//     red = "red",
//     green = "green",
//     blue = "blue",
//  }

// let colorFavorito: Color = Color.red
// console.log(`My fav color is ${colorFavorito}`);

// // Any
// let comodin: any = 'Joker';
// comodin = { type: 'Wildcard' }

// // Object
// let someObject: Object = { type: 'Wildcard' }

// // Functions
// function add(a: number, b: number): number {
//     return a + b;
// }

// const sum = add(4, 6)

// // function inside other function
// function createAdder(a: number): (number) => number {
//     return function (b: number) {
//         return b + a;
//     };
// }

// const addFour = createAdder(4);
// const fourPlus6 = addFour(6);

// function fullName(firstName: string, lastName: string): string { 
//     return `${firstName} ${lastName}`
// }

// const fernando = fullName('Fernando', 'Cordero')
// console.log(fernando);

// Interfaces define the exact form that have to have an object

enum Color {
    Red = "Red",
    Green = "Green",
}
interface Rectangle {
    width: number,
    height: number,
    color?: Color,
}

let rect: Rectangle = {
    width: 4,
    height: 6,
    color: Color.Green,
}

function area(r: Rectangle): number {
    return r.width * r.height
}
const areaRect = area(rect);
console.log(areaRect);

// console.log(rect.toString());

rect.toString = function() {
    return this.color ? `A rectangle ${this.color}` : `A rectangle`
}
console.log(rect.toString());



