const form = document.querySelector('#form');
const progress = document.querySelector('#progress');
const btn = document.querySelector('#send');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    
    xhr.upload.addEventListener('progress', (e) => {       
        progress.value = e.loaded / e.total
    });

    xhr.send(formData);   
})