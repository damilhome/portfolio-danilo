const languageChooser = document.getElementById('page-language');
const languageOptionsContainer = document.getElementById('languages-options');
const languageOptions = document.getElementById('languages-options-menu');
const english = document.getElementById('english');
const portuguese = document.getElementById('portuguese');
const caret = document.querySelector('#page-language i:last-child');

languageOptionsContainer.addEventListener('click', event => {
    event.stopPropagation(); // Evita que o clique dentro de languageOptions afete o languageChooser
});

languageChooser.addEventListener('click', event => {
    /* languageOptions.parentElement.classList.toggle('disappear-container'); */

    if(languageOptions.classList.contains('first-disappear')){
        languageOptions.classList.remove('first-disappear');
        languageOptions.classList.add('disappear');
    }
    if(languageOptions.classList.contains('disappear')) {
        languageOptions.classList.remove('disappear');
        languageOptions.classList.add('appear');
    } else {
        languageOptions.classList.remove('appear');
        languageOptions.classList.add('disappear');
    }
    const isClosed = languageOptions.classList.contains('disappear')

    if(isClosed) {
        languageChooser.classList.remove('open')
    } else {
        languageChooser.classList.add('open')    
    }

    event.stopPropagation();
});

document.addEventListener('click', event => {
    const isClosed = languageOptions.classList.contains('disappear');
    const isFirstClosed = languageOptions.classList.contains('first-disappear');

    if(!isClosed && !isFirstClosed && !languageChooser.contains(event.target)) {
        languageOptions.classList.remove('appear');
        languageOptions.classList.add('disappear');
        languageChooser.classList.remove('open');
    }
})