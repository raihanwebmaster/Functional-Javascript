var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var newArry = []

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newArry.push(arr[i]);
    }
}


var nwArry = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(nwArry);


function myFilter(arr, callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

var myArr = myFilter(arr, function (item) {
    return item % 2 === 0;
});