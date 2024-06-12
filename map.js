var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArry = []

for (var i = 0; i < arr.length; i++) {
    newArry.push(arr[i] * 2);
}

console.log(newArry);

var nwArray = arr.map(function (item) {
    return item * 2;
});

console.log(nwArray);

function myMap(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

var myArr = myMap(arr, function (item) {
    return item * 2;
});

console.log(myArr);