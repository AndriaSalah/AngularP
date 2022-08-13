let incomingformula = document.querySelector("#formula")
let outgoinganswer = document.querySelector("#answer")


let firstend =''
let secondend =''
let formula = ''
let answer = 0 
const operators = ['+','-','*','/']

function calculate(){
    formula = incomingformula.value
    console.log(formula)
    for (let i = 0; i < formula.length; i++) {
        if(operators.includes(formula[i]) || i == formula.length){
            firstend = parseInt(formula.substring(0,i))
            for (let y = i+1; y < formula.length; y++) {
                if(operators.includes(formula[y]) || y == formula.length-1){
                    secondend = parseInt(formula.substring(i+1,y+1))
                    switch(formula[i]){
                        case '+':
                            answer = firstend + secondend
                            console.log(answer)
                            break
                        case '*':
                            answer = firstend * secondend
                            console.log(answer)
                            break
                        case '/':
                            answer = firstend / secondend
                            console.log(answer)
                            break
                        case '-':
                            answer = firstend - secondend
                            console.log(answer)
                            break     
                    }
                    break
                }
            }
        }
    }
    incomingformula.value=''
    outgoinganswer.innerHTML=answer
    
}