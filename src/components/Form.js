import React from "react";


const Form= ({ setInputText,todos, setTodos,inputText, setStatus }) => {
    const inputTestHandler= (e) =>{
       
        setInputText(e.target.value);
        

    };
    const submitTodoHanler=(e)=>{
        e.preventDefault();
        setTodos([...todos,{text:inputText,completed:false, id: Math.random()*1000}]);
        setInputText("");
    };
    const statusHandle =(e)=>{
        setStatus(e.target.value)
    };
    return(
        <form>
            <input value={inputText} onChange={inputTestHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHanler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div  className="select">
                <select onChange={statusHandle} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>

            </div>
        </form>
    );
}
export default Form;