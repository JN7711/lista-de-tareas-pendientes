// Obtén los elementos del DOM
const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const resetButton = document.getElementById('reset');

// Función para agregar una nueva tarea
function addTask() {
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.innerHTML = `
      <div class="task-container">
        <span>${taskText}</span>
        <button class="edit">Editar</button>
        <button class="delete">Borrar</button>
      </div>
    `;
    taskList.appendChild(newTask);
    newTaskInput.value = '';
  }
}

// Función para resetear la lista de tareas
function resetList() {
  taskList.innerHTML = '';
}

// Función para editar una tarea
function editTask(event) {
  const taskContainer = event.target.parentNode;
  const taskText = taskContainer.querySelector('span');
  const newTaskText = prompt('Ingrese el nuevo texto de la tarea:');
  if (newTaskText !== null) {
    taskText.textContent = newTaskText;
  }
}

// Función para borrar una tarea
function deleteTask(event) {
  const taskContainer = event.target.parentNode.parentNode;
  taskList.removeChild(taskContainer);
}

// Agrega eventos a los botones
addTaskButton.addEventListener('click', addTask);
resetButton.addEventListener('click', resetList);

// Agrega eventos a los botones de editar y borrar
taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    editTask(event);
  } else if (event.target.classList.contains('delete')) {
    deleteTask(event);
  }
});



