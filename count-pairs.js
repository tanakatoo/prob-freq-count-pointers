// add whatever parameters you deem necessary
function countPairs(arr, num) {
    //sort the numbers
    let sorted = arr.sort((a, b) => a - b)
    let count = 0
    let pointer1 = 0
    let pointer2 = arr.length - 1

    while (pointer1 < pointer2) {
        if (sorted[pointer1] + sorted[pointer2] === num) {
            count++;
            pointer1++
            pointer2--
        } else if (sorted[pointer1] + sorted[pointer2] < num) {
            //move pointer 1 upwards
            pointer1++
        } else if (sorted[pointer1] + sorted[pointer2] > num) {
            //move pointer2 downwards
            pointer2--
        }
    }
    return count

}
