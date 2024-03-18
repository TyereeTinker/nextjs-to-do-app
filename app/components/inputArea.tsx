'use client'
import { useState } from "react";
import axios from "axios";

const InputArea = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    async function addToDo(title: String, desc: String) {
        const data = {
            title,
            desc
        }
        try {
            const resp = await axios.post("/api/todos", data);
            console.log(resp.data); // assuming response data contains what you need
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    }
    

  return (
    <div>
        <div className='bg-gray-800 rounded-md shadow-md w-2/3 min-w-min p-4 flex justify-between items-center'>
            <div className='mr-3'> 
                <label> TITLE </label>
                <input type='text' placeholder='New To-Do Title' value={title} onChange={(e) => setTitle(e.target.value)}/> 
            </div>

            <div className='mr-3'>
                <label> DESRCIPTION </label>
                <input type='text' placeholder='New To-Do Description' value={desc} onChange={(e) => setDesc(e.target.value)}/> 
            </div>

            <div className='flex'>
                <button type='button' className=" mr-1 bg-gray-600 rounded-md shadow-md p-1 hover:bg-slate-400" onClick={() => addToDo(title, desc)}> ADD </button>
                <button type='button' className=" bg-gray-600 rounded-md shadow-md p-1 hover:bg-slate-400" onClick={() => setTitle('')}> CLEAR </button>
            </div>
        </div>
    </div>
  )
}

export default InputArea;