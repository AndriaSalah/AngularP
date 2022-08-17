// problem 1
function sumbObjectValues(object){
    arr1 = Object.values(object)
    
    var sum = 0;
    //longer way
    // for (let index = 0; index < arr1.length; index++) {
    //     console.log(arr1[index])
    //     console.log(typeof(arr1[index]))
    //     sum += (arr1[index])
    // }
    // console.log(sum)
    for (let property in object) {
        if (object.hasOwnProperty(property)) {
            sum+= parseInt(object[property])

        }
        console.log(sum)
    }
}


let a = {
    a : 10,
    b : 20
}
sumbObjectValues(a);





