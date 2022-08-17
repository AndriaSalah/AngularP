// problem 4
function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
}

function datediff(first, second) {
    return Math.round((second-first)/(1000*60*60*24));
}

date1 = parseDate('1/3/2000')
date2 = parseDate('2/4/2002')
console.log(`${datediff(date1,date2)} days`)