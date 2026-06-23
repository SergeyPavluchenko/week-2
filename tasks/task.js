const tasks = document.querySelector('.task__input')
const taskBtn = document.querySelector('.task__btm__add')
const taskList = document.querySelector('.task__ul')

const hendleAddTask = (e) => {
    e.preventDefault()
    const value = tasks.value
    if (value === '') {
        alert('Enter task')
    } else {
        addTask(value)
        tasks.value = ''

        const arr = JSON.parse(localStorage.getItem('tasks')) || []
        arr.push(value)

        localStorage.setItem('tasks', JSON.stringify(arr))
    }
}

function showTasks() {
    const arr = JSON.parse(localStorage.getItem('tasks')) || []
    arr.forEach(task => addTask(task));
}


function addTask(value) {

    let li = document.createElement('li')
    li.textContent = value
    taskList.appendChild(li)
    let span = document.createElement('span')
    span.textContent = '\u00d7'
    li.appendChild(span)
}


const hendleClick = (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('task__ul__chaked')
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
    }
}



function saveLoad() {

}

window.addEventListener('load', showTasks)
taskList.addEventListener('click', hendleClick)
taskBtn.addEventListener('click', hendleAddTask);

