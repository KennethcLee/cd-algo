var myNumber = 42;
var myName = 'Ken';
console.log(myNumber, myName);
var temp = 42;
myNumber = myName;
myName = temp;
console.log(myNumber, myName);

for (var num = -52; num < 1067; num = num + 1 ) {
    console.log(num);
}

function beCheerful() {
    console.log("good morning!");
}
for (var num = 0; num < 98; num++) {
    beCheerful();
}

for (var num = -300; num < 1; num++) {
    if (num != -3 && num != -6) {
        console.log(num);
    }
}

var num = 2000;
while ( num < 5281 ) {
    console.log(num);
    num++;
}

function guess(num1, num2) {
    if (num1 == 1 || num2 == 10){
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}
guess(1,4);
guess(4,10);
guess(1,10);
guess(6,7);

function leapyear(year) {
    if (year == 400) {
        return "leapyear";
    } else if (year % 100 == 0) {
        return "Not leapyear";
    } else if (year % 4 == 0) {
        return "leapyear";
    }
    return "Not leapyear";
}
console.log(leapyear(1000));
console.log(leapyear(400));
console.log(leapyear(800));
console.log(leapyear(16));
console.log(leapyear(15));
console.log(leapyear(0));

var num = 6;
while (num < 60001) {
    console.log(num);
    num += 6;
}

for (var num = 1; num < 101; num++) {
    if (num % 10 == 0) {
        console.log("Coding Dojo");
    } else if (num % 5 == 0) {
        console.log("Coding");
    } else {
        console.log(num);
    }
}

function printinput(data) {
    console.log(data);
}
printinput("hello");
printinput(15);
printinput([4, 5]);

function oddint1(num1, num2) {
    return( (num2+num1)/2 )
}

function oddint2(num1, num2) {
    var answer = 0;
    for (var num = num1; num < (num2+1); num++ ) {
        if ( num % 2 != 0 ) {
            answer += num;
        }
    }
    return answer
}
console.log(oddint1(-300000, 300000));
console.log(oddint2(-300000, 300000));
console.log(oddint1(-5, 3));
console.log(oddint2(-5, 3));
console.log(oddint1(-5, 7));
console.log(oddint2(-5, 7));

var num = 2016;
while (num > 0) {
    console.log(num);
    num-= 4
}

function countdown(lowNum, highNum, mult) {
    for (var num = highNum; num > lowNum -1; num--) {
        if (num % mult == 0 ) {
            console.log(num);
        }
    }
}
countdown(2, 9, 3);
countdown(209, 903, 3);
countdown(2, 10, 3);

function countdown(param1, param2, param3, param4) {
    var num = param2 - 1;
    while (num < (param3) ) {
        num++
        if (num % param4 == 0) {
            continue
        } else if (num % param1 == 0) {
            console.log(num);
        }
    }
}
countdown(3,5,17,9);
countdown(3,5,170,4);