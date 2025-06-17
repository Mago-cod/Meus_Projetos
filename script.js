
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const themeToggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('sideMenu');
const closeMenu = document.getElementById('close-menu')

loadTasks();

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask(text = null, completed = false) {
    const taskText = text || taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    if (completed) li.classList.add('completed');

    // ✅ Botão de deletar dentro da função
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.style.marginLeft = '10px';

    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita marcar como concluída ao clicar no botão
        li.remove();
        saveTasks();
    });

    // ✅ Clique para marcar como concluída
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    if (!text) taskInput.value = '';

    saveTasks();
}

function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.firstChild.textContent.trim(),
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem('tasks');
    if (!saved) return;

    JSON.parse(saved).forEach(task => {
        addTask(task.text, task.completed);
    });
}

//tema claro/escuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '🌞' : '🌙'

});

menuToggle.addEventListener('click', () => {
    sideMenu.classList.add('open');

});

closeMenu.addEventListener('click', () => {
    sideMenu.classList.remove('open');

});

