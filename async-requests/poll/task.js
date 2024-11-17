const pollAnswers = document.querySelector('.poll__answers');
const title = document.querySelector('.poll__title');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

const xhr_post = new XMLHttpRequest();
xhr_post.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr_post.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );


xhr.addEventListener('load', () => {
    const data = JSON.parse(xhr.response).data;
    title.textContent = data.title;
     
    data.answers.forEach(item => {        
        pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">
              ${item}
        </button>`)
    });
    let btns = document.querySelectorAll('.poll__answer');

    btns.forEach((item, index) => {
        item.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
            xhr_post.send( `vote=${JSON.parse(xhr.response).id}&answer=${index}`);
        })
    })
});

xhr_post.addEventListener('load', () => {
    const results = JSON.parse(xhr_post.response).stat;
    removeAnswers();
    const sum = results.reduce((acc, item) => item.votes + acc, 0);

    results.forEach(item => {
        pollAnswers.insertAdjacentHTML('afterbegin', `<div>
            ${item.answer}: ${(item.votes / sum * 100).toFixed(2)}%
      </div>`)
    })

})

function removeAnswers(){
    pollAnswers.innerHTML = '';
}