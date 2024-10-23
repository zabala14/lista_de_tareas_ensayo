document.getElementById('task-form').addEventListener('submit', 
    function(e)  {
        e.preventDefault();
        const taskInput = document.getElementById('new-task');
        const taskDateInput = document.getElementById('task-date'); // Campo de fecha
        const taskList = document.getElementById('task-list');
    
        // Crear tarea
        const taskItem = document.createElement('li');
        taskItem.textContent = taskInput.value;
    
        // Verificar si se ha ingresado una fecha y agregarla a la tarea
        if (taskDateInput.value) {
            taskItem.textContent += ` - Fecha: ${taskDateInput.value}`;
        }
    
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
    
        // Limpiar campos de texto
        taskInput.value = '';
        taskDateInput.value = ''; // Limpiar campo de fecha
    });
    
    // Agregar funcionalidad para el botón de fechas
    document.getElementById('date-button').addEventListener('click', function() {
        const selectedTask = document.querySelector('#task-list li.selected');
        const taskDateInput = document.getElementById('task-date');
        if (selectedTask && taskDateInput.value) {
            selectedTask.textContent += ` - Fecha: ${taskDateInput.value}`;
            taskDateInput.value = ''; // Limpiar campo de fecha
        } else {
            alert('Selecciona una tarea y una fecha para añadir.');
        }
    });
    
    // Agregar selección a las tareas
    document.getElementById('task-list').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            const tasks = document.querySelectorAll('#task-list li');
            tasks.forEach(task => task.classList.remove('selected'));
            e.target.classList.add('selected');
        }
    });
    