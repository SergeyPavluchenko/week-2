const name = 'Serhii'
let age = 35;
const city = 'Zolotonosha';
const role = 'developer';
const skills = ['HTML', 'CSS', 'JavaSkript', 'React', 'Node'];

function createProfile() {
    return`My name is ${name}. I am ${age} years older. I live in ${city}. I want become is Web ${role}`
};

console.log(createProfile());