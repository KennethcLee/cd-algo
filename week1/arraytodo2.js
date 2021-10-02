// function reverse(arr) {
//     for (let j = 0; j < Math.floor(arr.length/2); j++) {
//         arr[j] += arr[arr.length - j -1];
//         arr[arr.length - j -1] = arr[j] - arr[arr.length - j -1];
//         arr[j] -= arr[arr.length - j -1];
//     }
//     return arr;
// }
// console.log(reverse([1,2,3,4]));
// console.log(reverse([1,2,3,4,5]));

// function rotate(arr, shiftBy) {
//     for (let j=0; j < shiftBy; j++) {
//         temp = arr[0];
//         arr.shift();
//         arr.push(temp);
//     }
//     return arr
// }
// console.log(rotate([1,2,3,4],1));
// console.log(rotate([1,2,3,4],0));
// console.log(rotate([1,2,3,4],3));

// function filterRange(arr, min, max) {
//     times = arr.length;
//     for (let j = 0; j < times; j++) {
//         if (arr[arr.length-1] > min && arr[arr.length-1] < max) {
//             arr.unshift(arr[arr.length-1]);
//         }
//         arr.pop();
//     }
//     return arr;
// }
// console.log(filterRange([3,4,1,6,7], 4, 6));
// console.log(filterRange([3,4,1,6,7], 3, 7));
// console.log(filterRange([3,4,1,6,7], 1, 9));
// console.log(filterRange([3,4,1,6,7], -1, 9));

function concat(arr1, arr2) {
    result = [];
    for (let j = 0; j < arr1.length; j++) {
        result.push(arr1[j]);
    }
    for (let k = 0; k < arr2.length; k++) {
        result.push(arr2[k]);
    }
    return result;
}
console.log(concat(['a','b'], [2, 3]));
