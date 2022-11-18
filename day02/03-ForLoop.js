//for..loop

//vertical
/*for (let i = 0; i < 5; i++) {
    console.log(i);
}*/

//horizontal
/*let str = ""
for (let i = 0; i < 5; i++) {
    str = str + " " + i
}

console.log(str);*/

//buat kotak
for (let i = 0; i < 5; i++) {
    let str=0;
    for (let j = 0; j < 5; j++) {
        str = str + (i+j)+" "
    }
    console.log(str);
    console.log();
}