const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
function addTaskToList( title, description) {
const taskCard = document.createElement('div');
taskCard.classList.add('task-card');
taskCard.innerHTML =`                                  
<p>${title}</p>
<span>${description}</span>
<button class="remove-btn">X</button>`;

const removeButton = taskCard.querySelector('.remove-btn');
removeButton.addEventListener('click', function() {
taskCard.remove(); 
});

taskList.appendChild(taskCard);
}
taskForm.addEventListener('submit',function(event) {
event.preventDefault(); 
const taskName = document.getElementById('taskName').value;
const taskDescription = document.getElementById('taskDescription').value;
addTaskToList( taskName, taskDescription);
});




