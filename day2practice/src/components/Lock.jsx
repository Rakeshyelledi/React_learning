import React,{useState} from 'react'

const Lock = () => {
    const [status,setStatus]=useState(false);
    const handelButton=()=>{
        setStatus(!status);
    }
  return (
    <div>
      <h1>Lock Component</h1>
      <p>{status?"Page was locked":"page was unlocked"}</p>
      <button onClick={handelButton}>{status?"Unlock":"Lock"}</button>
    </div>
  )
}

export default Lock
