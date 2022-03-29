// variables
let oneLetter = document.querySelectorAll('.one-letter');
let boxBody = document.querySelector('.box-body');

// utilites
let loopWatch = false;


// methods
function remove() { boxBody.textContent = ''; } // remove contents in the boxbody before adding news

function addElement(parent, child) {
    parent.appendChild(child);
};

function getInputValue() {
    let oneLetterInput = document.querySelector('.one-letter input[name = "one-letter-input"]');
    console.log(oneLetterInput.value);
}

function createInput() {
    let oneLetterInput = document.createElement('input');
    oneLetterInput.setAttribute('name', 'one-letter-input');

    return oneLetterInput;
}

function createDiv() {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'one-letter');

    addElement(newDiv, createInput());

    return newDiv;
}

function createOneLetterUpdate(letter) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'one-letter');
    newDiv.textContent = letter;

    return newDiv;
}

function script() {
    function decideKey(code) {
        if (code == 13 && loopWatch) {
            console.log('You have done');
            remove();
            clearInterval(loop);
            loopWatch = false;
        } else if (code != 13 && loopWatch) {
            remove();
            addElement(boxBody, createDiv());
            getInputValue();
        }
        if (loopWatch) {} else {}
    };

    let loop = setInterval(() => {
        loopWatch = true;

        let doc = document.querySelector('body');
        doc.addEventListener('keydown', e => {
            decideKey(e.keyCode);
        })
    }, 100);
}




// events
oneLetter.forEach(e => {
    e.addEventListener('click', () => {
        remove();
        addElement(boxBody, createDiv());
        script();
    })
})