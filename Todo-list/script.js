// script.js

// Function to add a new task to the backlog list
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const newTask = createTaskElement(taskText);
        document.getElementById('backlog-list').appendChild(newTask);
        taskInput.value = ""; // Clear the input field
    }
}

// Function to create a task element with navigation buttons
function createTaskElement(taskText) {
    const task = document.createElement('li');
    task.textContent = taskText;
    
    const taskButtons = document.createElement('div');
    taskButtons.className = 'task-buttons';
    
    const leftButton = document.createElement('button');
    leftButton.textContent = '←';
    leftButton.disabled = true;
    leftButton.onclick = function() { moveTask(task, -1); };
    
    const rightButton = document.createElement('button');
    rightButton.textContent = '→';
    rightButton.onclick = function() { moveTask(task, 1); };
    
    taskButtons.appendChild(leftButton);
    taskButtons.appendChild(rightButton);
    
    task.appendChild(taskButtons);
    
    return task;
}

// Function to move a task between stages
function moveTask(task, direction) {
    const stages = ['backlog-list', 'todo-list', 'ongoing-list', 'done-list'];
    const currentStage = task.parentElement.id;
    let currentIndex = stages.indexOf(currentStage);
    const nextIndex = currentIndex + direction;
    
    if (nextIndex >= 0 && nextIndex < stages.length) {
        document.getElementById(stages[nextIndex]).appendChild(task);
        updateTaskButtons(task, nextIndex);
    }
}

// Function to update the button states based on the task's position
function updateTaskButtons(task, index) {
    const taskButtons = task.querySelector('.task-buttons');
    const leftButton = taskButtons.children[0];
    const rightButton = taskButtons.children[1];
    
    leftButton.disabled = (index === 0);
    rightButton.disabled = (index === stages.length - 1);
}
