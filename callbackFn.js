// callback function

function print(name) {
    console.log('Hello ' + name);
}

function hello(name) {
    print(name);
}

hello('Raihan'); // Hello raihan


function hello1(name, callback) {
    callback(name);
}

hello1('Raihan', print); // Hello raihan

//annoimous function

hello1('Raihan', function (name) {
    console.log('Hello ' + name);
}); // Hello raihan


var me = {
    name: 'Raihan',
    age: 25,
}

function printMySelf(person, callback) {
    console.log('Person: ' + person.name + ' (' + person.age + ')');
    callback();
    if (person.age >= 18) {
        callback(person);
    }
}

printMySelf(me, function () {
    console.log('Callback is called');
})


function printData(data, callback1, callback){
    console.log('Original data: ' + data);
    callback1(data);
    callback(data);
}

printData('Hello', function(data){
    console.log('Uppercase: ' + data.toUpperCase());
}, function(data){
    console.log('Lowercase: ' + data.toLowerCase());
});
