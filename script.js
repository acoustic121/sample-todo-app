// JavaScript for the To-Do List App

const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task-input');
const taskList = document.getElementById('task-list');

// Event listener for adding a new task
addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        newTaskInput.value = '';
    }
});

// Function to add a new task to the task list
function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
}