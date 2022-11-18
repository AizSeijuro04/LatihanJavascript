const list = "JS full stack 2022";
const arr = list.split(" ");

//search word
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === 'stack') {
        console.log('Found index ke: '+i);
    }
}
console.log();
