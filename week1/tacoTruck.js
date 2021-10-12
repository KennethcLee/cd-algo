function tacoTruck(arr) {
    var xmin = arr[0][0];
    var xmax = arr[0][0];
    var ymin = arr[0][1];
    var ymax = arr[0][1];
    for (let j = 1; j < arr.length; j ++  ){
        console.log("*** 1A ***", xmin, xmax, ymin, ymax);
        console.log("*** 1B ***", arr[j][0], arr[j][0], arr[j][1], arr[j][1]);
        console.log("*** 1C ***", arr[j][0] < xmin, arr[j][0] > xmax, arr[j][1] < ymin, arr[j][1] > ymax);
        if (arr[j][0] < xmin) {
            xmin = arr[j][0];
        }
        if (arr[j][0] > xmax) {
            xmax = arr[j][0];
        }
        if (arr[j][1] < ymin) {
            ymin = arr[j][1];
        }
        if (arr[j][1] > ymax) {
            ymax = arr[j][1];
        }
        console.log("*** 2D ***", xmin, xmax, ymin, ymax);

    }
}
console.log(tacoTruck( [ [10,0], [-1,-10], [2,4] ]));
