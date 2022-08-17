//problem 7

function revArray(array){
    let reverse = []
    for (let i = array.length-1; i >= 0; i--) {
        reverse.push(array[i])  
    }
    return reverse
}

let arr = [1,2,3,4,5] ,
rev = revArray(arr)
console.log(rev)