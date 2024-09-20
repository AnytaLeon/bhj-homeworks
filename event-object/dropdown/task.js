const dropdown = document.querySelector('.dropdown');
const dropdownList = document.querySelector('.dropdown__list')
const dropdownText = document.querySelector('.dropdown__value');
const dropdownItems = [...document.querySelectorAll('.dropdown__link')];

function openMenu() {
    dropdownList.classList.toggle('dropdown__list_active')
};

function closeMenu() {
    dropdownList.classList.toggle('dropdown__list_active')
};

dropdownText.addEventListener('click', openMenu);

dropdownItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); 
        if(dropdownList.classList.contains('dropdown__list_active')) {
            dropdownText.textContent = item.textContent;
            closeMenu();
        }
    })
})

