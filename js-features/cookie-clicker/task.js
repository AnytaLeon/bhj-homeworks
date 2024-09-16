// первый вариант

// const click = document.getElementById('clicker__counter');
// const image = document.getElementById('cookie'); 

// const clicker = function() {
//     parseInt(click.textContent) % 2 ? image.width = 200: image.width = 150;
//     click.textContent = parseInt(click.textContent) + 1;  
// };
// image.onclick = clicker;


// второй вариант (не получилось сделать перенос на новую строку, пробовала добавить \n)
// clickerStatus.innerHTML = `Всего кликов: ${clickCount}<br>Скорость клика: ${clickerSpeed}`
const click = document.getElementById('clicker__counter');
const clickerStatus = document.querySelector(".clicker__status");
const image = document.getElementById('cookie'); 
let clickerSpeed = 0;
let clickCount = parseInt(click.textContent);
clickerStatus.textContent = `Всего кликов ${clickCount} Скорость клика ${clickerSpeed}`;

let date = new Date();

const clicker = function() {
    parseInt(clickCount) % 2 ? image.width = 200: image.width = 150;
    clickCount++;
    let currentDate = new Date();
    clickerSpeed = (1 / ((currentDate - date) / 1000)).toFixed(2);
    clickerStatus.textContent = `Всего кликов ${clickCount} Скорость клика ${clickerSpeed}`;
    date = currentDate;
};

image.onclick = clicker;