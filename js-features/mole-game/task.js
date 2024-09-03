const deadMole = document.getElementById('dead');
const lostHole =  document.getElementById('lost');
const holes = document.querySelectorAll('.hole');


function getHole(index) {
    return document.getElementById(`hole${index}`);
};

function endGame(message) {
    alert(message);
    deadMole.textContent = 0;
    lostHole.textContent = 0;
    return;
};

function catchHole(index){
    let hole = getHole(index);
    if(hole.classList.contains('hole_has-mole')) {
        deadMole.textContent++
    } else {
        lostHole.textContent++
    };
        
    if(parseInt(deadMole.textContent) === 10) {
        endGame('Победа!');
    } else if (parseInt(lostHole.textContent) === 5) {
        endGame('Вы проиграли!');
    };
};

holes.forEach((hole, index) => {
    hole.onclick = () => catchHole(index + 1); // + 1 добавляю, т.к в массиве нумерация с нуля. Как можно этого избежать? Не совсем понятно, что за +1..
});

// или другой вариант вызова функции
// holes.forEach((hole, index) => hole.addEventListener('click', () => catchHole(index + 1)));

//второй вариант с циклом

// for (let i = 1; i <= 10; i += 1) {
//     let hole = getHole(i);

//     hole.addEventListener('click', function() {   
//         if(hole.className.includes('hole_has-mole')) {
//             deadMole.textContent++
//         } else {
//             lostHole.textContent++
//         };

//         if(parseInt(deadMole.textContent) === 10) {
//             endGame('Победа!');
//         } else if (parseInt(lostHole.textContent) === 5) {
//             endGame('Вы проиграли!');
//         };
//     });
// };