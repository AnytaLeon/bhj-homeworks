const quantityControl = [...document.querySelectorAll('.product__quantity-control')];
const quantityValue = [...document.querySelectorAll('.product__quantity-value')];
const addBtns = [...document.querySelectorAll('.product__add')];
const products = [...document.querySelectorAll('.product')];
const cartProducts = document.querySelector('.cart__products');
const imgs = [...document.querySelectorAll('.product__image')];


//для каждого div с классом product__quantity-control навешиваю обработчки события click (прибавляем, уменьшаем кол-во)
quantityControl.forEach((item) => {
    item.addEventListener('click', () => {       
        if(item.classList.contains('product__quantity-control_dec') && parseInt(item.nextElementSibling.textContent) > 1) {
            item.nextElementSibling.textContent = Number(item.nextElementSibling.textContent.trim()) - 1;
        } else if (item.classList.contains('product__quantity-control_inc')) {
            item.previousElementSibling.textContent = Number(item.previousElementSibling.textContent.trim()) + 1;
        }
    })
});

//для каждой кнопки "добавить в корзину" добавляю обработчик события click
addBtns.forEach((item, index) => {
    item.addEventListener('click', () => {

    // проверка, нет ли уже карточки с данным data-id
    if(document.querySelector(`.cart__product[data-id = "${index + 1}"]`)) {
        let productInCartQuantity = document.querySelector(`.cart__product[data-id = "${index + 1}"]`).querySelector('.cart__product-count');
        productInCartQuantity.textContent = parseInt(productInCartQuantity.textContent) + parseInt(quantityValue[index].textContent);
    } else {
    //если нет, то добавляю карточку в корзину
        addtoCart(index);
        
    }
    
    quantityValue[index].textContent = 1;

    })
});

//функция создания карточки в корзине
function addtoCart(index) {
    let cart = document.createElement('div');
    cart.classList.add('cart__product');
    cart.dataset.id = products[index].dataset.id;

    let img = imgs[index].cloneNode(true);    
    img.classList.add('cart__product-image');
    img.classList.remove('product__image');

    const cartProductCount = document.createElement('div');
    cartProductCount.classList.add('cart__product-count');
    cartProductCount.textContent = quantityValue[index].textContent;

    cart.appendChild(img);
    cart.appendChild(cartProductCount);  

    cartProducts.insertAdjacentElement('beforeend', cart);
    cart.insertAdjacentHTML('beforeend', '<a href="#" class="cart_remove">&times;</a>');
    cart.lastChild.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
      });
};


