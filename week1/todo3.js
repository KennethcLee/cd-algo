// function biggieSize(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] >= 0) {
//             arr[j] = 'big';
//         }
//     }
//     return arr;
// }

// console.log(biggieSize([-1,3,5,-5]));

// function printLowReturnHigh(arr) {
//     var low = arr[0];
//     var high = arr[0];
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[j] > high) {
//             high = arr[j];
//         }
//         if (arr[j] < low ) {
//             low = arr[j];
//         }
//     }
//     console.log(low);
//     return high;
// }
// console.log(printLowReturnHigh([-1,3,5,-5]));

// function printOneReturnAnother(arr) {
//     var odd = null;
//     var second = 0;
//     for (let j = 0; j < arr.length - 1; j++) {
//         if (arr[j] % 2 != 0 && odd == null) {
//             second = arr[arr.length - 2];
//             console.log(second);
//             return arr[j];
//         }
//     }
// }
// console.log(printOneReturnAnother([2,4,6,-1,3,5,-5,7]));

// function doubleVision(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         arr[j] *= 2;
//     }
//     return arr;
// }

// console.log(doubleVision([2,4,6,-1,3,5,-5,7]));

// function countPositives(arr) {
//     var count = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] >= 0) {
//             count += 1;
//         }
//     }
//     return count;
// }

// console.log(countPositives([2,4,6,-1,3,5,-5,7]));

// function evensAndOdds(arr) {
//     var odd = 0;
//     var even = 0;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] % 2 == 0) {
//             even += 1;
//             odd = 0;
//         } else if (arr[j] % 2 != 0) {
//             odd += 1;
//             even = 0;
//         } else {
//             odd = 0;
//             even = 0;
//         }
//         if (odd >= 3 ) {
//             console.log("That’s odd!");
//         }
//         if (even >= 3 ) {
//             console.log("Even more so!");
//         }
//     }
// }
// console.log(evensAndOdds([2,4,6,-1,3,5,-5,7,8,7,8,9,9,9]));

// function incrementTheSeconds(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         if (j % 2 != 0) {
//             arr[j] += 1;
//             console.log(arr[j]);
//         }
//     }
//     return arr;
// }
// console.log(incrementTheSeconds([2,4,6,-1,3,5,-5,7,8,7,8,9,9,9]));

// function previousLengths(arr) {
//     var previous = arr[0];
//     for (let j = 1; j < arr.length; j++) {
//         var current = arr[j];
//         arr[j] =  previous.length;
//         previous = current;
//     }
//     arr.push(previous.length);
//     return arr;
// }
// console.log(previousLengths(['abc', 'always', 'long', 'butterfly']));

// function addSevenToMost(arr) {
//     var result = arr;
//     for (let j = 1; j < arr.length; j++) {
//         result[j-1] = arr[j];
//     }
//     result.push(7);
//     return result;
// }
// console.log(addSevenToMost(['abc', 'always', 'long', 'butterfly']));

// function reverseArray(arr) {
//     for (let j = 0; j < Math.floor(arr.length/2); j++) {
//         arr[j] += arr[arr.length-1-j];
//         arr[arr.length-1-j]=arr[j]-arr[arr.length-1-j];
//         arr[j]=arr[j]-arr[arr.length-1-j];
//     }
//     return arr;
// }
// console.log(reverseArray([2,4,6,-1,3,5,-5,2,7,8,7,8,9,9,9]));

// function negative(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         arr[j]= Math.abs(arr[j])*(-1);
//     }
//     return arr;
// }
// console.log(negative([2,4,6,-1,3,5,-5,2,7,8,7,8,9,9,9]));

// function alwaysHungry(arr) {
//     var hungry = true;
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] == 'food') {
//             console.log("yummy");
//             hungry = false;
//         }
//     }
//     if (hungry == true) {
//         console.log("I'm hungry")
//     }
// }
// alwaysHungry(['abc', 'always', 'long', 'butterfly']);
// alwaysHungry(['abc', 'always', 'long', 'food']);

// function swapTowardTheCenter(arr) {
//     temp = arr[0];
//     arr[0] = arr[arr.length-1];
//     arr[arr.length-1] = temp;
//     return arr;
// }
// console.log(swapTowardTheCenter([true,42,"Ada",2,"pizza"]));
// console.log(swapTowardTheCenter([1,2,3,4,5,6]));

// function scaleTheArray(arr, num) {
//     for (let j = 0; j < arr.length; j++) {
//         arr[j] *= num;
//     }
//     return arr;
// }
// console.log(scaleTheArray([1,2,3,4,5,6], 2));
// console.log(scaleTheArray([1,2,3,4,5,6], 7));
