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

  //Edit the task if user does double click.
  li.addEventListener('dblclick', (ev) => {
    
    //Create a textarea.
    let textarea = document.createElement('textarea');
    //Replace current node with textarea.
    li.replaceWith(textarea);
    textarea.focus();

    //If textarea lose focus so adding new task or leaving current task.
    textarea.addEventListener('blur', (ev) => {

      if(textarea.value != '') {
        li.innerHTML = `${textarea.value} <span class="deleting-icon">X</span>`;
        textarea.replaceWith(li);
        iconsX = document.querySelectorAll('.deleting-icon');
        getIconsX();
        
      } else {
        
        textarea.replaceWith(li);
      }
      
    });
  });
 
  getIconsX();
  

}

//Delete a task.
function deleteTask() {
  this.parentNode.remove();
}

//Blanks.
function blanks(value) {
  if(value == '' || value.trim() == '') return true
}

//Get all iconsX.
function getIconsX() {
  iconsX = document.querySelectorAll('.deleting-icon');

  iconsX.forEach(iconX => {
    iconX.addEventListener('click', deleteTask);
  });
}

btnAdd.addEventListener('click', addTask);

task.addEventListener('keypress', function(e) {
  if(e.key == "Enter") addTask();
});






