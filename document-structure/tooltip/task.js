let tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
let links = [...document.querySelectorAll('.has-tooltip')];

links.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();

        if(item.nextElementSibling && item.nextElementSibling.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
            return;
        };      

        let coords = item.getBoundingClientRect();
        tooltip.style.left = coords.left + "px";  
        
        tooltip.textContent = item.getAttribute('title');
        tooltip.classList.add('tooltip_active');
        item.insertAdjacentElement("afterend", tooltip);          
    })
})
