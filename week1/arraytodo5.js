// function average(arr) {
//     var sum = 0;
//     for (let j = 0; j < arr.length; j ++) {
//         sum += arr[j];
//     }
//     return sum/arr.length;
// }
// console.log(average([1,2,3]));

// function balancePoint(arr) {
//     var leftvar = arr[0]
//     var rightvar = arr[arr.length-1];
//     var leftpointer=0;
//     var rightpointer= arr.length-1;
//     for (let j=0; j < arr.length; j++) {
//         console.log("*** 2 ***", leftvar, rightvar, leftpointer, rightpointer);
//         if (leftpointer + 1 == rightpointer) {
//             console.log("*** 3 ***")
//             if (leftvar == rightvar) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }
//         else if (leftpointer < rightpointer) {
//             console.log("*** 4 ***")
//             if (leftvar > rightvar) {
//                 console.log("*** 5 ***")
//                 rightvar += arr[rightpointer -1];
//                 rightpointer -= 1;
//             } else if (leftvar < rightvar) {
//                 console.log("*** 6 ***")
//                 leftvar += arr[leftpointer +1];
//                 leftpointer += 1;
//             } else {
//                 console.log("*** 7 ***")
//                 rightvar += arr[rightpointer -1];
//                 leftvar += arr[leftpointer +1];
//                 rightpointer -= 1;
//                 leftpointer += 1;
//             }
//         } else {
//             return false;
//         }
//     }
// }
// console.log(balancePoint([1,2,3,4,10]));
// console.log(balancePoint([1,2,4,2,1]));
// console.log(balancePoint([1,2,5,4,5,0,2,1]));
// console.log(balancePoint([1,2,3,0,2,4,0,0,1,1,10]));

function balancePoint(arr) {
    var leftvar = arr[0]
    var rightvar = arr[arr.length-1];
    var leftpointer=0;
    var rightpointer= arr.length-1;
    for (let j=0; j < arr.length; j++) {
        console.log("*** 2 ***", leftvar, rightvar, leftpointer, rightpointer);
        if (leftpointer + 2 == rightpointer) {
            console.log("*** 3 ***")
            if (leftvar == rightvar) {
                return leftpointer +1 ;
            } else {
                return -1;
            }
        }
        else if (leftpointer < rightpointer) {
            console.log("*** 4 ***")
            if (leftvar > rightvar) {
                console.log("*** 5 ***")
                rightvar += arr[rightpointer -1];
                rightpointer -= 1;
            } else if (leftvar < rightvar) {
                console.log("*** 6 ***")
                leftvar += arr[leftpointer +1];
                leftpointer += 1;
            } else {
                console.log("*** 7 ***")
                if (arr[leftpointer +1] > arr[rightpointer -1] ) {
                    rightvar += arr[rightpointer -1];
                    rightpointer -= 1;
                } else if (arr[leftpointer +1] < arr[rightpointer -1] ) {
                    leftvar += arr[leftpointer +1];
                    leftvar += arr[leftpointer +1];
                } else {
                rightvar += arr[rightpointer -1];
                leftvar += arr[leftpointer +1];
                rightpointer -= 1;
                leftpointer += 1;
                }
            }
        } else {
            return -1;
        }
    }
}
console.log(balancePoint([-2,5,7,0,3]));
console.log(balancePoint([9,9]));
console.log(balancePoint([-2,0,9,0,5,7,0,1,8,0,3]));
console.log(balancePoint([-1,-2,9,9,-3,0]));



