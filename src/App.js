import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  

  const [inputText,setInputText]=useState("");
  const [todos, setTodos]=useState([]);
  const [status, setStatus]= useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  const filterHandler=()=>{
      console.log("filter");
    switch (status) {
      case `completed`:
          setFilteredTodos(todos.filter(todo=>todo.completed === true));
        break;
      case `uncompleted`:
          setFilteredTodos(todos.filter(todo=>todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    };
  };
  useEffect(()=>{
    // filterHandler();
    console.log("useEffect");
    switch (status) {
      case `completed`:
          setFilteredTodos(todos.filter(todo=>todo.completed === true));
        break;
      case `uncompleted`:
          setFilteredTodos(todos.filter(todo=>todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;}
    
  },[todos,status]);

  return (
    <div className="App">
      <header>
        <h1>Thuy's Todo List </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}
        setStatus={(status)=>{setStatus(status)}} />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
