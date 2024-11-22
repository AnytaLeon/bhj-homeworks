const storage = window.localStorage;
const text = document.querySelector('#editor');
const removeButton = document.querySelector('.remove');

if(storage.length) {
    text.value = storage.getItem('text')
};

text.addEventListener('focusout', () => {
    storage.setItem('text', text.value.trim())
});

removeButton.addEventListener('click', () => {
    text.value = '';
    storage.clear();
})