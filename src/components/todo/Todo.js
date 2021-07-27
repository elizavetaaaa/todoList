import React from 'react';
import './todo.css'
import { MdClear } from "react-icons/md";
import {VscCheck, VscPinned, VscSaveAs, VscTrash} from "react-icons/vsc";

const Todo = ({todoObject, setTodos, todos,status}) => {

    const deleteTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObject.id ? {...item,  isDeleted : !item.isDeleted } : item;

        }))

    };
    const doneTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObject.id ? {...item, isActive: !item.isActive} : item;
        }))
    }
    const importantTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObject.id ? {...item, isImportant: !item.isImportant} : item;
        }))

    }
    const changeTodo = () => {
        setTodos(todos.map((item) => {
            return item.id === todoObject.id ? {...item, isChange: !item.isChange} : item;
        }))

    };

    const restoreTodo=()=>{
        setTodos(todos.map((item) => {
            return item.id === todoObject.id ? {...item,  isDeleted : !item.isDeleted } : item;

        }))

    };

    const completeDeleteTodo=()=>{
        setTodos(todos.filter((item) => {
            return item.id !== todoObject.id ;

        }))

    }



    const textAreaHandler = (e) => {
        return todoObject.todoName = e.target.value;
    }


    return (
        <li className="todoList__task">
            {!todoObject.isChange
                ?
                <p className={`todoList__name ${todoObject.isActive ? '' : 'active'} ${todoObject.isImportant ? 'important' : ''}`}>{todoObject.todoName}</p>
                : <input className="todo__input" type="text" defaultValue={todoObject.todoName}
                         onChange={textAreaHandler}/>}

            {status==='recent'
            ? <div className="todoList__btns">
                    <button type="button" className={`todoList__btn btn btn-outline-danger `} onClick={completeDeleteTodo}>
                        <MdClear/> </button>
                    <button type="button" className='todoList__btn_restore' onClick={restoreTodo}>restore </button>
                </div>
            : <div className="todoList__btns">

                    <button type="button"
                            className={`todoList__btn btn btn-outline-info ${todoObject.isChange ? 'active' : ''}`}
                            onClick={changeTodo}><VscSaveAs/></button>

                    <button type="button"
                            className={`todoList__btn btn btn-outline-success  ${todoObject.isActive ? '' : 'active'}`}
                            onClick={doneTodo}><VscCheck/></button>
                    <button type="button"
                            className={`todoList__btn btn btn-outline-warning  ${todoObject.isImportant ? 'active' : ''}`}
                            onClick={importantTodo}><VscPinned/></button>


                    <button type="button" className={`todoList__btn btn btn-outline-danger `} onClick={deleteTodo}>
                        <MdClear/> </button>
                </div>}

        </li>
    );
};

export default Todo;