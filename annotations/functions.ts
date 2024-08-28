const add = (a: number, b: number): number => a + b;

const subtract = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function(a: number, b: number): number {
  return a * b;
};

// When we use void, we are saying that the function will not return anything
const logger = (message: string): void => {
    console.log(message);
};

// When a function returns 'never', it means that it will never reach the end of the function
const throwError = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};