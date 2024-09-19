import React from 'react'
import useCounter from './useCounter'

function Counter() {
    const[increment,decrement,reset,count]=useCounter(10,10)
  return (
    <div>
        <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reser</button>
      
    </div>
  )
}

export default Counter
