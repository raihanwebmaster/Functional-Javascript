// reduce

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

var sumNew = arr.reduce(function (prev, curr) {
    return prev + curr;
}, 0);

console.log(sumNew);