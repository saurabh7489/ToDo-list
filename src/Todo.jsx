import React from 'react'
import './Todo.css'

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);



function Todo() {
  return (
    <div>
<h1>ToDo List</h1>
<input 
        type="text"
          name="task"
          value={task} 
placeholder='ToDo list'  
 onChange={(e)=>setTask(e.target.value)}
 />
<button class="addBtn" onClick={()=>setTodos([...todos,task])}>Add</button>
 <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <span>{todo}</span>

            <div className="actions">
              <button >
                Edit
              </button>

              <button >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


  
    
}


export default Todo