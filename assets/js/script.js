const languageChooser = document.getElementById('page-language');
const languageOptions = document.getElementById('languages-options');
const english = document.getElementById('english');
const portuguese = document.getElementById('portuguese');
const caret = document.querySelector('#page-language i:last-child');

languageChooser.addEventListener('mouseenter', event => {
    languageOptions.classList.toggle('disappear');
    const isClosed = languageOptions.classList.contains('disappear')

    if(isClosed) {
        languageChooser.classList.remove('open')
    } else {
        languageChooser.classList.add('open')    
    }

    event.stopPropagation();
});

document.addEventListener('mouseover', event => {
    const isClosed = languageOptions.classList.contains('disappear');

    if(!isClosed && !languageChooser.contains(event.target)) {
        languageOptions.classList.add('disappear');
        languageChooser.classList.remove('open');
    }
})