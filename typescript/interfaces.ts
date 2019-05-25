interface Todo {
    title: string;
    text: string;
}

function showTodo(todo: Todo) {
    console.log(todo.title + ' ' + todo.text);
}

let myTodo = showTodo({ title: 'my todo', text: 'Take out the dog' })
console.log(myTodo)

// Dynamic keys
interface Anything {
    [key: string]: any;
} 
