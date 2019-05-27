var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar Javascript'
];

function renderTodoList() {

    listElement.innerHTML = '';

    for (todo of todos) {
        var liElement = document.createElement('li');
        var textElement = document.createTextNode(todo);

        var linkElement = document.createElement('a');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        linkElement.setAttribute('href', '#');
        var textLink = document.createTextNode('Excluir');
        linkElement.appendChild(textLink);

        liElement.appendChild(textElement);
        liElement.appendChild(linkElement);
        listElement.appendChild(liElement);
    }
}

function addTodo() {
    todos.push(inputElement.value);
    inputElement.value = '';

    renderTodoList();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodoList();
}

renderTodoList();