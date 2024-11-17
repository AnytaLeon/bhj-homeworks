const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

const items = document.getElementById('items');
const storage = window.localStorage;
const loader = document.querySelector('.loader');

//добавляяю данные из localStorage из прошлого запроса, если он был
if(storage.length) {
       let i = 0;
       loader.classList.remove('loader_active');
       for(let item in storage) {
              if(i === storage.length) break;
              items.appendChild(getCurrency(item, storage[item]));
              i += 1;
       };
 } else {
       loader.classList.add('loader_active');
 }

//подписалась на событие readystatechange
xhr.addEventListener('readystatechange', () => {
       if(xhr.readyState === xhr.DONE) {
              loader.classList.remove('loader_active');
              let data = JSON.parse(xhr.response);             
              let range = data.response['Valute'];    

              //очищаю localStorage
              storage.clear();

              //очищаю валюты, которые были загружены из localStorage
              document.querySelectorAll('.item').forEach(item => item.remove());

              // заполняю загруженные данные о валютах
              for(key in range) {
                     let charCode = range[key]['CharCode'];
                     let value = range[key]['Value'];

                     items.appendChild(getCurrency(charCode, value));
                     //обновляю localStorage
                     localStorage.setItem(charCode, value);
              };
       }   
 });

//создаю карточку item с валютой
 function getCurrency(code, value) {
       let item = document.createElement('div');
       item.classList.add('item');

       let itemCode = document.createElement('div');
       itemCode.classList.add('item__code');
       itemCode.textContent = code;

       let itemValue = document.createElement('div');
       itemValue.classList.add('item__value');
       itemValue.textContent = value;

       let itemCurrency = document.createElement('div');
       itemCurrency.classList.add('item__currency');
       itemCurrency.textContent = 'руб.';

       item.appendChild(itemCode);
       item.appendChild(itemValue);
       item.appendChild(itemCurrency);

       return item;
}

