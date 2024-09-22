const tab = [...document.querySelectorAll('.tab')];
const tabContent = [...document.querySelectorAll('.tab__content')];

tab.forEach((item, index) => {
    item.addEventListener('click', () => {
        tab.map((element,i) => {
            if(i !== index) {
                element.classList.remove('tab_active');
                tabContent[i].classList.remove('tab__content_active');
            }
        });
        item.classList.add('tab_active');
        tabContent[index].classList.add('tab__content_active');
    })
});