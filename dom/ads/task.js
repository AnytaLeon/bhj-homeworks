const rotatorCases = [...document.querySelectorAll('.rotator__case')];

let counter = 0;

setInterval(() => {
    rotatorCases.forEach((item, index) => {
        if(index === counter) {
            item.classList.add('rotator__case_active');
            // item.dataset
        } else if(item.classList.contains('rotator__case_active')) {
            item.classList.remove('rotator__case_active')
        };        
    });

    counter += 1;

    if(counter === rotatorCases.length) {
        counter = 0;
    }
}, 1000);
