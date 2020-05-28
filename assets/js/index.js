//Variables.
const btnAdd = document.getElementById('btn-add');
const taskList = document.getElementById('task-list');
let iconsX;

//Add a task.
function addTask() {
  let li = document.createElement('li');
  let task = document.getElementById('add');

  if(task.value == '') {
    alert('Error: No puedes tener una tarea en blanco');
    return;
  }

  li.innerHTML = `${task.value} <span class="deleting-icon">X</span>`;
  taskList.appendChild(li);

  task.value = '';

  iconsX = document.querySelectorAll('span');

  iconsX.forEach(iconX => {
    iconX.addEventListener('click', deleteTask);
  });

}

//Delete a task.
function deleteTask() {
  this.parentNode.remove();
}

btnAdd.addEventListener('click', addTask);





