import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, setTodos }) => {

    if(todos.length === 0) {
        return (
            <div id="todo-list" className="mb-5 text-center">
                No To-dos found. Please add a To-Do.          
            </div>
        )
    }

    return (
        <div id="todo-list" className="mb-5">
            {
                todos.map(todo => (
                    <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />

                ))                  
                
            }            
        </div>
    )
}

export default TodoList
