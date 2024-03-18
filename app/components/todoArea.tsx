'use client'
import axios from "axios";
import { useEffect, useState } from "react"
import { MdDeleteSweep } from "react-icons/md";

interface Todo {
  _id: string;
  TITLE: string;
  DESCRIPT: string;
}

const TodoArea = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("api/todos").then((resp) =>{
      console.log(resp.data);
      setTodos(resp.data.todos)
    });
  }, []);

  async function deleteTodo(id: String) {
    try {
        console.log("ID:", id);
        const resp = await axios.delete(`api/todos/${id}`);
        console.log(resp.data);
    } catch (error) {
        console.error("Error:", error);
    }
}

  return (
    <div > 
      {todos.map((todo, index) => {
        return(
          <div className='bg-gray-800 rounded-md shadow-md w-2/3 min-w-min p-4 flex justify-between items-center mt-2'> 
            <h1> {index + 1} </h1>
            <h2> TILTE: {todo.TITLE}</h2>
            <p> {todo.DESCRIPT} </p>
            <p> {todo._id} </p>
            <button onClick={() => deleteTodo(todo._id)}>
              <MdDeleteSweep />
            </button>
          </div>
        );
      })}
    </div>
  )
}

export default TodoArea