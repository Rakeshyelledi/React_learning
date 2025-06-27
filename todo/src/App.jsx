import { useState } from 'react'
import './App.css'

function App() {
  const [Inputvalue, setInputvalue] = useState('')
  const [taskArr,settaskArr] = useState([]);

  const handelInput=(event)=>{
    event.preventDefault();
    setInputvalue(event.target.value);
    setInputvalue(event.preventdefault)
  }
  const addTask=()=>{
    const newTask=Inputvalue
    const newTaskArr=[...taskArr,newTask]
    settaskArr(newTaskArr);
    setInputvalue('')
  }
  return (
    <>
      <div className='inputbox'>
        <input type="text" placeholder="Add the todo's using this box" value={Inputvalue} onChange={handelInput}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        <ul>
          {taskArr.map((task)=>{
            return <li>{task}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default App
