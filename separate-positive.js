// add whatever parameters you deem necessary
function separatePositive(arr) {
    //if the number is negative, move it to the end of the array, if it is positive, move it to the beginning
    //if all positive numbers, do nothing
    //if all negative numbers, do nothing
    let pointer1 = 0
    let pointer2 = arr.length - 1




    //if pointer 1 if negative and pointer 2 is negative 
    //do while pointer 1 is less than pointer 2
    while (pointer1 < pointer2) {

        if (arr[pointer1] > 0 && arr[pointer2] > 0) {
            //if pointer 1 is positive, and pointer 2 is positive then move to the right of pointer 1
            let temp = arr[pointer1 + 1]
            arr[pointer1 + 1] = arr[pointer2]
            arr[pointer2] = temp
            pointer1 = pointer1 + 2
        } else if (arr[pointer2] > 0 && arr[pointer1] < 0) {
            //if pointer 1 is negative and pointer 2 is positive, switch
            let temp = arr[pointer1]
            arr[pointer1] = arr[pointer2]
            arr[pointer2] = temp
            pointer1++
            pointer2--
        } else if (arr[pointer1] < 0 && arr[pointer2] < 0) {
            let temp = arr[pointer2 - 1]
            arr[pointer2 - 1] = arr[pointer1]
            arr[pointer1] = temp
            pointer2 = pointer2 - 2
        }

        else {
            //if pointer 2 is negative and pointer 1 is positive then do nothing
            pointer1++
            pointer2--
        }

    }

    return arr
}
