//copy array based on reference
const skill = ['java','js','oracle','php','golang','sqlserver'];

const progLang = skill;

//progLang dan skill memiliki element yg sama, karena refer ke addres memory yg sama
progLang.push('reactJs');

//copy array with new address memory
const progLang2 = Array.from(skill);
progLang2.push('game')

//progLang2.length=0;

console.log(progLang);
console.log(progLang2);

console.log();