const form = document.querySelector(".form-input")
const searchField = document.querySelector(".search")
const clearButton = document.querySelector(".clear-button")



const hendleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('savedText', searchField.value)
    searchField.value = '';
}

const handleLoad = () => {
    const saved = localStorage.getItem('savedText') ?? ""
    searchField.value = saved

}

const handleClear = () => {
    localStorage.removeItem('savedText')
}

window.addEventListener('load', handleLoad)
form.addEventListener('submit', hendleSubmit)
clearButton.addEventListener('click', handleClear)