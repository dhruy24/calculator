import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <div data-testid="counter">Count:- {count}</div>
            <button data-testid="inc" className='px-4 px-2 bg-green-500 mr-2 mt-2' onClick={()=>setCount(prev=>prev+1)}>+</button>
            <button data-testid="dec" className='px-4 px-2 bg-green-500 mr-2 mt-2' onClick={()=>setCount(prev=>prev-1)}>-</button>
            <button data-testid="reset" className='px-4 px-2 bg-blue-500 mr-2 mt-2' onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}

export default Counter