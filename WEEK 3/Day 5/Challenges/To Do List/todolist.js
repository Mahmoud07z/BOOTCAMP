const tasks = [];
let taskIdCounter = 0;

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const listTasks = document.querySelector('.listTasks');

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
});

function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;

    const task = {
        task_id: taskIdCounter++,
        text: text,
        done: false
    };

    tasks.push(task);
    renderTask(task);
    taskInput.value = '';
}

function renderTask(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task-item';
    taskDiv.setAttribute('data-task-id', task.task_id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => doneTask(task.task_id, checkbox, label));

    const label = document.createElement('span');
    label.className = 'text';
    label.textContent = task.text;

    const deleteBtn = document.createElement('i');
    deleteBtn.className = 'fas fa-times delete';
    deleteBtn.addEventListener('click', () => deleteTask(task.task_id, taskDiv));

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(deleteBtn);

    listTasks.appendChild(taskDiv);

    const clearAllBtn = document.getElementById('clearAllBtn');

}

function doneTask(id, checkbox, label) {
    const task = tasks.find(t => t.task_id === id);
    if (task) {
        task.done = checkbox.checked;
        label.classList.toggle('done', task.done);
    }
}

function deleteTask(id, taskElement) {
    const index = tasks.findIndex(t => t.task_id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        taskElement.remove();
    }
}
const clearAllBtn = document.getElementById('clearAllBtn');

clearAllBtn.addEventListener('click', () => {
    tasks.length = 0; // clear the array
    listTasks.innerHTML = ''; // clear all tasks from DOM
    taskIdCounter = 0; // reset the ID counter
});

