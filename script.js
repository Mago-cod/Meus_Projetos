
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // ✅ Botão de deletar dentro da função
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.style.marginLeft = '10px';

    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita marcar como concluída ao clicar no botão
        taskList.removeChild(li);
    });

    // ✅ Clique para marcar como concluída
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}

