var words = ['Создание эффективных сайтов', 'Уникальный, неповторимый дизайн', 'Эффективное, действенное продвижение', 'Массивная веб-реклама'],
    currentStep = 0,
    textEl = document.querySelector('.title-main'),
    oldWord = '';


setTimeout(changeWord, 3000);

function changeWord() {
    oldWord = textEl.innerHTML;

    // check if there is a word atm or not
    if (oldWord.length < 1) {

        if (currentStep !== words.length - 1) {
            currentStep++;
        } else {
            currentStep = 0;
        }
        addNextWord();
    } else {
        setTimeout(deleteWord, 3000);
    }

};

function deleteWord() {
    var WordLength = oldWord.length,
        currentWord = textEl.innerHTML,
        currentLength = currentWord.length;


    // The word is deleted so, start adding in the new one
    if (currentLength < 1) {
        changeWord();
        return;
    }

    // Remove a charachter
    textEl.innerHTML = currentWord.substring(0, currentLength - 1);

    setTimeout(deleteWord, 50);
}

function addNextWord() {
    var currentWord = textEl.innerHTML,
        currentLength = currentWord.length,
        nextWord = words[currentStep],
        nextWordLength = nextWord.length;


    if (currentLength === nextWordLength) {
        changeWord();
        return;
    }

    // add a charachter
    textEl.innerHTML = nextWord.substring(0, currentLength + 1);

    setTimeout(addNextWord, 50);
}
