function timeCount(time){
    let hour = parseInt(time/3600);

    let remainingHour = time %3600; 

    let minute = parseInt(remainingHour / 60);

    let second = remainingHour % 60 ;

    return `${hour} hour ${minute} minute ${second} second ago `
}

console.log(timeCount(8920));