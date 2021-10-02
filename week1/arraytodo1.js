// function pushFront (array, value) {
//     result = [];
//     result[0] = value;
//     for (let j = 0; j < array.length; j++) {
//         result[j+1] = array[j];
//     }
//     return result;
// }
// console.log(pushFront([3,4,5], 9));

// function popFront(array) {
//     result = array[0];
//     newArray = [];
//     for (let j = 1; j < array.length; j++) {
//         newArray[j - 1]=array[j];
//     }
//     console.log(newArray);
//     return result;
// }
// console.log(popFront([3,4,5],));

// function insertAt(arr, index ,val) {
//     result =[];
//     for (let j = 0; j < index; j++ ) {
//         result[j] = arr[j];
//     }
//     result[index]=val;
//     for (let j = index; j < arr.length; j++) {
//         result[j+1] = arr[j];
//     }
//     return result;
// }
// console.log(insertAt([3,4,5], 0, 20));
// console.log(insertAt([3,4,5], 1, 20));
// console.log(insertAt([3,4,5], 2, 20));

// function removeAt(arr,index) {
//     result = [];
//     for (let j = 0; j < index; j++) {
//         result[j] = arr[j];
//     }
//     for (let j = index + 1; j < arr.length; j++) {
//         result[j - 1] = arr[j];
//     }
//     return result;
// }
// console.log(removeAt([3,4,5],0));
// console.log(removeAt([3,4,5],1));
// console.log(removeAt([3,4,5],2));

// function swapPairs(arr) {
//     var length = 0;
//     if (arr.length % 2 == 0 ){
//         length = arr.length;
//     } else {
//         length = arr.length -1;
//     }

//     for (let j = 0; j < length; j = j + 2) {
//         temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//     }
//     return arr;
// }
// console.log(swapPairs([1,2,3,4]));
// console.log(swapPairs([1,2,3,4,5]));

// function removeDuplicates(arr) {
//     pointer = 0;
//     result = [arr[0]];
//     for (let j = 1; j < arr.length; j++) {
//         if (result[pointer] != arr[j]) {
//             result[pointer+1 ] = arr[j];
//             pointer++;
//         }
//     }
//     return result;
// }
// console.log(removeDuplicates([1,2,3,4]));
// console.log(removeDuplicates([1,1,2,3,4]));
// console.log(removeDuplicates([1,1,1,2,3,4]));
// console.log(removeDuplicates([1,1,1,2,2,3,4]));
// console.log(removeDuplicates([1,2,2,3,3,3,4,4,4]));