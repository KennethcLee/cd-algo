// function shuffle(arr) {
//     var max = arr.length;
//     for (let j = 0; j < max; j++) {
//         num1 = Math.floor(Math.random() * max);
//         num2 = Math.floor(Math.random() * max);
//         temp = arr[num1];
//         arr[num1] = arr[num2];
//         arr[num2] = temp;
//     return arr;
//     }
// }
// console.log(shuffle([1,2,3,4,5]));

// function removeRange(arr, min, max) {
//     var length= arr.length;
//     for (let j = 0; j < min; j++) {
//         arr.push(arr[0]);
//         arr.shift();
//     }
//     for (let j = min; j < max+1; j++) {
//         arr.shift();
//     }
//     for (let j = max+1; j < length; j++) {
//         arr.push(arr[0]);
//         arr.shift();
//     }
//     return arr;
// }
// console.log(removeRange([20,30,40,50,60,70],2,4));
// console.log(removeRange([20,30,40,50,60,70],1,5));

// function intermediateSums(arr) {
//     var remainder = arr.length % 10;
//     var times = Math.floor(arr.length/10);
//     for (let k = 0; k < times; k++) {
//         var sum = 0;
//         for (let j = 0; j < 10; j++) {
//             sum += arr[0];
//             arr.push(arr[0]);
//             arr.shift();
//         }
//         arr.push(sum);
//     }
//     if (remainder > 0) {
//         var sum = 0;
//         for (let j = 0; j < remainder; j++) {
//             sum += arr[0];
//             arr.push(arr[0]);
//             arr.shift();
//         }
//         arr.push(sum);
//     }
//     return arr;
// }
// console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2]));
// console.log(intermediateSums([1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2]));

// function doubleTrouble(arr) {
//     var length= arr.length;
//     for (let k = 0; k < length; k++) {
//             arr.push(arr[0]);
//             arr.push(arr[0]);
//             arr.shift();
//         }
//     return arr;
// }
// console.log(doubleTrouble([4,"Ulysses",42,false]));

function zipIt(arr1, arr2) {
    var diff= arr1.length-arr2.length;
    if (diff < 0) {
        same = arr1.length;
    } else {
        same = arr2.length;
    }
    for (let k = 0; k < same; k++) {
            arr1.push(arr1[0]);
            arr1.push(arr2[0]);
            arr2.push(arr2[0]);
            arr1.shift();
            arr2.shift();
        }
    if (diff > 0) {
        for (let k = 0; k < Math.abs(diff); k++) {
            arr1.push(arr1[0]);
            arr1.shift();
        }
    } else if (diff < 0) {
        for (let k = 0; k < Math.abs(diff); k++) {
            arr1.push(arr2[0]);
            arr2.push(arr2[0]);
            arr2.shift();
        }
    }
    return arr1;
}
console.log(zipIt([1,2], [10,20,30,40]));
console.log(zipIt([10,20,30,40], [1,2]));
console.log(zipIt([1,2,3,4], [10,20,30,40]));








