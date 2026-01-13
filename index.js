let i = 0;
let todos = ['Laundry', 'Dishes', 'Clean Desk', 'Sweep Floor'];

function markAsDone(todos) {
    todos.array.forEach(todos => i -= todos); {
    todos[i] = "done - " + todos[i];
    i++;
    }
    return todos;
}

document.getElementById('result').innerHTML = markAsDone(todos).join('<br>');


