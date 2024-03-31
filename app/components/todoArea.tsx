'use client'
import axios from "axios";
import { useEffect, useState } from "react"
import { MdDeleteSweep, MdEditSquare } from "react-icons/md";

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
          <div className='bg-gray-800 rounded-md shadow-md text-white m-4 p-3 flex justify-between w-5/12'>
            <div className="justify-start"> 
              <h1> {index + 1}. {todo.TITLE.toUpperCase()} </h1>
              <h2> </h2>
              <p> {todo.DESCRIPT} </p>
              {/*<p> {todo._id} </p>*/}
            </div>
            <div className="flex mr-2"> 
              <button className="mr-2">
                <MdEditSquare size={40}/>
              </button>
              <button onClick={() => deleteTodo(todo._id)}>
                <MdDeleteSweep size={43}/>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default TodoArea