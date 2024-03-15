'use client'
import { useState } from "react";

const InputArea = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [todo, setTodo] = useState([]);

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
                <button type='button' className=" mr-1 bg-gray-600 rounded-md shadow-md p-1 hover:bg-slate-400" onClick={() => console.log(title)}> ADD </button>
                <button type='button' className=" bg-gray-600 rounded-md shadow-md p-1 hover:bg-slate-400" onClick={() => setTitle('')}> CLEAR </button>
            </div>
        </div>
    </div>
  )
}

export default InputArea;