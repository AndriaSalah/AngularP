//problem 3
let arr1 = [1,2,3,6,4,5]
let largest = 0
for (let i = 0; i < arr1.length; i++) {
    if(arr1[i]>largest){
        largest = arr1[i]
    }

}
console.log(`largest is ${largest}`)