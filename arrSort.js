var arr = [69, 34, 54, 23, 12, 45, 67, 89];
arr.sort(function(a, b) {
    return a - b;
});
console.log(arr)

const objArry = [
    {name: 'John', age: 25},
    {name: 'Jane', age: 22},
    {name: 'Doe', age: 30}
];
objArry.sort(function(a, b) {
    return a.age - b.age;
});
console.log(objArry);