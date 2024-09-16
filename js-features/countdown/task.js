// первый вариант
// function startTimer() {
//     const timer = document.getElementById('timer');
//     timer.textContent -= 1;
// };

// let intervalId = setInterval(() => {
//     if(parseInt(timer.textContent) === 0) {
//         clearInterval(intervalId);
//         alert('Вы победили в конкурсе');
//         return;
//     };
//     startTimer();

// }, 1000);



//второй вариант, получилось только, когда вынесла переменные в глобальную область видимости. Можно внутри функции сделать тоже самое?

// const timer = document.getElementById('timer');
// const statusTimer = document.getElementById('status'); 
// let newTimer = timer.textContent; 
// statusTimer.textContent = '00:00:' + newTimer.toString().padStart(2, 0);

// function startTimer() {
//     newTimer -= 1;
//     statusTimer.textContent = '00:00:' + newTimer.toString().padStart(2, 0);
// };

// let intervalId = setInterval(() => {
//     if(parseInt(newTimer) === 0) {
//         clearInterval(intervalId);  
//         alert('Вы победили в конкурсе'); 
//         return;    
//     };
//     startTimer();

// }, 1000);

// третий вариант
// function startTimer() {
//     const timer = document.getElementById('timer');
//     timer.textContent -= 1;
// };

// let intervalId = setInterval(() => {
//     if(parseInt(timer.textContent) === 0) {
//         clearInterval(intervalId);
//         location.assign("https://vrn.skvirel-shop.ru");
//     };
//     startTimer();

// }, 1000);

const timer = document.getElementById("timer");

let intervalId = setInterval(() => {
  timer.textContent -= 1;
  if (parseInt(timer.textContent) === 0) {
    clearInterval(intervalId);
    location.assign("https://vrn.skvirel-shop.ru");
  }
}, 1000);
