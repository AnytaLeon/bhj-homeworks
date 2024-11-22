const signinForm = document.querySelector('.signin');
const form = document.querySelector('#signin__form');
const loginBtn = document.querySelector('#signin__btn');
const logoutBtn = document.querySelector('.logout__btn');
const welcomeSection = document.querySelector('.welcome');
const userId = document.querySelector('#user_id');
const card = document.querySelector('.card');

if(localStorage.getItem('userId')) {
    signIn(localStorage.getItem('userId'));
};

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.addEventListener('load', () => {
        const result = JSON.parse(xhr.response);
        if(result.success) {     
            localStorage.setItem('userId', result['user_id']);
            const id = localStorage.getItem('userId');
            signIn(id);

        } else {
            alert('Неверный логин/пароль')
        };
        form.reset();
    })
});

function signIn(user) {
    signinForm.classList.remove('signin_active');      
    welcomeSection.classList.add('welcome_active');
    userId.textContent = user;
};

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    logOut()
});

function logOut() {
    localStorage.removeItem('userId');
    signinForm.classList.add('signin_active');      
    welcomeSection.classList.remove('welcome_active');
}
