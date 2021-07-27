import React from 'react';
import './header.css'

const Header = ({todos, setTodos}) => {
    const doneTodo = todos.filter((item)=> {
             return !item.isActive
        }).length;

    const moreTodo = todos.filter((item)=> {
             return item.isActive
        }).length;

    return (
        <div className='header'>
            <h1 className='header__title'>Todo list</h1>
            {todos.length === 0 ?
                <p className='header__count'>Number our todos </p>
                : <p className='header__count'>{doneTodo} done tasks, {moreTodo} remaining</p>
            }

        </div>
    );
};

export default Header;