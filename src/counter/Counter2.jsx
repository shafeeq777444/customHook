import React from 'react'
import useCounter from './useCounter'

function Counter2() {
    const[increment,decrement,reset,count]=useCounter()
  return (
    <div>
        <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reser</button>
      
    </div>
  )
}

export default Counter2
