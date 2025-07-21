const inputTask = document.getElementById('input-task');
const btnAdd = document.querySelector('.btn-add');
const list = document.getElementById('list');

function addTask() {
    let taskText = inputTask.value.trim();

    if (taskText !== "") {
        let newTask = `<li class="task">
                            <input type="checkbox" class="checkbox-task">
                            <span class="task-name">${taskText}</span>
                            <button class="btn-delete">
                                <img src="/assets/conteudo/trash.png" alt="trash">
                            </button>
                        </li>`;

        list.innerHTML += newTask;
        inputTask.value = "";
        inputTask.focus();
    }
}

btnAdd.addEventListener('click', addTask);

inputTask.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

list.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const taskItem = clickedElement.closest('.task');

    if (!taskItem) return;

    if (clickedElement.closest('.btn-delete')) {
        taskItem.remove();
    } 
    else if (clickedElement.matches('.checkbox-task')) {
        taskItem.classList.toggle('completed');
    }
});