import React, { useState} from 'react'
import uuid from 'react-uuid'

const Form = ({ todos, setTodos }) => {

    const [name, setName] =useState('')
    const [description, setDescription] =useState('')
    const [disableSubmit, setDisableSubmit] = useState(true)

    const nameHandler = (e) => {
        e.target.value.length >= 1 ? setDisableSubmit(false) : setDisableSubmit(true)        
        setName(e.target.value)
    }

    const descriptionHandler = (e) => {
        setDescription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setTodos([ ...todos, { name: name, description: description, complete: false, id: uuid() }])
        setName('')
        setDescription('')    
        setDisableSubmit(true)    
    }

    return (
        <form>
           <div className="mb-3">
                <input onChange={nameHandler} value={name} type="text" className="form-control" placeholder="To-Do"/>
            </div>
            <div className="mb-4">
                <textarea onChange={descriptionHandler} value={description} className="form-control" id="exampleFormControlTextarea1" rows="8" placeholder="Description"></textarea>
            </div> 
            <div className="mb-3">
                <button onClick={submitHandler} disabled={disableSubmit} type="submit" className="btn btn-secondary w-100 p-3">Add To-Do</button>
            </div>
        </form>
    )
}

export default Form

