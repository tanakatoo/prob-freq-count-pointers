

// add whatever parameters you deem necessary
function averagePair(arr, avg) {
    //if the average of the highest 2 numbers are too small then it nothing can average to the number
    if ((arr[arr.length - 1] + arr[arr.length - 2]) / 2 < avg) return false
    //if the average of the lowest 2 numbers are too big, then it can't average to the number
    if ((arr[0] + arr[1]) / 2 > avg) return false

    //pointer 1, pointer 2, add and average, if it is too big, pointer 2 goes down
    //if it is too small, then pointer 1 goes up
    let pointer1 = 0
    let pointer2 = arr.length - 1

    while (pointer1 < pointer2) {
        let calcAvg = (arr[pointer1] + arr[pointer2]) / 2
        if (calcAvg === avg) {
            return true
        } else if (calcAvg > avg) {
            pointer2 = pointer2 - 1
        } else {
            pointer1 = pointer1 + 1
        }
    }
    return false

    //it is sorted so 
    //for each lower number add it to the higher number, if the average is too high
    //then keep on moving the higher number down 1 until it is too low.
    //when number is too low, move the lower number higher until it is 
    //for each number, add it to every other number and divide by 2 and see if it is the same as the avg
    //see if empty works, if not then add a check to see if arr is empty
    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         if ((arr[i] + arr[j]) / 2 === avg) {
    //             return true
    //         }
    //     }
    // }
    // return false
}
