function freq(num) {
    let obj = {}
    num = num.toString()
    for (let i = 0; i < num.length; i++) {
        obj[num[i]] = obj[num[i]] + 1 || 1
    }
    return obj
}

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    let obj1 = freq(num1)
    let obj2 = freq(num2)
    console.log(obj1, obj2)
    for (x of Object.keys(obj1)) {
        //is it in the obj2? is it the same frequency?
        if (!(obj2[x] && (obj2[x] === obj1[x]))) {
            return false
        }
    }
    return true
}
