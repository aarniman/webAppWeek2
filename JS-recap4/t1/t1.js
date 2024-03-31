// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
function renderTodoList() {
  const ul = document.querySelector('ul');
  ul.innerHTML = '';

  todoList.forEach(todo => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `todo-${todo.id}`;
    input.checked = todo.completed;
    input.addEventListener('change', () => {
      todo.completed = input.checked;
      console.log(todo.completed);
    });

    const label = document.createElement('label');
    label.setAttribute('for', `todo-${todo.id}`);
    label.textContent = todo.task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      todoList.splice(todoList.indexOf(todo), 1);
      renderTodoList();
      console.log(todoList);
    });

    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(deleteButton);

    ul.appendChild(li);
  });
}

function openModal() {
  const dialog = document.querySelector('dialog');
  dialog.showModal();
  dialog.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.target.querySelector('input[type="text"]');
    const task = input.value;
    if (task !== ''){
      const newItem = {
        id: todoList.length + 1,
        task: task,
        completed: false,
      };
      todoList.push(newItem);
      renderTodoList();
      console.log(todoList);
      input.value = '';
      dialog.close();
    }
});
}

const addTodoButton = document.querySelector('.add-btn');
addTodoButton.addEventListener('click', openModal);

renderTodoList();
