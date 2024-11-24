const text = document.querySelector('#editor');
const removeButton = document.querySelector('.remove');

text.value = localStorage.getItem('text')

text.addEventListener('focusout', () => {
    localStorage.setItem('text', text.value.trim())
});

removeButton.addEventListener('click', () => {
    text.value = '';
    localStorage.removeItem('text')
})