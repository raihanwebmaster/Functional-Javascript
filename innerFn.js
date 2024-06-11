// inner function

function outer(){ 
    function inner(){
        console.log('I am inner function');
    }
    inner();
}
outer(); // Output: I am inner function


// In this example, the inner function is defined inside the outer function.
// The inner function is not accessible from outside the Outer function. But the outer function can access the inner function.

function add (a, b) {
    function sum(){
        return a + b;
    }
    return sum();
}
add(5, 10); // Output: 15


