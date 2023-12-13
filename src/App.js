import { useEffect, useState } from 'react'
import './App.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import sl from 'sweetalert';

function App(){

    let [task,settask]=useState("")
    let [task_list,settask_list]=useState([])

    function addTask(){
        settask_list([...task_list,task.toUpperCase()])
    }

    let tasks=task_list.map((task,i)=>{
      return <div className='row justify-content-center'>
           <h2 className='m-1 col-md-6 text-left'>{i+1}. {task}</h2>
           <button onClick={()=>deleteTask(i)} className='btn m-1 btn-danger col-md-1'>Delete</button>
       </div>})

    function deleteTask(i){
      let arr=task_list.filter((task,ind)=>ind!==i)
      settask_list(arr)
  }

      return <div className="App">
        <h1>To-Do List</h1>
        <div className=" row justify-content-center">
          <input className='col-md-6 m-1' type="text" placeholder='Enter task' value={task} onChange={e=>settask(e.target.value)} />
          <button onClick={addTask} className='btn btn-primary col-md-1 m-1'>Add Task</button>
        </div>
        
        {tasks}
        
        <h3>Total tasks: {task_list.length}</h3>
      </div>
}

export default App