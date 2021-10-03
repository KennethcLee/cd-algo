// function removeNegatives(arr) {
//     length = arr.length
//     for (j = 0; j < length; j++) {
//         if (arr[arr.length-1] >= 0) {
//             arr.unshift(arr[arr.length-1]);
//         }
//         arr.pop();
//     }
//     return arr;
// }
// console.log(removeNegatives([1,3,4,5,6]));
// console.log(removeNegatives([-1,-3,-4,-5,-6]));
// console.log(removeNegatives([-1,3,-4,5,-6]));
// console.log(removeNegatives([1,-3,4,-5,6]));
// console.log(removeNegatives([]));

// function secondToLast(arr) {
//     if (arr.length < 2) {
//         return null
//     } else {
//         return arr[arr.length -2];
//     }
// }
// console.log(secondToLast([1]));
// console.log(secondToLast([1,2]));
// console.log(secondToLast([1,2,3]));
// console.log(secondToLast([1,'TWO',3]));
// console.log(secondToLast([1,true,false]));
// console.log(secondToLast([42,true,4,"Kate",7]));

// function secondLargest(arr) {
//     // console.log(arr.length, arr.length < 2);
//     if (arr.length < 2) {
//         return null;
//     } else {
//         var largest = null;
//         var result = null;
//         for (let j = 0; j < arr.length; j++) {
//             if (typeof arr[j] === 'number') {
//                 // console.log('*** 3 ***', largest);
//                 if (largest == null) {
//                     largest = arr[j];
//                     // console.log('*** 4 ***', largest, arr[j]);
//                 } else if (arr[j] > largest) {
//                     // console.log('*** 5 ***', largest, arr[j]);
//                     result = largest;
//                     largest = arr[j];
//                 } else if (result == null || arr[j] > result ) {
//                     result = arr[j];
//                 } 
//             }
//         }
//     }
//     return result;
// }
// console.log(secondLargest([1]));
// console.log(secondLargest([1,2]));
// console.log(secondLargest([1,2,3]));
// console.log(secondLargest([3,'TWO',1]));
// console.log(secondLargest([1,true,false]));
// console.log(secondLargest([42,true,4,"Kate",7]));
// console.log(secondLargest([42,true,4,"Kate",7, 43,6, 42,100,0,3,5,7,23,67,99,43]));

// function nthToLast(arr, num) {
//     if (arr.length - num >= 0 ) {
//         return arr[arr.length - num];
//     }
//     return null;
// }
// console.log(nthToLast ([5,2,3,6,4,9,7],1));
// console.log(nthToLast ([5,2,3,6,4,9,7],2));
// console.log(nthToLast ([5,2,3,6,4,9,7],3));
// console.log(nthToLast ([5,2,3,6,4,9,7],4));
// console.log(nthToLast ([5,2,3,6,4,9,7],5));
// console.log(nthToLast ([5,2,3,6,4,9,7],6));
// console.log(nthToLast ([5,2,3,6,4,9,7],7));
// console.log(nthToLast ([5,2,3,6,4,9,7],8));

// function nthLargest (arr, num) {
//     arr.sort().reverse();
//     return (arr[num - 1]);
// }
// console.log(nthLargest([5,2,3,6,4,9,7],1));
// console.log(nthLargest([5,2,3,6,4,9,7],2));
// console.log(nthLargest([5,2,3,6,4,9,7],3));
// console.log(nthLargest([5,2,3,6,4,9,7],4));
// console.log(nthLargest([5,2,3,6,4,9,7],5));

function skylineHeights(arr) {
    var result=[];
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] > 0) {
            if (result.length === 0) {
                result[0] = arr[j];
            } else if (arr[j] > result[result.length-1] ) {
                result[result.length] = arr[j];
            }
        }
    }
    return result;
}
console.log(skylineHeights([-1,1,1,7,3]));
console.log(skylineHeights([0,4]));
console.log(skylineHeights([-1,1,1,7,3,-3,10,4,5,6,7,30,4,5,-2,0,31]));


