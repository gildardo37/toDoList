import React, {useState} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';


function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const[edit, setEdit] = useState({
        id: null,
        value: ''
    })

    

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    if(todos.length === 0){
        return <div className="empty">
                    <h5>No has agregado tareas</h5>
                </div>;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} 
            key={index} >
                <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <div className="box" onClick={ () => setEdit({id: todo.id, value: todo.text})}>    
                        <TiEdit
                            className="edit-icon"
                            />
                    </div>
                    <div className="box" onClick={ () => removeTodo(todo.id)}>
                        <RiCloseCircleLine 
                            className="delete-icon"
                        />
                    </div>
                </div>
        </div>
    ))
    
}

export default Todo
