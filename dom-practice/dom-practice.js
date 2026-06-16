const form = document.querySelector('.form-input')
const inputSearch = document.querySelector('.search')
const inputText = document.querySelector('.output')

const hendleEvent =
    (event) => {
        event.preventDefault()

        if (inputSearch.value === '') {
            alert('Enter text')
            console.log('Enter text');
            return
        }
        inputText.textContent = inputSearch.value
        console.log(inputSearch.value);
        inputSearch.value = ''

    }

// inputSearch.addEventListener("input", (event) => {
//     inputText.textContent = event.currentTarget.value;
// });



form.addEventListener('submit', hendleEvent)