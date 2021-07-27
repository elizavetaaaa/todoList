import React from 'react';
import './search.css'
import {VscTrash} from "react-icons/vsc";


const Search = ({todos, setTodos, setStatus, status, setSearch}) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)


    }

    const searchHandler = (e) => {
        setSearch(e.target.value);
    }




    return (
        <div className='search'>
            <input type="text" placeholder='search todo' className='search__input' onChange={searchHandler
            }/>
            <div className="search__btns">
                <button type="button" className="search__btn btn btn-info" value="all" onClick={statusHandler}>All
                </button>
                <button type="button" className="search__btn btn btn-warning" value="active"
                        onClick={statusHandler}>Active
                </button>
                <button type="button" className="search__btn btn btn-dark" value="done" onClick={statusHandler}>Done
                </button>
                <button className="search__btn trash__btn btn " value="recent" type={"button"} onClick={statusHandler}><VscTrash/></button>
            </div>

        </div>
    );
};

export default Search;