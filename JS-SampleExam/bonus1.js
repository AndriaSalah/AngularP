//bonus 1

  let converttime = (time12) => {
    let [time , period] = time12.split(' ');

    let [hours,mins] = time.split(':')

    if(period === 'pm' || period ==='PM' ){

        hours = parseInt(hours) + 12
    }
    return `${hours}:${mins}`

  }

console.log(converttime('05:00 PM'))