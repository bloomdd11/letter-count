// virables
let userinput = document.querySelector('.inputfield input[name="userinput"]');
let submit = document.querySelector('.inputfield .submit');
let boxBody = document.querySelector('.box-body');
let store = [];

// method
function remove() {
    boxBody.textContent = '';
}

function letterStore() {
    let store = [];
    let len = userinput.value.length;
    for (let i = 0; i < len; i++) {
        store.push(userinput.value[i]);
    }

    store.forEach(i => {
        if (i == ' ') {
            addDiv('-')
        } else {
            addDiv(i);
        }
    })
    return store;
}

function addDiv(userletter) {
    let letter = document.createElement('div');
    letter.setAttribute('class', 'one-letter');
    letter.textContent = userletter;

    boxBody.appendChild(letter);
}

function process() {
    remove();
    letterStore();
}

// event
submit.addEventListener('click', () => {
    process();
})