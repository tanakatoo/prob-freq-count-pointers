// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {

    //if pointer1 and pointer2 same then increase pointer
    //if not the same, increase only pointer 2
    //repeat until end of pointer1

    let pointer1 = 0
    let pointer2 = 0
    while (pointer1 < str1.length && pointer2 < str2.length) {
        console.log(pointer1, pointer2, str1.length, str2.length)
        console.log(pointer1 === str1.length - 1)
        if (str1[pointer1] === str2[pointer2]) {
            if (pointer1 === str1.length - 1) {
                return true
            }
            pointer1++
            pointer2++

        } else {
            pointer2++
        }
    }
    return false
}
