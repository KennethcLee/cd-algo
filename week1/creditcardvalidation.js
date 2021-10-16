function isCreditCardValid(digitArr) {
    lastValue = digitArr[digitArr.length-1];
    digitArr.pop();
    for (let j = 1; j < digitArr.length; j = j+2) {
        digitArr[j] *= 2;
        if (digitArr[j] > 9) {
            digitArr[j] -= 9;
        }
    }
    var sum = 0
    for (let k = 0; k < digitArr.length; k++) {
        sum += digitArr[k];
    }
    sum += lastValue;
    if (sum % 10 == 0) {
        return true;
    } 

    return false;
}
console.log(isCreditCardValid([5,2,2,8,2]));
console.log(isCreditCardValid([5,2,2,8,1]));
console.log(isCreditCardValid([5,2,2,2,1]));

// function isCreditCardValid(digitArr) {
//     var result = false;
//     lastValue = digitArr[digitArr.length-1];
//     digitArr.pop();
//     for (let j = 1; j < digitArr.length; j = j+2) {
//         digitArr[j] *= 2;
//         if (digitArr[j] > 9) {
//             digitArr[j] -= 9;
//         }
//     }
//     var sum = 0
//     for (let k = 0; k < digitArr.length; k++) {
//         sum += digitArr[k];
//     }
//     sum += lastValue;
//     if (sum % 10 == 0) {
//         result = true;
//     }

//     return result;
// }
