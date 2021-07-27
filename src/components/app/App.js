import React, {useState, useEffect} from 'react';
import './app.css';
import Header from "../header";
import Search from "../search";
import TodoList from "../todoList";
import AddTodo from "../addTodo";
import "bootswatch/dist/lux/bootstrap.min.css";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
    const [status, setStatus] = useState('all');
    const[search, setSearch]= useState('');

    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')));
    },[])

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));//создаем локальное хранилище, где todos-ключ, JSON.stringify(todos)- значение

    },[todos]);

    return (
        <div className='app'>
            <div className='app__container'>
                <Header todos={todos} setTodos={setTodos}/>
                <Search todos={todos} setTodos={setTodos} setStatus={setStatus} status={status} search={search} setSearch = {setSearch}/>
                {todos.length === 0 && status==='all' ?
                    <p>Your todos will be here</p>
                    : todos.filter((item) => {
                        return item.isActive && !item.isDeleted;
                    }).length === 0 && status==='active'
                    ? <p>Your active tasks will be here</p>
                    : todos.filter((item) => {
                        return !item.isActive && !item.isDeleted;
                    }).length === 0 && status==='done'
                    ? <p>Your done tasks will be here</p>
                    : todos.filter((item) => {
                     return item.isDeleted;
                      }).length === 0 && status==='recent'
                    ? <p>Your recent tasks will be here</p>
                    : <TodoList search={search} todos={todos} setTodos={setTodos} status={status}/>}

                <AddTodo status={status} setTodos={setTodos} todos={todos} inputText={inputText} setInputText={setInputText}/>
            </div>
        </div>
    );
};

export default App;