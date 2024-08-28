let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', ];
const numbers: number[] = [1, 2, 3, 4, 5];
let mixed: (string | number)[] = ['red', 'green', 1];

// Classes
class Car {

}

let car: Car = new Car();

// Object literal
interface Point {
    x: number;
    y: number;
}

let point:Point = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number, y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'green') {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbersArray = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbersArray.length; i++) {
    if(numbersArray[i] > 0) {
        numberAboveZero = numbersArray[i];
    }
}
