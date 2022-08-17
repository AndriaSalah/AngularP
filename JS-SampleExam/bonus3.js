//bonus 3
var a = {name:'andria', age : 26},
    b = {name:'ibrahim',age : 25},
    c = {name:'badr',   age : 24},
    d = {name:'mohab',  age : 23},
    e = {name:'radwan', age : 22},
    f = {name:'hassan', age : 21}
var arrofob = [a,b,c,d,e,f]

function search(string){
    for (let i = 0; i < arrofob.length; i++) {
        if(arrofob[i].name === string){
            console.log(`${string} found at index ${i}`)
        }
    
    }
}   
search('hassan')