const name = 'Serhii'
let age = 35;
const city = 'Zolotonosha';
const role = 'web developer';
const skills = ['HTML', 'CSS', 'JavaSkript', 'React', 'Node'];

function createProfile() {
    return`My name is ${name}. I am ${age} years older. I live in ${city}. I want become is ${role}`
};

console.log(createProfile());