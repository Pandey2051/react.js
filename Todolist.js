import React from 'react';
//importing todo.js into it
import todo from "./todo"


const Todolist = ({todos,setTodos,filteredTodos})=>{
    return(
        <div className ='todo-container'>
            <ul className = 'todo-list'>
                {filteredtTodos.map((todo)=>(
                    <todo 
                    key = {todo.id} 
                    text={todo.text}
                    setTodos = {setTodos}
                    todos = {todos}
                    todo = {todo}/>
                ))};
            </ul>
        </div>
    );
};
export default Todolist;