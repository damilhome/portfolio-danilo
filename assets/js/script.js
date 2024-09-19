const languageChooser = document.getElementById('page-language');
const languageOptions = document.getElementById('languages-options');
const english = document.getElementById('english');
const portuguese = document.getElementById('portuguese');
const caret = document.querySelector('#page-language i:last-child');

languageChooser.addEventListener('click', event => {
    languageOptions.classList.toggle('disappear');
    const isClosed = languageOptions.classList.contains('disappear')

    if(isClosed) {
        languageChooser.classList.remove('open')
    } else {
        languageChooser.classList.add('open')    
    }

    event.stopPropagation();
});

document.addEventListener('click', () => {
    const isClosed = languageOptions.classList.contains('disappear');

    if(!isClosed) {
        languageOptions.classList.add('disappear');
        languageChooser.classList.remove('open');
    }
})