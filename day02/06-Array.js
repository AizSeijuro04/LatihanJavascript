//empty array
const number = [];

//initial array
const skill = ['java','js','oracle','sqlserver'];

//push : add element di last index
skill.push('postgres');
console.log(skill);

//pop : hapus element di last index 
skill.pop();
console.log(skill);

//unshift : add element di first index
skill.unshift('python')
console.log(skill)

//shift : hapus element di first index
skill.shift()
console.log(skill);

//delete skill[2]
console.log(skill[2])
 
for (let i = 0; i < skill.length; i++) {
    if (skill[i]==='oracle') {
        console.log(i);
    }
}

console.log(skill);