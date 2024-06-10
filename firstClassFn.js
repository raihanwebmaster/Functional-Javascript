
// Twinkle Cats 
// Functional Javascript 
// First Class Functions

function sayName(name) {
    return 'Hello, ' + name;
}

// 1 . A Function can be stored in a Variable

var hello = sayName;
hello('Web Development'); // Output: Hello, Web Development


// 2 . A Function can be stored in an Array

var arr = [1, 2, 3];
arr.push(hello)
console.log(arr); // Output: [1, 2, 3, ƒ sayName(name) { return 'Hello, ' + name; }]

// 3 . A Function can be stored as an Object Field or Property

var person = {  name: 'Web Development', sayName: hello, print: function() {
    console.log('Hi');
} };
console.log(person); // Output: {name: "Web Development", sayName: ƒ, print: ƒ} 


// 4 . We can create Function as Needed

var sum = 10 + (function() { return 50; })(); // self-invoked function
sum; // Output: 60


// 5 . We can pass Function as an Argument

function wow(name, fun) {
    return fun(name);
}

var result = wow('Web Development', sayName);
result; // Output: Hello, Web Development


// 6 . We can return Function from another Function

function base(b) {
    return function(n) {
        var result = 1;
        for (var i = 0; i < b; i++) {
            result *= n;
        }
        return result;
    }
}

var power = base(2)
power(5); // Output: 25
