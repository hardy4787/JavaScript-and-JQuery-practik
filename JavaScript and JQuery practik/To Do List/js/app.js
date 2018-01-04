function createElement(tag, props, ...children) {
	const element = document.createElement(tag);
	Object.keys(props).forEach(key => element[key] = props[key]);

	if(children.length > 0) {
		children.forEach(child => {
			if (typeof child === 'string') {
				child = document.createTextNode(child);
			}
			element.appendChild(child);
		});
	}
	return element;
}
function createTodoItem(title) {
	const checkbox = createElement('input', {type: 'checkbox', className: 'checkbox'});

	const label = createElement('label', {className: 'title'}, title);

	const editInput = createElement('input', {className: 'textfield', type: 'text'});

	const editButton = createElement('button', {className: 'edit'}, 'Изменить');

	const deleteButton = createElement('button', {className: 'delete'}, 'Удалить');

	const listItem = createElement('li', {className: 'todo-item'}, checkbox, label, editInput, editButton, deleteButton);


	bindEvent(listItem);
	return listItem;
}

function bindEvent(todoItem) {
	const checkbox = todoItem.querySelector('.checkbox');
	const editButton = todoItem.querySelector('button.edit');
	const deleteButton = todoItem.querySelector('button.delete');

	checkbox.addEventListener('change', toggleTodoItem);
	editButton.addEventListener('click', editTodoItem);
	deleteButton.addEventListener('click', deleteTodoItem);
}

function addTodoItem(event) {
	event.preventDefault(); // Отмена запроса отправки на сервер

	if(addInput.value === '') return alert("Необходимо ввести название задачи.");

	const listItem = createTodoItem(addInput.value);
	todoList.appendChild(listItem);
	addInput.value = '';
}

function toggleTodoItem() {
	const listItem = this.parentNode;
	listItem.classList.toggle('completed');
}

function editTodoItem(){
	const listItem = this.parentNode;
	const title = listItem.querySelector('.title');
	const editInput = listItem.querySelector('.textfield');
	const isEditing = listItem.classList.contains('editing');

	if(isEditing) {
		title.innerText = editInput.value;
		this.innerText = 'Изменить';
	} else {
		editInput.value = title.innerText;
		this.innerText = 'Сохранить';
	}

	listItem.classList.toggle('editing');
}
function deleteTodoItem(){
	const listItem = this.parentNode;
	todoList.removeChild(listItem);
}
const todoForm = document.getElementById('todo-form');
const addInput = document.getElementById('add-input');
const todoList = document.getElementById('todo-list');
const todoItems = document.querySelectorAll('.todo-item');

todoForm.addEventListener('submit', addTodoItem); // при отправке формы происходит вызов функции addTodoItem

function main() {
	todoForm.addEventListener('submit', addTodoItem);
	todoItems.forEach(item => bindEvent(item));
}
main();