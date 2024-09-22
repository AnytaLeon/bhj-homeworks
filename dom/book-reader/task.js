const fontSizeSwitch = [...document.querySelectorAll('.font-size')];
const colorTextSwitch = [...document.querySelectorAll('.book__control_color .color')];
const bgColorSwitch = [...document.querySelectorAll('.book__control_background .color')]
const book = document.querySelector('.book');

//функция изменения размера блока book
function changeFontSize(size) {
    book.classList.remove('book_fs-big', 'book_fs-small');
    if(size) {
        book.classList.add('book_fs-' + size);
    }  
};

//обработчик для изменения размера шрифта
fontSizeSwitch.forEach((item, index) => {
    item.addEventListener('click', (event) => {

        event.preventDefault();

        let size = item.dataset.size;
        changeFontSize(size);
        
        fontSizeSwitch.map((element,i) => {
            if(i !== index) {
                element.classList.remove('font-size_active');
            };
        });

        event.currentTarget.classList.add('font-size_active');
    })
});

//функция для изменения цвета шрифта
function changeFontColor(color) {
    book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
    book.classList.add('book_color-' + color);
};

//обработчик для изменения цвета шрифта
colorTextSwitch.forEach((item, index) => {
    item.addEventListener('click', (event) => {

        event.preventDefault();

        let color = item.dataset.textColor;
        changeFontColor(color);
        
        colorTextSwitch.map((element,i) => {
            if(i !== index) {
                element.classList.remove('color_active');
            };
        });

        event.currentTarget.classList.add('color_active');
    })
});

//функция для изменения цвета фона
function changeBgColor(color) {
    book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
    book.classList.add('book_bg-' + color);
};

//обработчик для изменения цвета фона
bgColorSwitch.forEach((item, index) => {
    item.addEventListener('click', (event) => {

        event.preventDefault();

        let color = item.dataset.bgColor;
        changeBgColor(color);
        
        colorTextSwitch.map((element,i) => {
            if(i !== index) {
                element.classList.remove('color_active');
            };
        });

        event.currentTarget.classList.add('color_active');
    })
});