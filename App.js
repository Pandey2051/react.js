// import React from 'react';
// function App(){
//   return(
//     <div>
//     <h1>Hello React</h1>
//     </div>
//   );
// }
//export default App; //Export just exported to index.js and index.html
//it is called JSX
// import React,{useState}from 'react';
// import Tweet from './Tweet';
// function App(){

//   return(
//     <div className ="app">
//     <Tweet Name = "Pandey" message ="I am the son of GiriRaj Pandey"/>
//     <Tweet Name = "Thaneshwor" message = " I am the son of Yuba Devi Pandey"/>
//     </div>
//   );
  // Adding tweet multiple times add tweet content more than 1 times
  //in javascript we did: document.querySelector('.hello')
  //hello.addEventlistner
// }
// export default App;
//Above is the example of using props in react


// function App(){
//   const[isRed,setRed] = useState(false);
//   const[count,setCount] = useState(0);
//   const increment = ()=>{
//     setCount(count+1);
//     setRed(!isRed);
//   }


//   return(
//     <div className ="app">
//       <h1 className = {isRed ? "red" : ""}>Change my Color!</h1>
//       <button onClick = {increment}>Increment</button>
//       <h1>{count}</h1>

//     </div>
//   );
  // Adding tweet multiple times add tweet content more than 1 times
  //in javascript we did: document.querySelector('.hello')
  //hello.addEventlistner
  //Above is the example how we can use State in React

//}
// function App(){
//   const[users,setUsers] = useState([
//     {Name:'Thaneshwor',message:"I want to go home"},
//     {Name:'Pandey',message:'i want to go to nepal'},
//     {Name:'Pandu',message:'I do not want to stay here'}
//   ]);
  


//   return(
//     <div className ="app">
//       {users.map(user =>(
//         <Tweet Name = {user.Name} message = {user.message}/>
//       ))}

//     </div>
//   );
//       }
// export default App;
import React,{useState,useEffect} from 'react';
import './App.css';
//importing form from reacthw1
import Form from './reacthw1/form';
import todo from './reacthw1/todo';
import Todolist from './reacthw1/Todolist';



function App(){
  const[textInput,settextInput]= useState("");
  const[todos,setTodos] = useState([]);
  const [status,setStatus]=useState('all');
  const[filteredTodos,setFilteredTodos] = useState([]);
  //fucntions 
  useEffect(()=>{
    filterHandler();
  },[todos,status]);
  const filterHandler =()=>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todos=>todo.completed ===true));
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todos=>todo.completed ===false));
          break;
          default:
            setFilteredTodos(todos);

    }

  }
  return(
    <div className = 'App'>
      <header>
        <h1>My To do List {textInput}</h1>
        </header>
        <Form textInput = {textInput} 
        todos ={todos} 
        setTodos={setTodos}
        settextInput ={settextInput}
        setStatus = {setStatus}
       
        />
        <Todolist setTodos = {setTodos} 
        todos ={todos}
        filteredTodos = {filteredTodos}/>
    </div>
  )
}
export default App;

