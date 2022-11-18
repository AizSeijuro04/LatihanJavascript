//create object date with constructor
const today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDay());

// get info hour minute
const hour = today.getHours();
const minute = today.getMinutes();
const seconds = today.getSeconds();

console.log(hour);
console.log(minute);
console.log(seconds);

// create new date 
const tomorrow = new Date(2022,10,18);
console.log(tomorrow);

//
const startDate = new Date(2022,10,10);
const endDate = new Date();
console.log(startDate);
console.log(endDate);

const selisihMiliSecond = endDate - startDate;
const miliSecondPerDay = 60*60*24*1000;
let selisihPerHari = selisihMiliSecond/miliSecondPerDay;

selisihPerHari = Math.trunc(selisihPerHari);

console.log(selisihPerHari);
