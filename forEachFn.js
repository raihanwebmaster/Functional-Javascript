var arr = [69, 34, 54, 23, 12, 45, 67, 89];

arr.forEach(function (item, index, arr) {
    console.log(item, index, arr);
});

function loopThroughArray(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

loopThroughArray(arr, function (item) {
    console.log(item);
});