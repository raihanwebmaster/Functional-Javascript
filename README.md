
# Functional JavaScript

This repository contains examples and explanations of various functional programming concepts in JavaScript.

## Table of Contents
1. [First-Class Functions](#first-class-functions)
2. [Inner Functions](#inner-functions)
3. [Higher-Order Functions](#higher-order-functions)
4. [Callback Functions](#callback-functions)
5. [Returning Another Function](#returning-another-function)
6. [Filter](#filter)
7. [Array Sort](#array-sort)
8. [Closures](#closures)
9. [forEach](#foreach)
10. [map](#map)
11. [reduce](#reduce)

## First-Class Functions
Functions in JavaScript are first-class citizens, meaning they can be stored in variables, passed as arguments to other functions, and returned from other functions.

### Example
```javascript
const sayHello = () => 'Hello, World!';
console.log(sayHello()); // Output: Hello, World!
```

## Inner Functions
Functions defined inside other functions. Inner functions have access to the outer function's variables.

### Example
```javascript
function outerFunction() {
    const outerVariable = 'I am from outer function';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    innerFunction();
}

outerFunction(); // Output: I am from outer function
```

## Higher-Order Functions
Functions that take other functions as arguments or return functions as their result.

### Example
```javascript
function greet(name) {
    return `Hello, ${name}`;
}

function sayGreeting(greetFunction, name) {
    console.log(greetFunction(name));
}

sayGreeting(greet, 'Alice'); // Output: Hello, Alice
```

## Callback Functions
Functions passed as arguments to other functions and are executed inside those functions.

### Example
```javascript
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Some data';
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData); // Output after 1 second: Some data
```

## Returning Another Function
Functions that return other functions.

### Example
```javascript
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10
```

## Filter
Creates a new array with all elements that pass the test implemented by the provided function.

### Example
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

## Array Sort
Sorts the elements of an array in place and returns the sorted array.

### Example
```javascript
const numbers = [5, 3, 8, 1, 2];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 5, 8]
```

## Closures
Functions that retain access to their lexical scope even when the function is executed outside that scope.

### Example
```javascript
function outerFunction() {
    const outerVariable = 'I am from outer function';
    
    return function innerFunction() {
        console.log(outerVariable);
    };
}

const innerFunc = outerFunction();
innerFunc(); // Output: I am from outer function
```

## forEach
Executes a provided function once for each array element.

### Example
```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));
// Output: 1 2 3 4 5
```

## map
Creates a new array with the results of calling a provided function on every element in the calling array.

### Example
```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
```

## reduce
Executes a reducer function on each element of the array, resulting in a single output value.

### Example
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15
```

---

Feel free to contribute to this repository by adding more examples or improving the existing ones. Happy coding!
