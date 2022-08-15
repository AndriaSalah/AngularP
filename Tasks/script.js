//lecture tasks
let salary = prompt('please enter your salary')

let taxes = 0.1 * salary

console.log(salary - taxes)

// //=============================================================================

let x = parseInt(prompt('please enter the first number'))
let y = parseInt(prompt('please enter the second number'))

console.log('sum is ' + (x+y))
console.log('subtraction is ' + (x-y))
console.log('multiplication is ' + (x*y))
if(y != 0){
console.log('Division is ' + (x/y))
}
else {
    console.log('cant divide by zero')
}
//=================================================================================
// // // sheet tasks
// // //problem 1 even/odd check
let x = Number(prompt('enter a number to check if it;s even or odd'));
if(x%2 == 0) console.log('even')
else console.log('odd')
//==================================================================================
// // //problem 2
// // //fizz buzz

for (let index = 1; index <= 100; index++) {
    if(index %3 == 0 )console.log('fizz ' + index)
    else if(index%5 == 0) console.log('buzz ' + index)
    
}
//==================================================================================
// //problem 3
// string reversal
let mystring = prompt('please enter the string you want to be reversed')
let reversed = ''

for (let index = mystring.length-1; index >= 0; index--) {
    reversed += mystring.charAt(index)
    
}
console.log(reversed)
//==================================================================================
// //problem 4
// //compute circle circumference and area
let radius = Number(prompt('please enter the radius of the circle'))
const Pi = 3.14
let circumference = 2 * Pi  * radius
let area = Pi * Math.pow(radius,2)
console.log('the Circumference for a circle with Radius ' + radius + ' is ' + circumference)
console.log('the Area for a circle with Radius ' + radius + ' is ' + area)
//==================================================================================
// //problem 5
 let number1 = Number(prompt('enter number 1'))
 let number2 = Number(prompt('enter number 2'))
 let sum     = number1 + number2 
 if(number1 == 50 || number2 == 50 || sum == 50){
    console.log('true')
 }
 else console.log('false')
//==================================================================================
// //problem 6
let number1 = Number(prompt('enter number 1'))
let number2 = Number(prompt('enter number 2'))

if(number1 < 0) console.log(number1 + " is negative")
else console.log(number1 + " is positive")

if(number2 < 0) console.log(number2 + " is negative")
else console.log(number2 + " is postive")
//==================================================================================
// // problem 7
let number1 = Number(prompt('enter number 1'))
if(number1 > 0 ){
    if (number1 % 5 ==0) console.log(number1 + " can be a multiple of 5")
    if (number1 % 8 == 0) console.log(number1 + " can be a multiple of 8")
}
else console.log('Error negative number entered')
//==================================================================================
// //problem 8
 let number1 = Number(prompt('enter number 1'))
 let number2 = Number(prompt('enter number 2'))
 let number3 = Number(prompt('enter number 3'))
 let largest 
 if(number1 > number2) largest = number1
 else largest = number2
    if(largest < number3)largest = number3 
    
console.log(largest + " is the largest between " + number1 + ' ' + number2 + ' ' + number3)
//==================================================================================
// //problem 9
let sum = 0
for (let index = 1; index <= 10; index++) {
    sum += index
}
console.log('sum of the numbers from 1 to 10 is '+sum)
//==================================================================================
// //problem 10
let starcoutner = 1
let star='*'
for (let index = 0; index < 5; index++) {
    for (let index = 0; index < starcoutner; index++) {
        star+='*'
    }
    starcoutner++
    console.log(star)
}
//==================================================================================
// //problem 11
let number1 = Number(prompt('enter number '))

if(number1 < 0) console.log(number1 + " is negative")
else console.log(number1 + " is positive")
//==================================================================================
// //problem 12
const arr1 = [1,2,3,4,5,6,7,8,9,10]
for (let index = 0; index < arr1.length; index++) {
    console.log('element '+index + ' : ' + arr1[index])
    
}
//==================================================================================
// //problem 13
let number1 = Number(prompt('enter number 1 '))
let number2 = Number(prompt('enter number 2 '))
console.log('sum = '+ (number1+number2))
//==================================================================================

//problem 14

// // normal method
let number = Number(prompt('enter number 1 '))
let Factorial = 1
if(number == 1 | number == 0){
    console.log('factorial of ' + number + 'is 1')
} 
else{
    for (let index = number; index >= 1; index--) {
       Factorial = Factorial * index
       console.log(Factorial)
    }
    console.log('Factorial of '+ number +' is ' + Factorial )
}

// //recursion
let number = Number(prompt('enter number 1 '))
Solution = factorial(number)
console.log('Factorial of '+ number +' is ' + Solution )
function factorial(number){
    if(number == 1 | number == 0){
        return 1
    }
    else{
        return number * factorial(number-1)
    }
}
//==================================================================================
//problem 15
let x = parseInt(prompt('please enter the first number'))
let y = parseInt(prompt('please enter the second number'))

console.log('sum is ' + (x+y))
console.log('subtraction is ' + (x-y))
console.log('multiplication is ' + (x*y))
if(y != 0){
console.log('Division is ' + (x/y))
}
else {
    console.log('cant divide by zero')
}

//==================================================================================
