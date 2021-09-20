import React from 'react';

const todo =(text,todo,todos,setTodos)=>{
    //adding some events
    const deletehandler = ()=>{
        setTodos(todos.filter(el=>el.id!==todos.id))
    };
    const completeHandler = ()=>{
        setTodos(todos.map(item =>{
            if(item.id===todo.id){
                return{
                    ...item,completed:!item.completed,
                }

            }
            return item;

        }))

    }

    return(
        <div className = 'todo'>
            <li classname = {`todo-item ${todo.completed ? "cpmpleted" :''}`}></li>
            <button onClick = {completeHandler} className = "complete-btn">
                <i>className = "fas fa-check"</i></button>
            <button onClick = {deletehandler}className = "trash-btn">
                <i>className = "fas fa-trash"</i></button>
        </div>
    );
}
export default todo;