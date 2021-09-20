import React from 'react';


//creating form components using const and also using function
//like the fucntion we created using function App()
const Form =({settextInput,todos,setTodos,textInput,setStatus})=>{
    //some javascript code
    const inputTextHandler = (e)=>{
        console.log(e.target.value);
        settextInput(e.target.value);
    };
    const submitTodoHandler = (e)=>{
        e.preventDefault();
        setTodos([
            ...todos,{text:textInput,completed:false,id:Math.random()*100}
        ]);
        settextInput("");

    }
    const statusHandler = (e)=>{
        console.log(e.target.value);

    }
    return(
        <form>
            <input value ={textInput} onChange ={inputTextHandler} type = 'text' className='todo-input'/>
            <button onClick ={submitTodoHandler} className ='todo-button' type='submit'>
                <i className ='fas fa-plus-square'></i>
            </button>
            <div className = 'select'>
                <select onClick = {statusHandler} name ='todos' className ='filter-todo'>
                    <option value = 'all'> All</option>
                    <option value = 'completed'>Completed</option>
                    <option value ='uncompleted'> Uncompleted</option>

                </select>

            </div>
        </form>

    );
};
export default Form;