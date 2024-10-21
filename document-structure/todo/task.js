const taskInput = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');


taskInput.addEventListener('keydown', function(event) {
  if (taskInput.value && event.key === 'Enter') {
    event.preventDefault();

    //создаю шаблон задачи
      let task = document.createElement('div');
      task.classList.add('task');
      let taskTitle = document.createElement('div');
      taskTitle.classList.add('task__title');
      task.insertAdjacentElement('beforeEnd', taskTitle);
      task.insertAdjacentHTML("beforeend", '<a href="#" class="task__remove">&times;</a>');        
      
    //добавляю название задачи из input
      taskTitle.textContent = taskInput.value;

    //добавляю в разметку эл-т с задачей
      taskList.insertAdjacentElement('beforeEnd', task);

    //добавляю обработчик для кнопки удаления задачи 
      task.lastChild.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentElement.remove();
      });

    //очищаю input 
      taskInput.value = '';
  }
});