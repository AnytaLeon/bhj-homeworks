// решение с помощью функций
// const dropdownList = document.querySelector('.dropdown__list')
// const dropdownText = document.querySelector('.dropdown__value');
// const dropdownItems = [...document.querySelectorAll('.dropdown__link')];

// function openMenu() {
//     dropdownList.classList.toggle('dropdown__list_active')
// };

// function closeMenu() {
//     dropdownList.classList.toggle('dropdown__list_active')
// };

// dropdownText.addEventListener('click', openMenu);

// dropdownItems.forEach((item) => {
//     item.addEventListener('click', (event) => {
//         event.preventDefault(); 
//         if(dropdownList.classList.contains('dropdown__list_active')) {
//             dropdownText.textContent = item.textContent;
//             closeMenu();
//         }
//     })
// })

//Решение с помощью создания класса
class Dropdown {
    constructor(container) {
        this.container = container;
        this.valueElement = container.querySelector('.dropdown__value');
        this.dropdownList = container.querySelector('.dropdown__list');
        this.dropdownLinks = container.querySelectorAll('.dropdown__link');
        
        this.registerEvents();
    }

    registerEvents() {
        this.valueElement.addEventListener('click', () => this.toggleList());
        [...this.dropdownLinks].forEach(
          link => link.addEventListener( 'click', e => {
            this.onSelect(link);
            e.preventDefault();
        })
      );
    }

    onSelect(item) {
        this.valueElement.textContent = item.textContent;
        this.toggleList();
    }
  
    toggleList() {
        if (this.dropdownList.classList.contains('dropdown__list_active')) {
          this.dropdownList.className = 'dropdown__list';
        }
        else {
          this.dropdownList.className = 'dropdown__list dropdown__list_active';
        }
    }
};

new Dropdown(document.querySelector('.dropdown'));