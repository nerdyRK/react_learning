import { useEffect, useState } from 'react'
import './App.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import sl from 'sweetalert';

function App(){

// let [num,setNum]=useState(0)
let [name,setname]=useState("")
let [pass,setpass]=useState("")



  // function getData(){
  //   let data={name,pass};
  //   console.log(data)
  // }

  function validate(e){
    e.preventDefault()
    if (name==="rk" && pass==="mall"){
      sl("Login suceesful","","success")
    }else{
      sl("Login failed","","error")

    }
}
 

  return <div className="App">
    <form action="">
    <h1>User Authentication</h1>

    <input className='input form-control' onChange={(e)=>setname(e.target.value)} value={name} placeholder='username' type="text" />
    <input className='input form-control' onChange={(e)=>setpass(e.target.value)} value={pass} placeholder='password' type="text" />
    
    <button type='submit' className='btn btn-success' onClick={validate}>Get data</button>
    </form>
    
  </div>
}

export default App