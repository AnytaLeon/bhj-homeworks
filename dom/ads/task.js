// 1. Вариант без использования nextElementSibling, firstElementChild
// const rotatorCases = [...document.querySelectorAll('.rotator__case')];
// let counter = 0;

// function rotator() {
//     rotatorCases.forEach((item, index) => {
//         if(index === counter) {
//             item.classList.add('rotator__case_active');
//             item.style.color = item.dataset.color;
//             speed = item.dataset.speed;

//         } else if(item.classList.contains('rotator__case_active')) {
//             item.classList.remove('rotator__case_active')
//         };        
//     });
//     counter += 1;

//     if(counter === rotatorCases.length) {
//         counter = 0;
//     };

//     setTimeout(rotator, speed);
// };

// rotator();


//2. Вариант с использованием nextElementSibling, firstElementChild и проверкой timeoutID
// const rotatorCard = document.querySelector('.rotator');
// let timeoutID = null;

// function rotator() { 
    
//     let rotatorItem = document.querySelector('.rotator__case_active');
//     if(timeoutID) {
//         rotatorItem.classList.remove('rotator__case_active');
//         if(rotatorItem.nextElementSibling === null) {
//             rotatorItem = rotatorCard.firstElementChild;   
//         } else {
//             rotatorItem = rotatorItem.nextElementSibling;  
//         };
//         rotatorItem.classList.add('rotator__case_active');
        
//     };
    
//     rotatorItem.style.color = rotatorItem.dataset.color;
//     speed = rotatorItem.dataset.speed
          

//     timeoutID = setTimeout(rotator, speed);
// };

// rotator();


//3. Вариант с debounce декоратором
const rotatorCard = document.querySelector('.rotator');

let rotatorItem = document.querySelector('.rotator__case_active');
let speed = rotatorItem.dataset.speed;
rotatorItem.style.color = rotatorItem.dataset.color; 

function rotator(){
    rotatorItem.classList.remove('rotator__case_active');

    if(rotatorItem.nextElementSibling === null) {
        rotatorItem = rotatorCard.firstElementChild;   
    } else {
        rotatorItem = rotatorItem.nextElementSibling;  
    };
    rotatorItem.classList.add('rotator__case_active');
    rotatorItem.style.color = rotatorItem.dataset.color;
    speed = rotatorItem.dataset.speed;

    setTimeout(rotator, speed)
    
};

function debounceDecorator(func, speed) {
    return function(){
        setTimeout(func, speed)
    }
};

const debounceRotator = debounceDecorator(rotator, speed);
debounceRotator(rotator, speed)