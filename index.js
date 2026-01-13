let todos = ['Laundry', 'Dishes', 'Clean Desk', 'Sweep Floor'];

function markAsDone(todos) {
    const updated = [];
    todos.forEach(todo => {
        updated.push('done - ' + todo);
    });
    return updated;
}

document.getElementById('result').innerHTML = markAsDone(todos).join('<br>');


//should create a function named markAsDone that takes an array of todos and returns a new array containing the modified todo items
//should loop through the todos, using forEach, and prepend the string 'done - ' to each todo description