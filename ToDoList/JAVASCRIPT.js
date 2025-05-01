const taskForm = document.getElementById('taskForm');
const taskList = document.getElementById('taskList');
function addTaskToList(date, title, description) {
const taskCard = document.createElement('div');
taskCard.classList.add('task-card');
taskCard.innerHTML =`                                  
<h3>${date}</h3>
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
const taskDate = document.getElementById('taskDate').value;
const taskName = document.getElementById('taskName').value;
const taskDescription = document.getElementById('taskDescription').value;
addTaskToList(taskDate, taskName, taskDescription);
});










       