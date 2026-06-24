const tasks = document.querySelector('.task__input')
const taskBtn = document.querySelector('.task__btm__add')
const taskList = document.querySelector('.task__ul')

const handleAddTask = (e) => {
    e.preventDefault()
    const value = tasks.value
    if (value === '') {
        alert('Enter task')
    } else {
        addTask(value)
        tasks.value = ''

        saveTask(value)
    }
}

function saveTask(value) {
    const arr = JSON.parse(localStorage.getItem('tasks')) || []
    arr.push(value)
    localStorage.setItem('tasks', JSON.stringify(arr))
}

function loadTask() {
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

const handleToggle = (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('task__ul__chaked')
    } else {
        return
    }
}

const handleDelete = (e) => {
    if (e.target.tagName === 'SPAN') {
        const li = e.target.parentElement

        const arrIdx = Array.from(taskList.children).indexOf(li)

        li.remove()

        const arr = JSON.parse(localStorage.getItem('tasks')) || []
        arr.splice(arrIdx, 1)
        localStorage.setItem('tasks', JSON.stringify(arr))

    }
}



window.addEventListener('load', loadTask)
taskList.addEventListener('click', (e) => {
    handleToggle(e)
    handleDelete(e)
})
taskBtn.addEventListener('click', handleAddTask);

