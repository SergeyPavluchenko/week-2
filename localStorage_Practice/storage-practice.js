const form = document.querySelector(".form-input")
const searchField = document.querySelector(".search")



const hendleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('localStorageKey', searchField.value)
    searchField.value = '';
}

const hendleLoad = () => {
    const saved = localStorage.getItem('localStorageKey') ?? ""
    searchField.value = saved

}

window.addEventListener('load', hendleLoad)
form.addEventListener('submit', hendleSubmit)