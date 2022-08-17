
//bonus 2 
function add(x) {
    return function(y) {
        return x + y;
    };
}

let sum = add(2)(3)
console.log(sum)