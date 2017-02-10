
var getVolume = function(valley) {
    var leftMaxArray = [],
        rightMaxArray = [],
        maxSoFar = 0,
        i,
        valleyLength = valley.length,
        volume = 0;
    if (valleyLength === 0) {
        // not a valley?
        return;
    }

    // collect max from left for each element
    leftMaxArray.push(0); // for first element, there is nothing on left
    maxSoFar = valley[0];
    for(i = 1;i< valleyLength; i++) { // O(n)
        if (valley[i] > maxSoFar) {
            maxSoFar = valley[i];
        }
        leftMaxArray.push(maxSoFar);
    }

    // collect max from right for each element
    rightMaxArray.push(0); // for last element, there is nothing on right
    maxSoFar = valley[valleyLength-1];
    for(i = valleyLength-2;i >= 0; i--) { // O(n)
        if (valley[i] > maxSoFar) {
            maxSoFar = valley[i];
        }
        rightMaxArray.push(maxSoFar);
    }
    rightMaxArray.reverse(); // reverse as we traversed right to left

    for(i = 1;i< valleyLength-1; i++) { // O(n)
        if (valley[i] < leftMaxArray[i] && valley[i] < rightMaxArray[i]) {
            volume += (Math.min(leftMaxArray[i], rightMaxArray[i]) - valley[i]);
        }
    }
    console.log(valley);
    console.log('Volume of water in above Valley after Rain is :' + volume + ' units');
} 


// use cases (assumption, valley cannot have negative values)
getVolume([2, 4, 5, 2, 3, 4, 6, 6, 4, 5]);
getVolume([9, 8, 7, 6, 5, 5, 6, 7, 8, 9]); // 20 units
getVolume([3, 2, 1, 2]); // 1 unit
getVolume([5, 4, 3, 2, 1, 5]); // 10 units
getVolume([5, 1, 2, 3, 4, 5]); // 10 units


/*
    Comments:
        We basically fin trenches in the valley and water collected in each valley based on max height of valleys
        in the neighbourshood.
        Total complexity is O(n).
*/
