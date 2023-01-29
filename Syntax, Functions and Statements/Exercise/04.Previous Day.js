function previousDay(year, month, day){
    let myDate = new Date(year, month - 1 , day - 1);
    let myDay = (myDate.getDate());
    let myMonth = (myDate.getMonth() + 1);
    let myYear = (myDate.getFullYear())
    console.log(`${myYear}-${myMonth}-${myDay}`);
}
previousDay(2016, 1, 1)
previousDay(2016, 10, 1)