//sorting array
const number = [4,9,1,8,7,5]

number.sort()

number.sort((a,b)=> b-a)

//sorting string
const skill = ['java','js','oracle','php','golang','sqlserver'];

//ascending
skill.sort();

//ternary operation seperti if else,sorting descending
skill.sort((a,b) => a > b ? -1 : 1 );

skill.reverse();

if (Array.isArray(skill)) {
    console.log('skill is an Array');
}

console.log();