// add whatever parameters you deem necessary
function freq(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] + 1 || 1;
    }
    return obj
}

function constructNote(msg, letters) {
    if (letters.length === 0) return false
    if (msg.length === 0) return true
    let msgObj = freq(msg)
    let lettersObj = freq(letters)
    for (k of Object.keys(msgObj)) {
        if (!(lettersObj[k] && (lettersObj[k] > msgObj[k]))) {
            return false
        }
    }
    return true
}
