// Higher Order Function
// A function that takes a function as an argument or returns a function as a result is called a higher-order function.

function higherOrderFunction(fn) {
    console.log("I am higher order function");
    fn();
}

function fn() {
    console.log("I am passed as an argument");
}

higherOrderFunction(fn);


var arr = [1, 2, 3, 4, 5];
// anonymous function
arr.forEach(function (el) {
    console.log(el * 2);
});


function caller () {
    return function(name) {
        return 'Caller calling you, ' + name;
    }
}
var x = caller();
console.log(x('John'));