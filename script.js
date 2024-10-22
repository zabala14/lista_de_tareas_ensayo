document.getElementById('task-form').addEventListener('submit', 
function(e)  {
    e.preventDefault();
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Crear tarea
    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;

    // Botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    // Marcar como completada
    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    // Limpiar campo de texto
    taskInput.value = '';
});
