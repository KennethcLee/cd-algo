function countdown(data) {
    arr = [];
    for (var j = 10; j >= 0; j--) {
        arr.push(j);
    }
    return arr
}
result = countdown(10);
console.log(result, result.length);

function printAndReturn(data) {
    console.log(data[0]);
    return data[1];
}
console.log(printAndReturn([10,20]));

function firstPlusLength(data) {
    if (typeof data[0] === 'number') {
        return data[0] + data.length;
    } else {
        return data.length;
    }
}
console.log(firstPlusLength([20, 10, 4, 5, 6, 7, 234, "324", true, [1, 2, 3], 3]));
console.log(firstPlusLength(['123', 10, 4, 5, 6, 7, 234, "324", true, [1, 2, 3], 3]));
console.log(firstPlusLength([true, 10, 4, 5, 6, 7, 234, "324", true, [1, 2, 3], 3]));

function valuesGreaterThanSecond(data) {
    count = 0;
    for (let j of data) {
        if ( j > data[1] ) {
            count++;
        }
    }
    return count;
}
console.log(valuesGreaterThanSecond([1,3,5,7,9,13]));

function valuesGreaterThanSecond(data) {
    if ( data.length > 1) {
        count = 0;
        for (let j of data) {
            if ( j > data[1] ) {
                count++;
            }
        }
        return count;
    }
    return "Array length less than two";
}
console.log(valuesGreaterThanSecond([1,3,5,7,9,13]));
console.log(valuesGreaterThanSecond([1,3]));
console.log(valuesGreaterThanSecond([1]));

function fitTheFirstValue(data) {
    if (data[0] > data.length) {
        console.log("Too big!");
    } else if (data[0] < data.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!")
    }
}
fitTheFirstValue([1]);
fitTheFirstValue([2,1]);
fitTheFirstValue([2,1,3]);
fitTheFirstValue([1,2]);
fitTheFirstValue([3,1]);

function fahrenheitToCelsius(fDegrees)  {
    return (fDegrees - 32)* 5 / 9;
}
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(0));
console.log(fahrenheitToCelsius(13));
console.log(fahrenheitToCelsius(100));

function celsiusToFahrenheit(cDegrees) {
    return (9/5 * cDegrees) + 32;
}
console.log(celsiusToFahrenheit(32));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(13));
console.log(celsiusToFahrenheit(100));


