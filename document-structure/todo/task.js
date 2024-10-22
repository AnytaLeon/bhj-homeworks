const taskInput = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');
const addBtn = document.querySelector('.tasks__add');


addBtn.addEventListener('click', function(event) {

  event.preventDefault();

  let text = taskInput.value.trim();

  //Если в поле ввода есть текст, добавляю задачу в список
  if(text) {
    taskCreate(text);

    //очищаю input 
    taskInput.value = '';
  };
});

//функция создания задачи и добавления в список
function taskCreate(text){
  //создаю шаблон задачи
  let task = document.createElement('div');
  task.classList.add('task');
  let taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  task.insertAdjacentElement('beforeEnd', taskTitle);
  task.insertAdjacentHTML("beforeend", '<a href="#" class="task__remove">&times;</a>');        
  taskTitle.textContent = text;

  //добавляю в разметку эл-т с задачей
  taskList.insertAdjacentElement('beforeEnd', task);

  //добавляю обработчик для кнопки удаления задачи 
  task.lastChild.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.parentElement.remove();
  });
}