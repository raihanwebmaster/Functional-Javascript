// closure
var name = 'World';

function sayName() {
  console.log('Hello, ' + name);
}

console.dir(sayName);

sayName();


function greeting(msg){
    return function(name){
        return msg + ', ' + name;
    }
}

var sayHello = greeting('Hello');
console.log(sayHello('John')); // Hello, John