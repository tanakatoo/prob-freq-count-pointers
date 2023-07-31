// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    //empty object
    //for each key, associate a value with it
    //until there are no more keys
    //if there are no more values, put null
    let obj = {}
    console.log(keys.length)
    for (let i = 0; i < keys.length; i++) {

        console.log(values[i], keys[i])
        if (values[i] !== undefined) {
            console.log('in here')
            obj[keys[i]] = values[i]
        } else {
            obj[keys[i]] = null
        }

    }
    return obj

}
