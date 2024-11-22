const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close');

if((document.cookie === '') || (getCookie('modal') !== 'close')){
    modal.classList.add('modal_active');
};

closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('modal', 'close');
});

function setCookie(name, value){
    document.cookie = name + '=' + encodeURIComponent(value)
};

function getCookie(name){
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie ? cookie.slice(name.length + 1) : ''
};