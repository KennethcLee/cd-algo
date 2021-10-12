function binarySearch(arr, num) {
    var pointer = Math.floor(arr.length/2);
    for (let j = 1; j < arr.length; j++) {
        if (arr[pointer] > num) {
            pointer = Math.floor(pointer/2);
        } else if (arr[pointer] < num) {
            pointer = Math.floor((arr.length-pointer)/2);
        } else if (arr[poiner] == num) {
            return true;
        }
    }
}