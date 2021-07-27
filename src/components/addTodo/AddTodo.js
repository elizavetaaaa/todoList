import React from 'react';
import './addTodo.css'

const AddTodo = ({setTodos, todos, inputText, setInputText, status}) => {

    const addTodo = (e) => {
        e.preventDefault()
        setTodos([...todos, {
            todoName: inputText,
            isActive: true,
            isImportant: false,
            isChange: false,
            isDeleted: false,
            id: Math.floor(Math.random() * 1000),
        }]);
        setInputText('');
    }

    const inputHandler =(e)=>{
        setInputText(e.target.value);
    }


    return (
        <form action="" className="addTodo" onSubmit={addTodo}>
            {status==='done' ||  status==='recent' ?
               <input type="text" className="addTodo__input" disabled={true} value={inputText} placeholder={'disabled'}/>
            : <input required className="addTodo__input" type="text" placeholder="add your todo here" onChange={inputHandler} value={inputText}/>}

            <button className="addTodo__btn btn btn-success" type="submit">Add todo</button>
        </form>
    );
};

export default AddTodo;