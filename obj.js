
var string = [1,2,3,4,5,5,5];


var obj = {};

for (var i = 0; i < string.length; i++) {
    if (obj[string[i]] == undefined) {
        obj[string[i]] = 1
    }
    else {
        obj[string[i]] += 1
    }
}

console.log(obj)

// var count = 0;

// for (var key in obj) {
//     if (obj[key] % 2 == 1) {
//         count++
//     }
// }