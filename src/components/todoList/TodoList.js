import React from 'react';
import './todoList.css'
import Todo from "../todo";


const TodoList = ({todos, setTodos, status, search}) => {
    return (
        <ul className="todoList">
            {todos.filter((item)=>{
                switch(status){
                    case 'active':{
                        return item.isActive && !item.isDeleted;
                    }
                    case 'done':{
                        return !item.isActive  && !item.isDeleted;
                    }
                    case 'recent':{
                        return item.isDeleted;
                    }
                    default:
                        return item  && !item.isDeleted;
                }
            }).filter((item)=>{
                return item.todoName.includes(search);
            })
                .map((item) => {
                return <Todo  todoObject = {item} setTodos={setTodos} todos={todos}  key={item.id}  status={status}/>
            })}
        </ul>
    );
};

export default TodoList;