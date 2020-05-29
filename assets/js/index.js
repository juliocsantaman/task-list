//Variables.
const btnAdd = document.getElementById('btn-add');
const taskList = document.getElementById('task-list');
let task = document.getElementById('add');
let iconsX;

//Add a task.
function addTask() {
  let li = document.createElement('li');
  
  if(blanks(task.value)) {
    alert("Error message: Can't add a blank task.");
    return;
  }

  li.innerHTML = `${task.value} <span class="deleting-icon">X</span>`;
  taskList.appendChild(li);

  task.value = '';
  task.focus();

  iconsX = document.querySelectorAll('span');

  iconsX.forEach(iconX => {
    iconX.addEventListener('click', deleteTask);
  });

}

//Delete a task.
function deleteTask() {
  this.parentNode.remove();
}

//Blanks.
function blanks(value) {
  if(value == '' || value.trim() == '') return true
}

btnAdd.addEventListener('click', addTask);

task.addEventListener('keypress', function(e) {
  if(e.key == "Enter") addTask();
});





