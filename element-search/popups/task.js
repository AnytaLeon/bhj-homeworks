const mainModal = document.querySelector('#modal_main');
const successModal = document.querySelector('#modal_success');
const closeBtns = document.querySelectorAll('.modal__close');
const successBtn = document.querySelector('.show-success');

mainModal.classList.add('modal_active');

closeBtns.forEach(item => {
    item.addEventListener('click', (e) => {
        e.currentTarget.closest('#modal_main').classList.remove('modal_active')
    })
});

successBtn.addEventListener('click', (e) => {
    e.preventDefault();
    successModal.classList.add('modal_active');
    closeBtns.forEach(item => {
        item.addEventListener('click', (e) => {
            e.currentTarget.closest('#modal_success').classList.remove('modal_active')
        })
    });
})