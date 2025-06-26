import React from 'react'
import { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)
    const [value,setValue]=useState('')
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
        if (count <= 0 ? alert(`Can't decrease the value below 0`) : '') {

        }
    }

    const handelValue=(event)=>{
        setValue(event.target.value)
    }
    return (
        <>
            <h1>Counter {count}</h1>
            <div className="card">
                <input type="number" placeholder='Enter number' value={value} onChange={handelValue}/>
                <button>Set</button><br />
            </div>
            <div className='card'>

                <button onClick={increment}>
                    Increment
                </button>
                <button onClick={decrement}>
                    Decrement
                </button>

            </div>
        </>
    )
}

export default Counter
