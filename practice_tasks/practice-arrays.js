// === TASK 1 ===
/**Print every technology using forEach*/


const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

for (const technologi of technologies) {
    console.log(technologi);
}

// === TASK 2 ===
/*Use map to create a new array with uppercase technology names.  */


const technologiesMap = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

const technologiesUpperCase = technologiesMap.map((technologiMap) => {return technologiMap.toUpperCase() })
console.log(technologiesUpperCase);

// === TASK 3 ===
/*Use filter to show only technologies longer than 4 characters*/

const technologiesFilter = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

const technologiesLength = technologiesFilter.filter(technologiFilter => technologiFilter.length > 4)

console.log(technologiesLength);


// === TASK 4 ===
/**Use find to find JavaScript */


const technologiesFind = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const firstValue = technologiesFind.find(tech => tech === 'JavaScript')
console.log(firstValue);
