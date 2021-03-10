import React, {useState} from 'react';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() *10000),
            text: input
        });

        setInput('');
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                <input
                    placeholder='Editar'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input edit'
                />
                <button onClick={handleSubmit} className='todo-button edit'>
                    Editar
                </button>
                </>
            ) : (
                <>
                <input
                    placeholder='Agrega una tarea'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input'
                />
                <button onClick={handleSubmit} className='todo-button'>
                    Agregar
                </button>
                </>
            )}
        </form>
    )
}

export default TodoForm
