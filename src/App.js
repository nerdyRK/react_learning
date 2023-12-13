import { useEffect, useState } from 'react'
import './App.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import sl from 'sweetalert';

function App(){

  let [num,setNum]=useState(0)
  // let [text,settext]=useState("")



  // function handleChange(e){
  //   settext(e.target.value)
  // }

  function increase(){
    setNum(num+1)
    console.log(num)
  }

  function decrease(){
    if(num==0){

      return
    }
    setNum(num-1)
  }

  return <div className="App">
    <h1>Counter App</h1>
    <h1>{num}</h1>
    <div className="btns">
    <button className='btn btn-success' onClick={increase}>Add</button>
    <button className='btn btn-danger' onClick={decrease}>Subtract</button>
    </div>
    {/* <input onChange={handleChange} type="text" /> */}
  </div>
}

export default App