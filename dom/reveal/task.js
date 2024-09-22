const revealBlocks = [...document.querySelectorAll('.reveal')];

// функция проверяет видимость блока с классом reveal
function isVisible(el) {
    let coordinates = el.getBoundingClientRect();
    console.log(coordinates.top, coordinates.bottom)
    if(coordinates.bottom < 0) return false;
    if(coordinates.top > window.innerHeight) return false;
    return true;
};


//обработчик события scroll документа
window.addEventListener('scroll', () => {
    revealBlocks.forEach(item => {
        if(isVisible(item)) {
            item.classList.add('reveal_active')
        } else {item.classList.remove('reveal_active')}
    })    
})