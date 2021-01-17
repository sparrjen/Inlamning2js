import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, complete: !item.complete
                }
            }

            return item
        }))
    }

    const deleteHandler = () => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }

    return (
        <div className='border mb-2 p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className={`${ todo.complete ? 'text-grey' : 'text-dark' }`}>
                    <div className="name">{todo.name}</div>
                    <div className="description">{todo.description}</div>
                </div>            
                <div>
                <i onClick={completeHandler} className={ `fas fa-circle cursor-pointer ${ todo.complete ? 'complete' : 'incomplete' }` }></i>
                    <i onClick={deleteHandler} className="fas fa-trash cursor-pointer"></i>
                </div> 
            </div>                     
        </div>
    )
}
 
export default Todo
